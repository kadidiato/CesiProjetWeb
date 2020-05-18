Pour Lancer Le Backend de l'application  il faut installer toutes les dependence de l'application en faisant
npm install 
Puis lancer application avec la commander 
npm start
Creer la base de donnees du nom "database_api" puis configure le fichier fichier config.json qui se trouve dans le dossier "config"

{
  "development": {
    "username": "nom utilisateur de ta base de donnee",
    "password": " password",
    "database":"database_api",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
Executer cette commande pour inporter la base de donnee

npx sequelize-cli db:migrate

Executer cette commande pour  importer des donnees

npx sequelize-cli db:seed:all
Pour lancer serveur executer la commande
npm start