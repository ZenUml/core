// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
Processor.start() {
  try{
    while(true) {
      records = KafkaConsumer.poll(Long.MAX_VALUE);
      foreach(record) {
        RecordHandler.handle(record)
      }
    }
  } catch(WakeException) {
    ErrorService.onError()
  } catch(Exception) {
    GeneralError.onError()
  } finally {
    KafkaConsumer.close();
  }
}

`
