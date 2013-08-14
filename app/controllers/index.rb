
get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end
 
post '/grandma' do
  @reply = (params[:user_input] == params[:user_input].upcase ? "Not since 1983!" : "Speak up, kiddo!")
  erb :_grandma_reply, layout: false
end
