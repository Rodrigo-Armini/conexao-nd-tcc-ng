from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(User).offset(skip).limit(limit).all()

def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def create_user(db: Session, user: UserCreate):
    db_user = User(
        nome=user.nome,
        email=user.email,
        senha=user.senha,
        data_nascimento=user.data_nascimento  # NOVO CAMPO
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, user_id: int, user: UserUpdate):
    db_user = get_user(db, user_id)
    if not db_user:
        return None
    if user.nome is not None:
        db_user.nome = user.nome
    if user.email is not None:
        db_user.email = user.email
    if user.senha is not None:
        db_user.senha = user.senha
    if user.data_nascimento is not None:  # NOVO CAMPO
        db_user.data_nascimento = user.data_nascimento
    db.commit()
    db.refresh(db_user)
    return db_user
