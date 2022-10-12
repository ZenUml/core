// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
// comments at the beginning should be ignored
title This is a title
@Lambda <<stereotype>> ParticipantName
group "B C" {@EC2 B @ECS C}
"bg color" #FF0000
@Starter("OptionalStarter")
new B
ReturnType ret = ParticipantName.methodA(a, b) {
  // Customised style for RESTFul API - \`POST /order\` <br>
  ReturnType ret2 = selfCall() {
    B.syncCallWithinSelfCall() {
      ParticipantName.rightToLeftCall()
      return B
    }
    "space in name"->"bg color".syncMethod(from, to)
  }
  // A comment for alt
  if (condition) {
    // A comment for creation
    ret = new CreatAndAssign()
    "ret:CreatAndAssign".method(create, and, assign)
    // A comment for async self
    B->B: Self Async
    // A comment for async message
    B->C: Async Message within fragment
    new Creation() {
      return from_creation
    }
    return "from if to original source"
    self {
      return C
    }
    C: async call from implied source
    B.alternative() {
      new AHasAVeryLongNameLongNameLongNameLongName() {
        new CreatWithinCreat()
        C.rightToLeftFromCreation() {
          B.FurtherRightToLeftFromCreation()
        }
      }
    }
    ====="divider can be anywhere"=====
  } else if ("another condition") {
    par {
      B.method
      C.method
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
