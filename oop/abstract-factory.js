// ############### Classes ###############
class ProductA {
  getDescription() {
    console.log('This is ', this);
  }
}

class ProductB {
  getDescription() {
    console.log('This is ', this);
  }
}

class ExpertA {
  getDescription() {
    console.log('I\'m ', this);
  }
}

class ExpertB {
  getDescription() {
    console.log('I\'m ', this);
  }
}

// ############### Abstract Factories ###############

class ProductAFactory {
  makeProduct() {
    return new ProductA();
  }

  makeExpert() {
    return new ExpertA();
  }
}

class ProductBFactory {
  makeProduct() {
    return new ProductB();
  }

  makeExpert() {
    return new ExpertB();
  }
}

// ############### Tests ###############
const aFactory = new ProductAFactory();

const aProduct = aFactory.makeProduct();
const aExpert = aFactory.makeExpert();

aProduct.getDescription();
aExpert.getDescription();

console.log('#######################');

const bFactory = new ProductBFactory();

const bProduct = bFactory.makeProduct();
const bExpert = bFactory.makeExpert();

bProduct.getDescription();
bExpert.getDescription();
