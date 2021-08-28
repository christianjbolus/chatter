class UsersController < ApplicationController
  before_action :set_user, only: %i[show user_chats]
  def show
    render json: @user,
           except: :password_digest,
           include: :chats #order: {created_at: :desc}
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
               user: @user.attributes.except('password_digest'),
               token: @token,
             },
             status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def user_chats
    @chats = Chat.where(user_id: @user.id).order(created_at: :desc)
    render json: @chats
  end

  private
  def set_user
    @user = User.find_by(username: params[:username])
  end
  # Only allow a list of trusted parameters through.
  def user_params
    params
      .require(:user)
      .permit(:username, :email, :password, :display_name, :bio, :profile_pic)
  end
end
