
--Introducción
   Realizar un CRUD de los datos obtenidos a partir de los datos obtenidos a través de una APIFake. Estos datos hace referncia a una lista de usuarios.

--funcionalidades
    Visualizar los usuarios en formato grid.
    Poder acceder a los detalles de cada usuario.
    Introducir nuevos usuarios.
    Permitir la opción de borrado.
    Actualización de usuarios.

--Para su realización se ha procedido a crear los siguientes componentes:
    *Pages:
        -home: página principal de la web donde se visualiza todos los usuarios
        -view-user: componente donde se podrá visualizar con detalles los datos del usuario
        -not-found: componente que indica ue la página solicitada no es posible encontrarla.

    *Components:
        -form: componente donde se ha creado el formulario
        -card-user:elemento creado para la visualización de todos los usuarios.
        -header: menú de navegación.

--Interfaces: Se realizan dos interfaces una de tipo User para obtener todos 
  datos  y otra de tipo Users para poder manipular el array de usuarios.

--Servicios: Donde se realizan las diferentes peticiones a la API.

Los recursos obtenidos para los distintos iconos se encuentran en la carpeta assets, en ella hay un archivo .ts  de donde se obtiene las direcciones de las diferentes imágenes.
    