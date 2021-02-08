// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `// comments at the beginning should be ignored
<<A>> A
group {B C}
// This is comment
//
// |col1|col2|
// |----|----|
// |val1|val2|
@Starter(User)
RET ret = A.methodA(a, b) {
  // A comment for self interaction<br>
  // \`POST /order\` <br>
  // [X](http://x.x)
  RET ret2 = selfMethod() {
    // A sync interaction after a self interaction
    B.method() {
    A.method()
    }
    B->C.syncMethod(from, abitrary, source, B)
  }
  // A comment for creation
  b = new B()
  "b:B".method()
  // A comment for async self
  B->B: Self Async
  // A comment for async message
  B->C: Async Message
  par {
    A.method
    B.method
  }
  // A comment for alt
  if (X) {
    new X()
    A->B: message
    self
    C: self
    B.alternative() {
      // A comment for creation
      a = new AHasAVerylongnamesoitislong() {
        // A comment for creation
        b = new B()
        // Right to left
        C.method() {
          // Further right to left
          "b:B".method()        
        }
        self()
      }
    }
  } else if (Y) {
    C.method()
    par {
      A.method
      B.method
    }
  } else {
    D.method()
    // A comment for loop
    forEach(Z) {
      Z.method()
    }
  }
}`
