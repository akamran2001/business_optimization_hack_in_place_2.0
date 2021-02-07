from app import app
from pymongo import MongoClient
client = MongoClient("mongodb+srv://business_app:business_app@parvcluster.zg4ux.gcp.mongodb.net/ParvCluster?retryWrites=true&w=majority")
db = client.test;
print(db.collection_names);
@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"