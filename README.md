# Configuración Para Producción

## Requisitos de Producción

Para ejecutar la aplicación en producción, asegúrate de tener instalado:

* Node.js 22.14.0
* npm 10.9.2

## Instalación y Despliegue

1. Instalar dependencias de producción:
```bash
npm install --production
```

2. Limpiar y construir:
```bash
npm run clean
npm run build
```

3. Iniciar servidor en producción:
```bash
npm run start
```

## Estructura del Proyecto

```bash
mi-proyecto/
├── package.json
├── .gitignore
├── node_modules/
│   ├── express/
├── src/
│   └── index.js
└── dist/
    └── index.js
```

## Configuración de Entorno

La aplicación espera encontrar las siguientes variables de entorno en producción:

```bash
NODE_ENV=production
PORT=80
```

## Scripts de Producción

El 
 incluye los siguientes scripts:
* Script de desarrollo: "dev": "node ./src/index.js"

```json
{
  "scripts": {
    "clean": "rmdir /s /q dist",
    "build": "mkdir dist && xcopy /s /y /i src dist",
    "start": "node dist\\index.js",
    "start:prod": "cross-env NODE_ENV=production node dist\\index.js"
  }
}
```

## Consideraciones de Seguridad

* El directorio dist
 nunca debe subirse al repositorio
* Las credenciales de producción deben mantenerse seguras
* El directorio dist
 contiene el código optimizado para producción
* Se recomienda usar variables de entorno del sistema operativo para credenciales sensibles

## Dependencias de Producción

```json
{
  "dependencies": {
    "express": "^4.17.1",
    "dotenv": "^16.0.0"
  }
}
```

## Notas de Despliegue

* La aplicación está optimizada para producción con Node.js 22.14.0
* Se utiliza 
 para garantizar compatibilidad multiplataforma
* El directorio dist
 contiene una copia optimizada de los archivos necesarios
* Las variables de entorno deben establecerse antes de ejecutar 
