class RepliesController < ApplicationController
  before_action :set_reply, only: %i[show update destroy]
  before_action :set_chat, only: %i[create destroy]
  before_action :authorize_request, only: %i[create update destroy]

  def index
    @replies = Reply.where(chat_id: params[:chat_id])
    render json: @replies,
           include: {
             user: {
               only: %i[id username display_name profile_pic],
             },
           }
  end

  def show
    render json: @reply
  end

  # POST /replies
  def create
    @reply = Reply.new(reply_params)
    @reply.chat = @chat
    @reply.user = @current_user
    @chat.reply_count += 1 unless @chat.reply_count.nil?
    @chat.reply_count = 1 if @chat.reply_count.nil?

    if @reply.save && @chat.save
      render json: @reply, status: :created
    else
      render json: @reply.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /replies/1
  def update
    if @reply.update(reply_params)
      render json: @reply
    else
      render json: @reply.errors, status: :unprocessable_entity
    end
  end

  # DELETE /replies/1
  def destroy
    @chat.reply_count = nil if @chat.reply_count == 1
    @chat.reply_count -= 1 unless @chat.reply_count.nil?
    @chat.save
    @reply.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_reply
    @reply = Reply.find(params[:id])
  end

  def set_chat
    @chat = Chat.find(params[:chat_id])
  end

  # Only allow a list of trusted parameters through.
  def reply_params
    params.require(:reply).permit(:content, :user_id, :chat_id)
  end
end
