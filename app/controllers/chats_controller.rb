class ChatsController < ApplicationController
  before_action :set_chat, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

  # GET /chats
  def index
    @chats = Chat.order(created_at: :desc)

    render json: @chats,
           include: {
             user: {
               only: %i[id username display_name profile_pic],
             },
           }
  end

  # GET /chats/1
  def show
    render json: @chat,
           include: {
             user: {
               only: %i[id username display_name profile_pic],
             },
           }
  end

  # POST /chats
  def create
    @chat = Chat.new(chat_params)
    @chat.user = @current_user
    @current_user.chat_count += 1
    if @chat.save && @current_user.save
      render json: @chat,
             include: {
               user: {
                 only: %i[id username display_name profile_pic],
                 methods: :chat_total
               },
             },
             status: :created
    else
      render json: [@chat.errors, @current_user.errors], status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chats/1
  def update
    if @chat.update(chat_params)
      render json: @chat,
             include: {
               user: {
                 only: %i[id username display_name profile_pic],
               },
             }
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chats/1
  def destroy
    @chat.destroy
    @current_user.chat_count -= 1
    @current_user.save
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_chat
    @chat = Chat.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def chat_params
    params.require(:chat).permit(:content, :likes, :reposts, :user_id)
  end
end
