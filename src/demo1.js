// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
CS as "Client Service"
AE as "Auth Endpoint"
SG as Gateway
group Backend {
  Lambda
  OrderService
}
@Starter(CS)
CS -> AE: Get Token
CS -> SG: Request
SG -> Lambda: Request forwarded
Lambda -> OrderService: Get Order
if (!available) {
  Lambda -> SG: 404
  SG -> CS: 404
}
`
