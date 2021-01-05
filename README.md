# geopartner-workshop
- Gennemgang af de forskellige componenter i GC2/Vidi
- Gennemgang af Dockerfiles og docker-compose:
    - build og run containers
  
### Pause

- Routing med Traefik og SSL
- To måder at køre docker:
    - standalone mode
    - swarm mode

## Stand-alone
### Lav et lokalt netwærk
docker network create web

### Start container
docker-compose up --force-recreate

## Swarm
### Lav et swarm wide netværk:
docker network create --driver=overlay --attachable web

### Deploy en ny stack
docker stack deploy -c docker-compose.yml geopartner

### Update en service med et nyt image
docker service update --image geopartner/gc2:prod geopartner_gc2 --with-registry-auth 
