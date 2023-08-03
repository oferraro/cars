# Setup and Start the project:
- Run a docker machine:
`docker run -d -p 33060:3306 --name cars-db -e MYSQL_ROOT_PASSWORD=secret mysql`
- Create databases (run migrations)
`npx knex migrate:latest --env development`
- Run seeds
`npx knex seed:run`
- Run the app
`npm run dev` or `yarn dev`
- Run tests
`yarn test` or `npm run test` (then follow the menu options or press a to run all tests)
press q to quit the tests


# TODO (pending):
- Remove example files like api/hello.ts

# Suggestions:
- How to document the API (Add a library like Swagger and the comments in endpoints)
- Add router to avoid ugly file names like [id].ts
- Add routes like ~/models ~/interfaces etc for the imports ("paths": in tsconfig.json)
- Add user, grant privileges in mysql to avoid using root credentials
- Add hexagonal architecture to better organize code
- Add validations for data (probably with a library)
- Add missing tests
- Add missing endpoints (for colours)
- Add database constraints
- Use Postman to create endpoint checks
- Add a IDE configuration (with a plugin or with a file) to format 2 spaces indent and code conventions
- Add pagination option in endpoints
- CamelCase conversion for results (also convert date to substring 10 for results)
- Add 404 not found for delete when id doesn't exist

Debug:
- Clear jest cache
`npx jest --clearCache`
- List docker machines
`docker ps`
- Enter in docker mysql machine
`docker exec -it cars-db bash`
- Stop docker mysql machine
`docker stop cars-db`
- Delete docker mysql machine
`docker rm cars-db`
- View docker mysql machine logs (like tail)
`docker logs -f cars-db`
- View docker mysql machine logs
`docker logs cars-db`
- Connect to mysql from command line
`mysql -h 127.0.0.1 -u root -P 33060 -psecret cars`
- Create database (Connect to mysql and run the command)
`create database cars`
- Add support to knex
`npx knex init`
- Make migrations
`npx knex migrate:make migration_create_cars_table`
- Rollback migrations
`npx knex migrate:down`
- Create seeders
`npx knex seed:make 01_colours`
- If Docker doesn't run (maybe it already exists)
`docker ps -a | head`
- Run the existing docker 
`docker start cars-db`

# Endpoints
POST /cars
GET /car/<id>
DELETE /cars/<id>
GET /cars

To decide:
- colour can be required, colour can be one by default if color doesn't exist, colour is not mandatory

