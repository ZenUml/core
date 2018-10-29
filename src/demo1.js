// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `// comments at the beginning should be ignored
@Starter(User)
// This is comment
RET ret = A.methodA(a, b) { 
  // A comment for self interaction
  selfMethod() {
  selfMethod2() {
  B.method()
  }
    // A sync interaction after a self interaction
    B.method() {
      selfB() {
        A.method()
      }
    }
  }
  // A comment for creation
  b = new B()
  b:B.method()
  // A comment for async self
  B->B: Self Async
  // A comment for async message
  B->C: Async Message
  // A comment for alt
  if (X) {
    B.alternative() {
      // A comment for creation
      a = new A() {
        // A comment for creation
        b = new B()
        C.method
      }
    }
  } else if (Y) {
    C.method()
  } else {
    D.method()
  }
  // A comment for loop
  forEach(Z) {
    Z.method()
  }
}`
