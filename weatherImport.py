# Retrieves data from the meteomatics_weather_api using a temporary login credentials
# and returns the data in a json file. Must install "pip3 install meteomatics"
# Output is a json file with date as the key for dictionaries and the parameters of air temperature and precipitation.

import meteomatics.api as api
import datetime as dt

username = "hackathon_woo"
password = "cJkn4h5qPW7FU"
lat = 40.66128977514189
long = -73.72666306048833
coords = ((lat, long,),)

startdate = dt.datetime.utcnow().replace(hour=0, minute=0, second=0)
enddate = startdate + dt.timedelta(days=30)
print(startdate)
print(enddate)
interval = dt.timedelta(days=1)
parameters = ['t_2m:F', 'precip_24h:mm']

df = api.query_time_series(coords, startdate, enddate,interval,parameters, username, password)
df.to_json('weatherData.json')

