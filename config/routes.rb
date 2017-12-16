Rails.application.routes.draw do
    
    namespace :api, defaults: {format: :json} do
        resource :user, only: [:create]
        resource :session, only: [:create, :destroy]
    end

    # fetch current user 
    get '/api/fetch-current-user', to: 'api/sessions#fetch_current_user'

    root 'static_pages#root'
    get '*path', to: 'static_pages#root'
end
