from app import app
from bson.json_util import dumps
import json
from flask import request
from pymongo import MongoClient
client = MongoClient("mongodb+srv://business_app:business_app@parvcluster.zg4ux.gcp.mongodb.net/ParvCluster?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE")
db = client["business_data"]
col=db[ "sampledata" ]
@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"


@app.route('/getdata')
def getdata():
    data=[]
    letval=col.find()
    for i in letval:
        data.append(i)
    print(data)
    return dumps(data)

@app.route('/postdata')
def getdata():
    data=[]
    letval=col.find()
    for i in letval:
        data.append(i)
    print(data)
    return dumps(data)