# CMYK

This project arises with the intention of collaborating with the registration of participants to FrontEndCafé CMYK projects.

## KeystoneJS Starter Template

This project contains a simple list of users and an admin application (`localhost:3000/admin`) with basic authentication.

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running, the Keystone Admin UI is reachable via `localhost:3000/admin`.

## Create table (using FAQ as an example)

1. knex migrate:make create_faq
2. return knex.schema.createTable etc (read documentation)
3. knex migrate:up (it runs every remaining table)
4. to check if it worked: psql... \dt
5. inside "list" create file faq.js
6. createList passing the same string we passed in migrations (in this case 'faq')
7. import in lists/index.js
8. call it inside function loadLists in lists/index.js

## GraphQL API

(`http://localhost:3000/admin/graphiql`).

## Next.js

To run this project first run `npm install`.

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.


# Test the app without backend 

## Main route

https://cmyk-panel-test.vercel.app/

## Success Registation:

This screen is displayed after the participant registration is successful.

path -> /success-registration

full route -> https://cmyk-panel-test.vercel.app/success-registration

## Substitute Participant Form:

This screen is shown when the maximum number of participants has been completed, but with the possibility that the person interested in participating in the event can register as a substitute participant

path -> /substitute-participant-form

full route -> https://cmyk-panel-test.vercel.app/substitute-participant-form

## Closed Form

This screen is displayed when registrations are complete for both participants and substitute participants.

path -> /closed-form

full route -> https://cmyk-panel-test.vercel.app/closed-form
