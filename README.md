![logo](https://p92.hu/binaries/content/gallery/p92website/technologies/angular-overview.png)

# Aplicación con Angular consultando una API externa

## Introducción

Proyecto realizado para el módulo de Angular del máster Full Stack. Se trata de realizar un CRUD a partir de los datos obtenidos desde  de una APIFake. Estos datos hacen referncias a una lista de usuarios.
La aplicación permitirá realizar las funciones de creación, lectura, actualización y borrado de usuarios a través de consultas a la API

## Estado del proyecto

<h4 align="center">
:checkered_flag:Proyecto finalizado:checkered_flag:
</h4>

## Funcionalidades del proyecto

- Funcionalidad 1: visualizar los usuarios en formato grid.
- Funcionalidad 2: poder acceder a los detalles de cada usuario.
- Funcionalidad 3: introducir nuevos usuarios.
- Funcionalidad 4: permitir la opción de borrado.
- Funcionalidad 5: actualización de usuarios.

## Creación de componentes:

1. __Pages:__
    * home: página principal de la web donde se visualiza todos los usuarios
    * view-user: componente donde se podrá visualizar con detalles los datos del usuario
    * not-found: componente que indica que la página solicitada no es posible encontrarla.

2. __Components:__
    * form: componente donde se ha creado el formulario
    * card-user:elemento creado para la visualización de todos los usuarios.
    * header: menú de navegación.

3. __Interfaces:__
    * User para recuperar todos los datos.
    * Users para poder manipular el array de usuarios.

4.  __Servicios:__
    * Donde se realizan las diferentes peticiones a la API.


## Instalación

    1. Clonar el proyecto.
    2. Dirigite a la carpeta del proyecto a través del comando cd tarea_6.
    3. Inserta en la terminal npm install.
    4. Levanta el servidor de ámbito local mediante el comando ng s

## Tecnología
- Angular  versión 16.1.8

## Autor
 <img src="https://avatars.githubusercontent.com/u/34077770?v=4 " width:120px  height:120px><br><sub>Sergio Vélez Díaz</sub>

