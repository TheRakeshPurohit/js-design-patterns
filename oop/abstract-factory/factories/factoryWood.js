import { WoodChair, WoodTable } from '../products';

class FactoryWood {
  makeChair() {
    return new WoodChair();
  }

  makeTable() {
    return new WoodTable();
  }
}

export {
  FactoryWood,
};
