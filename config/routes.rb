Rails.application.routes.draw do


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
      root "static_pages#root"

      namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :index, :show, :update]
        resource :session, only: [:create, :destroy]
        resources :posts, only: [:index, :create, :show, :update]
        post "posts/:id/like", to: "posts#like"
        delete "posts/:id/unlike", to: "posts#unlike"
        post "users/:id/follow", to: 'users#follow'
        delete "users/:id/unfollow", to: 'users#unfollow'

      end

end
