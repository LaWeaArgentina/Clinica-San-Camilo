Especificaciones para la base de datos del proyecto clínica San Camilo.

Esta base de datos tiene que respaldar el funcionamiento de la app de clínica San Camilo (proyecto de CaC).

La funcionalidad planeada para esta app es la siguiente: 
<ol>
  <li>Crear cuenta de usuario</li>
  <li>autentificar usuario</li>
  <li>sacar turnos</li>
  <li>agregar profesionales</li>
</ol>

Para este fin tenemos que llevar un registro de personas. Cada persona va a ser un usuario, ya sea paciente o profesional. Estos usuarios necesitan credenciales (nombre de usuario y contraseña). Habría que considerar la necesidad de cifrar las contraseñas.

Necesitamos una tabla con las distintas disciplinas. Cada turno hará referencia a un usuario en calidad de paciente y, de haberlo, el profesional. 

Los usuarios que quieran anotarse como prestadores de servicio se vincularán con una disciplina. 

Para simplificar vamos a asumir que los turnos duran 1 hora y no se podrá asignar más de 1 turno al mismo profesional el mismo día a la misma hora. 

Esta base de datos se va a implementar en MySql y nuestro backend la consultará y actualizará en respuesta a lo que los usuarios hagan desde el frontend.

Se debe acordar los nombres de las tablas, los nombres de los campos. sus tipos de datos y las relaciones; de este modo, todos los que escriban código para el backend van a saber siempre cómo interactivo con la base de datos. 

Las tablas serán las siguientes:
<ul>
  <li>usuarios</li>
  <li>turnos</li>
  <li>especialidades</li>
</ul>

<h2>Tabla usuarios</h2>
La tabla usuarios tendrá las siguientes columnas:
<ul>
  <li>id número único autoincremental clave primaria</li>
  <li>nombre-completo texto no nulo</li>
  <li>teléfono text nullable</li>
  <li>nombre-usuario texto no nulo</li>
  <li>contraseña texto no nulo (cifrado)</li>
  <li>especialidad clave foránea</li>
</ul>

``` mysql
id INT NOT NULL AUTO_INCREMENT,
nombre_completo VARCHAR(255) NOT NULL,
sexo ENUM('masculino', 'femenino') NOT NULL,
fecha_nacimiento DATE,
email VARCHAR(255) NOT NULL,
prepaga INT,
especialidad INT,
password VARCHAR(64) NOT NULL,
PRIMARY KEY id,
FOREIGN KEY prepaga, especialidad
```

La id del usuario se usará como clave foránea en los turnos.
La contraseña debería ser un texto, preferentemente cifrado. 
La especialidad será una clave foránea que vincula al usuario con una disciplina si se trata de un profesional. 
