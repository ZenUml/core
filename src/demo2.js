// Advanced functionality:
// Right to left
// RTL in if
// RTL in while
export default `RET ret = A.methodA() {
  B.methodB() {
    A.methodA()
  }
  if (X) {
    C.methodC() {
      a = A.methodA()
    }
  }
  while (Y) {
    C.methodC() {
      A.methodA()
    }  
  }  
}`
