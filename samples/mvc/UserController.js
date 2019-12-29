const di = require("../../src");

exports.UserController = class {
  constructor(repository = di.getInstanceOf("UserRepository")) {
    console.log("Created: UserController");
    this._repository = repository;
  }

  get() {
    return this._repository.get();
  }
};
