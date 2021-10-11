# Job Manager App

<div align="center">
    <h1 style="text-align: center">Job Manager</h1>
</div>

_About Project_
Web App to public jobs.

## Installation🚀

_How copy the project._

1. Clone the project

```shell
git clone
```

### Pre-requisites 📋

_What I need installs?_

1. Install dependencies to Django Backend

```shell
python -m venv .env
source .env/bin/activate --> linux
 .\.env\Scripts\activate --> windows
pip install -r requirements.txt
```

2. Install dependencies to React Frontend

```shell
python backend/manage.py createsuperuser
ython backend/manage.py makemigrations
python backend/manage.py migrate
```

### Usage 🔧

_How use?_

_First step_ Run the backend

```shell
python backend/manage.py runserver
```

_Second step_ Move to the **frontend** folder and run frontend

```shell
cd frontend
npm run star
```

_Some example about the solution in the project_

The backend have for default the localhost **http://127.0.0.1:8000/** you can change using the environment variable **URL**

##EndPoints

- Get available jobs (GET)
  http://127.0.0.1:8000/jobs/
- Get information about job (GET)
  http://127.0.0.1:8000/jobs/< id >

**Example:** http://127.0.0.1:8000/jobs/43

```json
{
  "id": 43,
  "skill": ["python"],
  "date_modified": "2021-10-05T16:35:45.470418Z",
  "date_created": "2021-10-05T16:35:45.470474Z",
  "is_active": true,
  "title": "Tooling",
  "description": "Con manejo de 3d"
}
```

- Create a job (POST)
  http://127.0.0.1:8000/jobs/

```json
{
  "title": "jr desarrollador quito ecuador",
  "description": "trabajo medio tiempo en Cuenca",
  "skill": [{ "name": "c#" }, { "name": "python" }, { "name": "python3" }]
}
```

- Get the most useful skills.
  http://127.0.0.1:8000/skills/

## Execute test ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Test end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Autors ✒️

- **Javier Manobanda** - [Github](https://github.com/JaviManobanda)

## License 📄

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

⌨️ with❤️ by [Javier Manobanda](https://github.com/JaviMiot)
