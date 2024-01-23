from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer

from sklearn.metrics.pairwise import cosine_similarity


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
async def search(q: str = Query(None, min_length=1)):

    #url/search?q=\

    df = pd.read_csv('indexing.csv')

    recommendations = pd.DataFrame(df.nlargest(9,q)['productId'])
    recommendations = recommendations[recommendations['productId']!=int(q)]
    print(recommendations)

    data = pd.read_csv('data.csv')
    data = data.fillna('')
    data = data.to_dict('records')
    listId = recommendations['productId'].tolist()

    listPro = []
    for pro in data:
        if pro['productId'] in listId:
            listPro.append(pro)
            # print(pro)

    # print(listPro)
   
    return listPro
    # res = [recommendations['product_name'].to_list()]
    # return recommendations['productId'].to_list()
    # return {"result": res}
    

    
    
    
    