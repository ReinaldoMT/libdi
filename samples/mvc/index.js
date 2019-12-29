const di = require("../../src");
// const crypto = require("crypto");
// const uuid = crypto.createHash("md5").digest("hex");
// console.log(uuid);

require("./config");

const controller1 = di.getInstanceOf("UserController");
const controller2 = di.getInstanceOf("UserController");

console.table(controller1.get());
console.table(controller2.get());
