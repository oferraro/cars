
- Run a docker machine:
`docker run -d -p 33060:3306 --name cars-db -e MYSQL_ROOT_PASSWORD=secret mysql`
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
- Create databases (run migrations)
`npx knex migrate:latest --env development`
- Rollback migrations
`npx knex migrate:down`
- Create seeders
`npx knex seed:make 01_colours`
- Run seeds
`npx knex seed:run`

TODO:

- Add installation details here
- Add configuration details here
- Add knex
- Remove example files like api/hello.ts

Suggestions:
- How to document the API
- How to run docker for Mysql
- Add router
- Add routes like ~/models ~/interfaces etc
- Add user, grant privileges
- Add hexagonal architecture 
- Add validations for data
- Add endpoints
- Add database constraints
POST /cars
GET /car/<id>
DELETE /cars/<id>
GET /cars

To decide:
- colour can be required, colour can be one by default if color doesn't exist, colour is not mandatory

