# KeystoneJS Starter Template

You've created a KeystoneJS project! This project contains a simple list of users and an admin application (`localhost:3000/admin`) with basic authentication.

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running, the Keystone Admin UI is reachable via `localhost:3000/admin`.

## Next steps

This example has no front-end application but you can build your own using the GraphQL API (`http://localhost:3000/admin/graphiql`).

## Crear tabla (usando FAQ como ejemplo)

1. knex migrate:make create_faq
2. return knex.schema.createTable etc (mirar documentación)
3. knex migrate:up (corre todas las que falta correr)
4. se puede chequear en psql -> \dt si efectivamente se creó
5. ir al folder "list" y crear un archivo llamado faq.js
6. createList pasándole el mismo string que pasamos en migrations, en este caso 'faq'
7. importar en lists/index.js
8. llamarla dentro de la función loadLists lists/index.js
