
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer

from sklearn.metrics.pairwise import cosine_similarity

# chuyển chữ thường
def clean_text(author):
    result = str(author).lower()
    return result

# doc file
df = pd.read_csv('data.csv')

df = df.reset_index(drop=True)

# df.corr()
# bỏ cột không cần

df= df.drop(columns=['productPrice', 'productIcon'])

df = df.reset_index()
df = df.drop('index',axis=1)

df['category'] = df['category'].apply(clean_text)
df['productName'] = df['productName'].apply(clean_text)
df['productVersion'] = df['productVersion'].apply(clean_text)
df['company'] = df['company'].apply(clean_text)


df2 = df.drop(columns=['productId'])
# df2['data'] = df['product_name']
df2['data'] = df2[df2.columns[1:]].apply(
    lambda x: ' '.join(x.dropna().astype(str)),
    axis=1
)

# vectorizer = CountVectorizer()
# vectorized = vectorizer.fit_transform(df2['data'])

tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 1), min_df=0)
new_tfidf_matrix = tf.fit_transform(df2['data'])
# print(new_tfidf_matrix)



similarities = cosine_similarity(new_tfidf_matrix)

df = pd.DataFrame(similarities, columns=df['productId'], index=df['productId']).reset_index()
df.to_csv('indexing.csv')