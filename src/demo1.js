// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
A B Client1 Client2
Client1 Client2
// The **first** comment
//- [x] Task 1
//- [ ] Task 2
//
//|a|b|
//|-|-|
//|c|d|
Client1->A.method() {
  B:method()
}
Client2->Client1: Message
Client2->B.method()
Client1->C.method()
// This is a comment
ret = Client1->A.methodA(a, b) { 
    D:method()
    // A comment for self interaction
    // A second line w/ <sp3ci@l/> chars ignored  
    res2 = selfMethod() {
    selfMethod2() {
      Type b = B.method()
      A->B.method()
    }
    // A sync interaction after a self interaction
    B.method() {
      selfB() {
        Type a = A.method()
      }
    }
  }
  // A comment for creation
  b = new B()
  "b:B".method()
  // A comment for async self
  B->B: Self Async
  // A comment for async message
  B->C: Async Message
  // A comment for alt
  if (A.isTrue()) {
    B.alternative() {
      // A comment for creation
      a = new A() {
        // A comment for creation
        b = new B()
        "b:B".methodB()
        C.method
      }
    }
  } else if (Y) {
    C.method()
  } else {
    D.method()
  }
  // A comment for loop
  forEach(Z.NotFinished()) {
    Z.method()
  }
}`
