// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `Browser->BookController.onPost() {
  BookLibService.Borrow(id) { 
      receipt = process(id)
      if (receipt != null) {
        return receipt
        @return BookController->Browser: receipt  
      } else {
        return null
        @return BookController->Browser: 404  
      }
  }
}`
