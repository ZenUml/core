// Basic functionality:
// Comments
// Starter
// Call a method
// Self-method
// Nested method
// Assignment
export default `
title ABCD Title
// Generating Sequence Diagrams from Java code is experimental.
// Please report errors to https://github.com/ZenUml/jetbrains-zenuml/discussions
MarkdownJavaFxHtmlPanel #FF00FF
"resultStringBuilder:StringBuilder" #FF00
MarkdownJavaFxHtmlPanel.readFromInputStream(inputStream) {
  StringBuilder resultStringBuilder = new StringBuilder();
  try {
    // String line;
    while((line = br.readLine()) != null) {
      "resultStringBuilder:StringBuilder".append(line).append("\\n");
    }
  }
  catch(IOException) {
    return "";
  }
  return "resultStringBuilder.toString()";
}
`
