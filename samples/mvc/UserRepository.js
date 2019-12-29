const di = require("../../src");

exports.UserRepository = class {
  constructor(dbconfig = di.getInstanceOf("DatabaseConfiguration")) {
    console.log("Created: UserRepository with config:", dbconfig);
  }

  get() {
    return [{ id: 1, name: "I am a user from UserRepository" }];
  }
};
