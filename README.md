## Administrador de Trabajos

Autor: Javier Manobanda

###Instrucciones:

##Backend
---
Craer ambiente virtual para el backend

Installar librerias 

```shell
python -m venv .env

source .env/bin/activate --> linux

 .\.env\Scripts\activate --> windows

pip install -r requirements.txt
```

Correr backend ubicandose en la carpeta principal

```shell
python backend/manage.py runserver
python backend/manage.py createsuperuser
ython backend/manage.py makemigrations
python backend/manage.py migrate
```

El backend de forma local esta corriendo en la dirección **http://127.0.0.1:8000/** se puede cambiar asignado la veriable de entorno **URL**

##EndPoints
- Listado de empleos (GET)
http://127.0.0.1:8000/jobs/
- Información detallada de un empleo (GET)
http://127.0.0.1:8000/jobs/< id >

**Ejemplo:** http://127.0.0.1:8000/jobs/43
```json
{
    "id": 43,
    "skill": [
        "python"
    ],
    "date_modified": "2021-10-05T16:35:45.470418Z",
    "date_created": "2021-10-05T16:35:45.470474Z",
    "is_active": true,
    "title": "Tooling",
    "description": "Con manejo de 3d"
}
```

- Crear un empleo (POST)
http://127.0.0.1:8000/jobs/

```json
{
    "title":"jr desarrollador quito ecuador",
    "description": "trabajo medio tiempo en Cuenca",
    "skill": [
        {"name":"c#"},
        {"name":"python"},
        {"name":"python3"}
    ]
}
```

- obtener los skills más usados en los empleos publicados.
http://127.0.0.1:8000/skills/


##Frontend
---
Moverse a la carpeta **frontend** y correr el proyecto de React.

```shell
cd frontend
npm run start
```

