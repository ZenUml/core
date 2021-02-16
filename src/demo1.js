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
group BackEndService {
  A1
}
@Starter("Web Browser")
//\`POST /orders\`
OrderController.create(payload) {
  OrderService.create(payload) {
    order = new Order(payload)
    par {
      a1 {
        PurchaseService.doIt()
        new OrderController()
      }
      PurchaseService.createPO(order)
      InvoiceService.createInvoice(order)      
    }
  }
}`
