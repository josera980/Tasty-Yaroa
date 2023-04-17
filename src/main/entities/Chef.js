import User from './Users.js';

export class Chef extends User {
  constructor(id, name, lastName, age, phoneNumber) {
    super(id, name, lastName, age, phoneNumber);
  }
}
