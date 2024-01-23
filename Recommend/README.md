## Cài dependencies
- Chạy lệnh sau để cài các gói phụ trợ 
opencv-python
numpy
matplotlib
SciPy 
uvicorn
fastapi

- chạy: pip install -r requirements.txt
nếu không được thì chạy từng lệnh :

        pip install tên
        
 # Chạy ứng dụng
- Sau khi cài đặt cái gói phụ trợ bạn có thể chạy ứng dụng bằng lệnh sau
- tạo data:
        python RecommendData.py
- chạy api
        uvicorn fastapi_:app --host 0.0.0.0 --port 8888
