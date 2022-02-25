// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `title Order Service (Example)
@Lambda OrderController
<<BFF>> OrderService
group BusinessService {
  PurchaseService
  InvoiceService
}
//\`POST /orders\`
OrderController.create(payload) {
  OrderService.create(payload) {
    order = new Order(payload)
    par {
      PurchaseService.createPO(order)
      InvoiceService.createInvoice(order)
    }
  }
}`
