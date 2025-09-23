@echo off
set PROJECT_NAME=project

REM Cria a árvore de diretórios
mkdir %PROJECT_NAME%
mkdir %PROJECT_NAME%\app
mkdir %PROJECT_NAME%\app\models
mkdir %PROJECT_NAME%\app\schemas
mkdir %PROJECT_NAME%\app\crud
mkdir %PROJECT_NAME%\app\routes
mkdir %PROJECT_NAME%\app\core

REM Cria os arquivos principais
type nul > %PROJECT_NAME%\app\main.py
type nul > %PROJECT_NAME%\app\database.py
type nul > %PROJECT_NAME%\app\models\user.py
type nul > %PROJECT_NAME%\app\schemas\user.py
type nul > %PROJECT_NAME%\app\crud\user.py
type nul > %PROJECT_NAME%\app\routes\user.py
type nul > %PROJECT_NAME%\app\core\config.py
type nul > %PROJECT_NAME%\requirements.txt

echo Estrutura do projeto criada com sucesso 🚀
pause
