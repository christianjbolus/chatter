class UsersController < ApplicationController

  def show
    @user = User.where(username: params[:username])
    render json: @user, except: :password_digest, include: :chats
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

  private

  # Only allow a list of trusted parameters through.
  def user_params
    params
      .require(:user)
      .permit(:username, :email, :password, :display_name, :bio, :profile_pic)
  end
end
