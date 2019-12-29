const mode = {
  scoped: "scoped",
  singleton: "singleton",
  transient: "transient"
};

if (typeof global === "undefined") {
  global = window;
}

global.libdiConfig = {};
global.libdiSingletonInstances = {};

module.exports = {
  /**
   * Adds a singleton service of the type specified in objectType
   * @param {string} id object identifier
   * @param {function} objectType a class or function
   */
  addSingleton(id, objectType) {
    global.libdiConfig[id] = { objectType, mode: mode.singleton };
  },

  /**
   * Adds a transient service of the type specified in objectType
   * @param {string} id object identifier
   * @param {function} objectType a class or function
   */
  addTransient(id, objectType) {
    global.libdiConfig[id] = { objectType, mode: mode.transient };
  },

  getInstanceOf(id) {
    const config = global.libdiConfig[id];

    if (config.mode === mode.singleton) {
      // Singleton
      return (
        global.libdiSingletonInstances[id] ||
        (global.libdiSingletonInstances[id] = new config.objectType())
      );
    } else {
      // Transient
      return new config.objectType();
    }
  }
};
