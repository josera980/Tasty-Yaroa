import User from "./Users.js";

export class Client extends User {
    constructor(id, name, lastName, age, phoneNumber) {
        super(id, name, lastName, age, phoneNumber);
    }
}
