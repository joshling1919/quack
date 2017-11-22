class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private 

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token 
    @current_user = user 
  end

  def logout 
    current_user.reset_session_token! 
    session[:session_token] = nil 
    @current_user = nil 
  end
end
