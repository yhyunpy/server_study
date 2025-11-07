### 참고 
- https://docs.vllm.ai/en/latest/usage/
- https://huggingface.co/docs/huggingface_hub/guides/cli

### Set Up
새 프로젝트 생성 
```
mkdir vllm-test
cd vllm-test
```

가상환경 설치 및 활성화
```
uv venv --python 3.12 --seed
source .venv/bin/activate
```

vllm 설치
```
# 설치 
uv pip install vllm --torch-backend=auto

# 버전 확인 
uv pip show vllm
```

Hugging Fase Hub에서 모델 다운로드
```
# Hugging Face 설치 
uv pip install -U "huggingface_hub"

# 폴더 생성 
mkdir models
cd models 

# 모델 다운로드 
huggingface-cli download Qwen/Qwen3-32B \
  --local-dir ./Qwen3-32B \
  --local-dir-use-symlinks False

# 다운로드 중 중단 시에는 아래 인자를 추가하여 실행 
  --resume-download
```
### vllm 서버 실행
```
cd vllm-test 

CUDA_VISIBLE_DEVICES=0,1 \ # GPU 0, 1번 사용
vllm serve ./models/Qwen3-32B \
  --gpu-memory-utilization 0.9 \ # GPU 사용률
  --max-model-len 32768 \ # 최대 컨텍스트 길이
  --port 11434 \ 
  --host 0.0.0.0 \ # 외부접속 허용 
  --tensor-parallel-size 2 \ # 두 GPU에 모델을 절반씩 로드 
  --reasoning-parser qwen3 \
  --served-model-name vllm-main \
  --enable-auto-tool-choice \
  --tool-call-parser hermes

```