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

Necesitamos una tabla con las distintas disciplinas. Cada turno hará referencia a una disciplina y, de haberlo, el profesional. 

Los usuarios que querrán anotarse como prestadores de servicio se vincularán con una disciplina. 

Para simplificar vamos a asumir que los turnos dirán 1 hora y no sé podrá asignar más de 1 turno al mismo profesional el mismo día a la misma hora. 
