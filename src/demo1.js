// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
title client to gateway
Client->SGW."Get order by id" {
  svc.Get(id) {
    new X()
    svc->svc: self
    rep."load order" {
      =="Start Here"==
      MF."load order from mainframe" {
        MMMMMMMMMMMMMMMMMMMMMMMMMMM()
      }

      =="End Here"==
      if(order == null) {
        @return
        SGW->Client:404
      } else if(order > 1) {
        return order
      } else {
        return none
      }

      while(true) {
        svc.refresh(data)
      }
      processOrder()
    }
    return order
  }
  return response
}`
