DrewbaninCom::Application.routes.draw do

  scope "/api" do
    resources :metric_types, :defaults => { :format => 'json' }
  end

  #root to: "welcome#index"
end
