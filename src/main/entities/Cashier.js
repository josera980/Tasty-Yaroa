import User from './Users.js';

export class Cashier extends User {
  constructor(id, name, lastName, age, phoneNumber) {
    super(id, name, lastName, age, phoneNumber);
  }
}
