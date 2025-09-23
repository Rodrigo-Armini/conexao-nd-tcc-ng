from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings

# URL sem database
DB_URL_BASE = settings.DATABASE_URL.rsplit("/", 1)[0] + "/"
DB_NAME = settings.DATABASE_URL.rsplit("/", 1)[1]

# Cria engine sem database
engine_base = create_engine(DB_URL_BASE, echo=True)

# Cria o database se não existir
with engine_base.connect() as conn:
    conn.execute(text(f"CREATE DATABASE IF NOT EXISTS {DB_NAME}"))
    conn.commit()

# Engine com database
engine = create_engine(settings.DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency para FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
