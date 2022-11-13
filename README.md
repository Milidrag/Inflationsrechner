# PBC
Preisentwicklung für Butter &amp; Co



## Install Database 
First install the database "PostgreSQL". You can download it on https://www.postgresql.org/

Then you have to init the tables. You will find the sql-file in the backend folder. The file is called "init.sql"

Second you have to import the necessary "csv"-files. You will also find them in the backend folder. A process which describes the import process can be found on following link https://hevodata.com/learn/postgresql-import-csv/ (method 2 worked fine in our case). In case you receive a "binary path"-error this clip should help you https://www.youtube.com/watch?v=7cBkXKCY4Ew&ab_channel=JunaidQaiser


# In Docker:
## Databse
Pull postgres image: docker pull postgres

Start postgres container: docker run --name postgres -e POSTGRES_PASSWORD=postgres --network="host" -p 5432:5432 -d postgres

## Backend
Pull Inflationsrechener Backend image: docker pull ghcr.io/milidrag/inflationsrechnerbackend:main

Start Inflationsrechner Backend container: docker run --network="host" ghcr.io/milidrag/inflationsrechner:main

## Frontend
Pull Inflationsrechener Frontend image: docker pull ghcr.io/milidrag/inflationsrechnerfrontend:main

Start Inflationsrechner Frontend container: docker run ghcr.io/milidrag/inflationsrechnerfrontend:main

# When cloning the Repository:

cd into the Inflationsrechner directory and run:

docker-compose up

to delete the containers run:

docker-compose down
