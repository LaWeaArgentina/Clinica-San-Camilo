<h1>Especificaciones para la base de datos del proyecto clínica San Camilo.</h1>

<h2>Generalidades</h2>
Esta base de datos tiene que respaldar el funcionamiento de la app de clínica San Camilo (proyecto de CaC).

La funcionalidad planeada para esta app es la siguiente:

<ol>
  <li>Crear cuenta de usuario</li>
  <li>Autentificar usuario</li>
  <li>Sacar turnos</li>
  <li>Agregar profesionales</li>
</ol>

Para este fin tenemos que llevar un registro de personas. Cada persona va a ser un usuario, ya sea paciente o profesional. Estos usuarios necesitan credenciales (nombre de usuario y contraseña). Habría que considerar la necesidad de cifrar las contraseñas.

Necesitamos una tabla con las distintas disciplinas. Cada turno hará referencia a un usuario en calidad de paciente y el profesional asignado (de sera una consulta general habra un profesional genérico para asignar).

Los usuarios que quieran anotarse como prestadores de servicio se vincularán con una especialidad.

Para simplificar vamos a asumir que los turnos duran 1 hora y no se podrá asignar más de 1 turno al mismo profesional, el mismo día, a la misma hora.

Esta base de datos se va a implementar en MySql y nuestro backend la consultará y actualizará en respuesta a lo que los usuarios hagan desde el frontend.

Se debe acordar los nombres de las tablas, los nombres de los campos, sus tipos de datos y las relaciones; de este modo, todos los que escriban código para el backend van a saber siempre cómo interactuar con la base de datos.

Las tablas serán las siguientes:

<ul>
  <li>usuarios</li>
  <li>turnos</li>
  <li>especialidades</li>
  <li>prepagas</li>
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

```mysql
CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_completo VARCHAR(255) NOT NULL,
  sexo ENUM('masculino', 'femenino') NOT NULL,
  fecha_nacimiento DATE,
  email VARCHAR(255) NOT NULL,
  prepaga INT NOT NULL,
  especialidad INT,
  password VARCHAR(64) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (prepaga)
    REFERENCES prepagas(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (especialidad)
    REFERENCES especialidades(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=INNODB
```

La id del usuario se usará como clave foránea en los turnos, tanto para el campo de paciente como el del profesional.
La contraseña debería ser un texto, preferentemente cifrado.
La especialidad será una clave foránea que vincula al usuario con una disciplina si se trata de un profesional.
La prepaga será una clave foránea que vincula al usuario con un prestador de medicina prepaga, que se almacenaran en otra tabla.
La tabla tendrá como mínimo un usuario el cual representará el profesional para todos los turnos de consulta general.
Su especialidad será un registro de la tabla de especialidades que llevará nombre 'Consulta General'.

<h2>Tabla Prepagas</h2>
La tabla prepagas contendrá la lista de prestadores de medicina prepaga. Tendrá solamente dos columnas, id y nombre.
La columna de id será la primary key y se usará en la tabla de usuarios para unir un usuario con una prepaga.
La tabla debe contener como mínimo un registro con nombre 'No' que se usará para los pacientes sin prepaga.

```mysql
CREATE TABLE prepagas (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=INNODB
```

<h2>Tabla Especialidades</h2>
La tabla especialidades contendra todas las especialidades médicas que se pueden atender en la clínica.
Tendrá dos columnas, id y nombre. El id será la clave principal y se usará en la tabla de usuarios para determinar la especialidad de un usuario que además sea profesional de salud.
La tabla contendrá como mínimo un registro que representará las consultas generales, preferentemente con el contenido nombre='Consulta General'.

```mysql
CREATE TABLE especialidades (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=INNODB
```
