class RepliesController < ApplicationController
  before_action :set_reply, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

  # GET /replies/1
  def show
    render json: @reply
  end

  # POST /replies
  def create
    @reply = Reply.new(reply_params)
    @reply.chat = Chat.find(params[:chat_id])
    @reply.user = @current_user

    if @reply.save
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
    @reply.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_reply
    @reply = Reply.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def reply_params
    params.require(:reply).permit(:content, :user_id, :chat_id)
  end
end
