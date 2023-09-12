## Passo a Passo

npm i -D typescript # para instalar o compilador de typescript

npm i -D ts-node nodemon

npx tsc --init # para criar o tsconfig.json

colocar "type": "module", no package.json

colocar as configurações no package.json

```json
 "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
```
