class TopController < ApplicationController
    API_KEY = 'c9987c59be99f04524daf29578e8f832';
    city = 'Tokyo';
    def index
        @lists = List.where(user: current_user).order("created_at ASC")
       
        uri = URI.parse("http://api.openweathermap.org/data/2.5/weather?q=tokyo,jp&units=metric&APPID=#{API_KEY}")
            response = Net::HTTP.get_response(uri)
            result = JSON.parse(response.body)
            @weather = result["weather"][0]["main"]
            @weather_description = result["weather"][0]["description"]
            icon = result["weather"][0]["icon"]
            @temp = result["main"]["temp"]
            @temp_min = result["main"]["temp_min"]
            @temp_max = result["main"]["temp_max"]
            @img = "http://openweathermap.org/img/wn/#{icon}@2x.png"
           
          
    end
    
end
