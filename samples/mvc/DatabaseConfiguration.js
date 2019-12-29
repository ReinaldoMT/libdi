exports.DatabaseConfiguration = class {
  constructor() {
    console.log("Created: DatabaseConfiguration");
    this.dbType = "myDbEngine";
    this.dbPath = "protocol://mydbpath";
  }
};

exports.DatabaseConfigurationMongo = class {
  constructor() {
    console.log("Created: DatabaseConfigurationMongo");
    this.dbType = "mongo";
    this.dbPath = "protocol://url_to_mongo_database";
  }
};
