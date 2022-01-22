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

It looks promising now. The current challenge is to render lifelines
according to the positions of participants. A particularly interesting part
is participant group. We may need to render it on a different layer.

Strategy B relies on the browser's behavior on 'width: auto'. So we need
to know when we should set it as auto. Pre-assign positions is in conflict
of this approach, unless we could tell whether it is pre-assigned or not.

What if we always set interaction width to auto first and then update according
to calculated positions?
