class Ioc {
  constructor() {
    this.services = {};
  }

  register(serviceName, service) {
    if (!serviceName) {
      throw new Error('Please verify service name.');
    }

    if (this.services[serviceName]) {
      throw new Error('Service already created.');
    }

    this.services[serviceName] = service;
  }

  getService(serviceName) {
    if (!serviceName) {
      throw new Error('Please verify service name.');
    }

    if (!this.services[serviceName]) {
      throw new Error('Service not found.');
    }
    return this.services[serviceName];
  }
}

const iocInstance = Object.freeze(new Ioc());

export default iocInstance;
