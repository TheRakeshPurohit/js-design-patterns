import { FactoryIron, FactoryWood } from './abstract-factory';

const ironFactory = new FactoryIron();
const woodFactory = new FactoryWood();

const ironChair = ironFactory.makeChair();
console.log('ironChair: ', ironChair);

const woodTable = woodFactory.makeTable();
console.log('woodTable: ', woodTable);
