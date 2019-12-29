"use strict";

const di = require("../../src");
const { UserRepository } = require("./UserRepository");
const { UserController } = require("./UserController");
const { DatabaseConfigurationMongo } = require("./DatabaseConfiguration");

di.addTransient("UserRepository", UserRepository);
di.addTransient("UserController", UserController);
di.addSingleton("DatabaseConfiguration", DatabaseConfigurationMongo);
