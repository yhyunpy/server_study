### 개요
1. 원격 서버에 docker를 사용하지 않고 vLLM 서버를 설치한다 
2. 로컬 서버에서 백엔드 실행하여 원격 vLLM 서버 API를 호출한다 
3. 원격 서버에 백엔드 서버를 배포한다 


### 실행

백엔드 실행
```
poetry run uvicorn app.main:app --reload
```

nginx 실행
```
sudo nginx -c /Users/yhyun/Desktop/personal/server_study/nginx/nginx.conf
```

프론트엔드 실행
```
npm start
```
