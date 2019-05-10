import { IronChair, IronTable } from '../products';

class FactoryIron {
  makeChair() {
    return new IronChair();
  }

  makeTable() {
    return new IronTable();
  }
}

export {
  FactoryIron,
};
