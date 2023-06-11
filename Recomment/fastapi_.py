from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer

from sklearn.metrics.pairwise import cosine_similarity


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Danh sách các nguồn được phép gửi yêu cầu
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def clean_text(author):
    result = str(author).lower()
    return result

@app.get("/search")
async def search(q: str = Query(None, min_length=1)):

    #url/search?q=\

    df = pd.read_csv('indexing.csv')

    # search
    q = clean_text(q)
    # product = 'điện thoại di động samsung galaxy s21 ultra'
    recommendations = pd.DataFrame(df.nlargest(9,q)['product_name'])
    recommendations = recommendations[recommendations['product_name']!=q]
    print(recommendations)
    
    # res = [recommendations['product_name'].to_list()]
   
    return recommendations['product_name'].to_list()
    # return {"result": res}
    

if __name__ == "__main__":
    uvicorn.run(app, port=8888, host="localhost")

    
    
    
    