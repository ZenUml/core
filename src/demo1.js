// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `<<Controller>> OrderController
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
      a1 {
        PurchaseService.doIt()
      }
      PurchaseService.createPO(order)
      InvoiceService.createInvoice(order)      
    }
  }
}`
