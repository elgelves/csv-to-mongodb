# CSV-TO-MONGODB

## Descripción

Esta aplicación en NodeJS procesa archivos CSV y almacena los datos en una base de datos MongoDB.

## Requisitos Previos

- Node.js (v14+)
- npm o yarn
- Docker (opcional, para la opción 2)
- kubectl (opcional, para Kubernetes)
- Minikube o cluster Kubernetes (opcional)

## Configuración Inicial

1. Crear archivo `.env` en la raíz del proyecto con las variables necesarias:
   ```env
   MONGODB_URI=tu_uri_de_conexion_mongodb
   # Otras variables si son necesarias

Esta aplicación procesa archivos CSV y almacena los datos en una base de datos MongoDB. 

## Instrucciones

### Opción 1: Ejecución Local

1. **Descomprimir el ZIP**.
2. **Instalar Dependencias**:
   ```bash
   npm install
3. **Ejecutar la app**:
   ```bash
   npm install

### Opción 2: Ejecución con Docker y Kubernetes
1. **Construir archivo Dockerfile**:
2. **Correr imagen y aplicar manifiestos de la carpeta k8s**:
3. **Seguir con los pasos del README.md de k8s**:
