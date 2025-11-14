# ejemplo mínimo (app/main.py)
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST, Counter, Histogram

app = FastAPI(title="merch-returns-analyzer-vanilla")

# CORS (imprescindible para llamadas desde frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# métricas
REQUEST_COUNT = Counter("app_requests_total", "Total app HTTP requests", ['method', 'endpoint'])
REQUEST_LATENCY = Histogram("app_request_latency_seconds", "Request latency seconds", ['endpoint'])

@app.middleware("http")
async def metrics_middleware(request, call_next):
    import time
    start = time.time()
    response = await call_next(request)
    resp_time = time.time() - start
    REQUEST_COUNT.labels(method=request.method, endpoint=request.url.path).inc()
    REQUEST_LATENCY.labels(endpoint=request.url.path).observe(resp_time)
    return response

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/metrics")
def metrics():
    return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)

# ejemplo endpoint
@app.post("/predict")
async def predict(payload: dict):
    return {"prediction": "ok", "input": payload}
