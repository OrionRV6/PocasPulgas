from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

# Inicializamos la aplicación
app = FastAPI(title="API Clínica Veterinaria")

# Definimos el modelo de datos
class Mascota(BaseModel):
    id: int
    nombre: str
    especie: str
    dueño: str

# Base de datos simulada en memoria (aquí iría la conexión a PostgreSQL después)
db_mascotas = [
    Mascota(id=1, nombre="Firulais", especie="Perro", dueño="Benjamín"),
    Mascota(id=2, nombre="Michi", especie="Gato", dueño="Anais")
]

# Ruta para obtener la lista de mascotas (GET)
@app.get("/mascotas", response_model=List[Mascota])
def obtener_mascotas():
    return db_mascotas

# Ruta para registrar una nueva mascota (POST)
@app.post("/mascotas", response_model=Mascota)
def registrar_mascota(mascota: Mascota):
    db_mascotas.append(mascota)
    return mascota