# 💉 libdi
A Simple dependency injection for Node.js

*Current version: 0.1.0*

## Get Started
Instalation
```sh
npm install -save libdi
```
## Loading libdi
```js
// Load a libdi object
const di = require('libdi');
```

### Configuration:
Setting up dependency injection is extremely easy.
```js
// Set the MyClass to a new instance on each call.
di.addTransient("MyAlias", MyClass);

// Set the MySincletonClass to a singleton instance
di.addSingleton("MySingletonAlias", MySingletonClass);
```

### Creating your objects
```js
class MySingletonClass {
    constructor () {
        this.mySingletonParam = 'my awesome configuration!';
    }
}

// .....

class MyClass {
    constructor (config = di.getInstanceOf("MySingletonAlias")) {
        // config is a singleton object
        console.log(config.mySingletonParam) // 'my awesome configuration!'
        // More code here ...
    }
}
```

### Getting an instance of MyClass
```js
const a = di.getInstanceOf("MyAlias");
const b = di.getInstanceOf("MyAlias");
// a and b are diferent instances of MyClass

const x = di.getInstanceOf("MySingletonAlias");
const y = di.getInstanceOf("MySingletonAlias");
// x and y are a same instance of MySingletonClass
```

## Roadmap (TODO):
* Integration with express as express module
* addScoped method (create instances in request scope)