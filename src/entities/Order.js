export class Order {
    constructor(id, clientId, orderDetails, totalPrice, status, chef, cashier, transactionDate) {
        this.id = id;
        this.clientId = clientId,
        this.orderDetails = orderDetails;
        this.totalPrice = totalPrice;
        this.status = status;
        this.chef = chef;
        this.cashier = cashier;
        this.transactionDate = transactionDate;
    }
}
