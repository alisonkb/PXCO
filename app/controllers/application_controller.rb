class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def sign_in(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def sign_out
    current_user.reset_session_token
    session[session_token] = nil
    @current_user = nil
  end

  def signed_in?
    !!@current_user
  end

  def current_user
    @current_user
  end

  def require_sign_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end






end
