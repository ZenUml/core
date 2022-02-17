// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
        // This sample is carefully crafted. It shows a known issues: fragment stretched to
        // svc (should not), because parser thinks the return statement returns to svc.
group G {@VPC svc @RDS rep} Client
Client->SGW."Get order by id" {
  svc.Get(id) {
    rep."load order" {
      if(order == null) {
        @return
        SGW->Client:401
      }
    }
  }
}`
