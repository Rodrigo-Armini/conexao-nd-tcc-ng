from pydantic import BaseModel, EmailStr
from datetime import date

class UserBase(BaseModel):
    nome: str
    email: EmailStr
    data_nascimento: date | None = None

class UserCreate(UserBase):
    senha: str

class UserUpdate(BaseModel):
    nome: str | None = None
    email: EmailStr | None = None
    senha: str | None = None
    data_nascimento: date | None = None

class UserOut(UserBase):
    id: int

    class Config:
        orm_mode = True
