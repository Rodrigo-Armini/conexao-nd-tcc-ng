from fastapi import FastAPI
from app.database import Base, engine
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user

# Cria tabelas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ConexãoND API")

# Configuração do CORS
origins = [
    "http://localhost:4200",  # Angular dev
    "http://127.0.0.1:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # ou ["*"] para liberar todos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclui rotas
app.include_router(user.router)

@app.get("/")
def root():
    return {"message": "API rodando com sucesso 🚀"}
