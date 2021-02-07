# Retrieves data from the meteomatics_weather_api using a temporary login credentials
# and returns the data in a json file. Must install "pip3 install meteomatics"

import meteomatics_weather_api as api
import datetime as dt
from pandas import DataFrame

username = hackathon_woo
password = cJkn4h5qPW7FU
lat = 40.66128977514189
long = -73.72666306048833

startdate = dt.datetime.utc
enddate = startdate + dt.timedelta(days=90)
interval = dt.timedelta(hours=1)
parameters = ['air_temperature', 'relative_humidity', 'precipitation_amount_3h', 'wind_speed']

df = api.query_time_series(lat,long,startdate,enddate,interval,parameters, username, password)
df.to_json('weatherData.json')

print(response.text)
