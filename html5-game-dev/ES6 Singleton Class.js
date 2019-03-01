import Component from './Component';

class ClassName { //SINGLETON CLASS
  constructor() {
    if (!instance) { var instance = this; }
    this.time = new Date();
  }
	
}

export default new ClassName();