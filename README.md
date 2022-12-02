# PBC
Preisentwicklung für Butter &amp; Co


# Without Docker
## Install Database 
First install the database "PostgreSQL". You can download it on https://www.postgresql.org/

# In Docker:
## Database
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
