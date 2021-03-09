# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
#### CRUD operations
All the CRUD operations fall under one endpoint via query parameters. 

Endpoint to get data /api/getNearbyTransitOptions/:id
The endpoint is /api/updateNearbyTransitOptions/:id

To add an entry to database you want to use 3 key words:
'add', 'update', 'del'

For example:
/api/updateNearbyTransitOptions/?add=1 
in addition to your json object will add a document to the first available id incrementing. (Notice that you won't need to provide an ID in URL)

/api/updateNearbyTransitOptions/55?update=id
a update requires that you provide an id parameter and a 'update' query of true.

/api/updateNearbyTransitOptions/22?del=1
deletes record at id number provided.

At the moment, finding nearby workspaces requires a database from a separate service on the same application. Randomized data will be seeded into the final database implementation. 

