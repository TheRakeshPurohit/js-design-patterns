class WoodenDoor {
  #material = 'wood';

  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  getW() {
    return this.w;
  }

  getH() {
    return this.h;
  }

  get material() {
    return this.#material;
  }
}

class DoorFactory {
  static makeDoor(w, h) {
    return new WoodenDoor(w, h);
  }
}

const woodenDoor = DoorFactory.makeDoor(80, 200);
console.log('woodenDoor.getW(): ', woodenDoor.getW());
console.log('woodenDoor.getH(): ', woodenDoor.getH());
console.log('Door Material: ', woodenDoor.material);
