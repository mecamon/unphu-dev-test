# React Test

Esta es una prueba de evaluación para la posición de `TypeScript React developer` en el departamento de desarrollo de la UNPHU.

> Nota: Al completar la prueba, debes enviar un link del repositiorio con la solución a `test-email@unphu.edu.do`

---

## Prueba

Se necesita una pagina web dinámica que contenga las siguientes secciones. Los requerimientos a seguir son los siguientes:

- Una página de login para introducir mi usuario y contraseña con un botón de **entrar** para acceder a las demas secciones.
- Al pulsar el botón de **entrar**, me debe redirigir a un dashboard administrativo.
- El dashboard administrativo debe contener:
  - Un menu (sidebar), con dos items **Agregar usuario** y **lista de usuarios**.
  - Una cabecera (header), con un icono de usuario y un menú desplegable con la opción para cerrar la sesión.
  - Al pulsar **Cerrar sesión** el usuario debe ser redirigido al login.
- Al pulsar **Agregar usuario**, debe dirigirme a un formulario donde puedo editar todos los campos de un usuario [(detallados más abajo)](#datos).
- Al pulsar **Guardar** (en el formulario) debe dirigirme a la lista de usuarios.
- La sección **Lista de usuarios**:
  - Debe mostrar una lista paginada un máximo 5 registros por pagina.
  - Debe mostrar dos opciones de navegación en la paginación (**Previa** / **Siguiente**).

**Importante**:

- Los formularios (login o agregar usuario) deben de terner validación en los campos necesarios.
- La parte principal del dashboard puede estar vacía.
- En la lista de usuarios, puedes usar una tabla, una lista, tarjetas o contenedores. Coloca los items a tu gusto.
- Puedes utilizar los colores de tu preferencia.
- Si piensas incluir animaciones, debes usar css / sass para las mismas (no jquery).
- Implementar `REDUX` en los formularios.

**Observaciones**:

- Escribir codigo reausable seria un plus.
- Puedes usar el framework de estilos con el que te sientas más cómodo, al igual que los colores y distribución de los elementos.
- Sientete libre de agregar lo que creas necesario para completar dicha prueba, solo no abuses del uso de librerias, nos gustaria comprorbar tu habilidades planas.

## Requisitos

- Typescript
- Hooks
- Context api
- Redux
- Sass

---

## Datos

Campos del formulario de usuario:

- Nombres
- Primer apellido
- Segundo apellido
- Cédula
- Edad
- Género
- Dirección(Se debe permitir agregar multiples direcciónes)
- Teléfono
- Correo electrónico
- Estado civil
- Tienes hijos?
- Fecha de nacimiento

Campos a mostrar en el listado:

- ID
- Nombre completo
- Correo electrónico
- Género

> _¡Buena Suerte!_
