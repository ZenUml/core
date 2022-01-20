This is to adjust the margin of the lifelines based on the message length.
For example, if the message is long, the margin of the lifelines will be increased.

A.method() {
  B.aLongMethodName_and_we_want_to_adjust_the_margin_of_the_lifelines_based_on_the_message_length();
}

# Strategy A

Step 1. We need to know the width of the method box is shorter than the
width of the message label. We only need to compare the scrollWidth and the width.

# Strategy B

Instead of rendering message layer based on lifeline's position, we render
the lifelines based on message occurrence's positions.

