export class Order {
    constructor(id, clientId, dishes, totalPrice) {
        this.id = id;
        this.clientId = clientId,
        this.dishes = dishes;
        this.totalPrice = totalPrice;
    }
}