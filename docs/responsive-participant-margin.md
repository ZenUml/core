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

There is a problem of this strategy. If we pre-declare the order of the participants,
 for example, `B A A.method()`, we have to render B on the left of A.

So maybe, we could implement it in two rounds. First, we define the order of participants.
Then we calculate the position of the lifelines based on the order.

Note that `mounted` is only called when we "mount" the element,
not when we "move" or "relayout" the element.

When we change the code, it may NOT trigger mounted. It may not even
trigger the update of Occurrence.

We cannot just clear the stored positions, because we will have no other chance
to refresh the positions again. So another option is to refresh the positions
when we after mounted and/or updated MessageLayer.

