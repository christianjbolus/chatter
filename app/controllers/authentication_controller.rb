class AuthenticationController < ApplicationController
  before_action :authorize_request, only: :verify

  # POST /auth/login
  def login
    @user = User.find_by(username: login_params[:username])

    # authenticate method provided by Bcrypt and 'has_secure_password'
    # Using safe navigation operator (&.) to short circuit if statement if user is nil
    if @user&.authenticate(login_params[:password])
      token = encode({ id: @user.id })
      render json: {
               userData: @user.attributes.except('password_digest'),
               accessToken: token,
             },
             status: :ok
    else
      render json: { errors: 'Invalid credentials' }, status: :unauthorized
    end
  end

  # POST /auth/refresh  # Refresh token
  def refresh
    token = encode({ id: login_params[:id] })
    render json: { accessToken: token }, status: :ok
  end 

  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except('password_digest'), status: :ok
  end

  private

  def login_params
    params.require(:authentication).permit(:username, :password, :id)
  end
end
