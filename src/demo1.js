// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
@Lambda <<A>> A
// comments at the beginning should be ignored
group "B C" {@EC2 B @ECS C}
"C 2" "B 1"
// This is comment
//
// |col1|col2|
// |----|----|
// |val1|val2|
@Starter("User")
new B
RET ret = A.methodA(a, b) {
  // A comment for self interaction<br>
  // \`POST /order\` <br>
  // [X](http://x.x)
  RET ret2 = selfMethod() {
    // A sync interaction after a self interaction
    B.method() {
      A.method()
      return B
    }
    "B 1"->"C 2".syncMethod(from, abitrary, source, B)
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
    new X() {
      return smallX
    }
    return X
    A->B: message
    self {
      return C
    }
    C: self
    B.alternative() {
      // A comment for creation
      a = new AHasAVerylongnamesoitislong() {
        // A comment for creation
        b = new B()
        // Right to left
        C.method() {
          // Further right to left
          B.method()
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
    D.method() {
      return D
    }
    // A comment for loop
    forEach(Z) {
      Z.method() {
        return Z
      }
    }
  }
}`
