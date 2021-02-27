// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `@Actor Client
@Lambda Controller
group Docker {
  OrderService
  OrderRepo
}
@Boundary MF as "Mainframe zVM"
// GET /orders/:id
Client->Controller.GetOrder(id) {
  OrderService.Get(id) {
    OrderRepo."load order by id" {
      MF.load
      if (notFound) {
        return null
        @return
        OrderService->Controller: null
        @return
        Controller->Client: 404
      }
      return order
    }
    return order
  }
  return response
}`
