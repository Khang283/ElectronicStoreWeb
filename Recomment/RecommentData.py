
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer

from sklearn.metrics.pairwise import cosine_similarity

# chuyển chữ thường
def clean_text(author):
    result = str(author).lower()
    return result

# doc file
df = pd.read_csv('data.csv')
    #in 5 dòng đầu file excel
# df.head()

df = df.reset_index(drop=True)

# df.corr()
# bỏ cột không cần
df = df.drop(columns=['product_stock', 'product_rating', 'product_sold','category_id', 'company_id', 'product_price'])
df= df.drop(columns=['product_status', 'product_sales', 'product_version'])
df = df.drop(columns=['product_id'])

df = df.reset_index()
df = df.drop('index',axis=1)

df['product_name'] = df['product_name'].apply(clean_text)

df2 = df
df2['data'] = df['product_name']

vectorizer = CountVectorizer()
vectorized = vectorizer.fit_transform(df2['data'])

similarities = cosine_similarity(vectorized)

df = pd.DataFrame(similarities, columns=df['product_name'], index=df['product_name']).reset_index()
df.to_csv('indexing.csv')