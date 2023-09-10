To dive a bit deeper into how Pub-Sub works, let's consider a basic structure to manage events:

- We can use a simple POJO (Plain Old JavaScript Object) for our state, which I'll refer to as `subscribers`.

Now, let's break down the three core operations of Pub-Sub: Subscribe, Publish, and Unsubscribe.

Subscribe:

- When a user subscribes to an event, we check if an entry for that event exists in the `subscribers` state.
- If not, we create a new channel, which is essentially an empty array to store the event callbacks associated with that event.

Publish:

- When it's time to publish an event, we first verify if the event name exists in the `subscribers`.
- If it doesn't, we do nothing.
- If it does, we iterate through the event callbacks stored in the corresponding channel and execute them, optionally passing data as needed.

Unsubscribe:

- To unsubscribe from an event, we accept two arguments: the `eventName` and the `callback` function.
- If a channel for the given `eventName` exists, we filter the channel's array to remove events that are equal to the provided `callback` function.

In summary, the Pub-Sub Pattern is an elegant way to handle events, allowing users to subscribe, publish, and unsubscribe from events efficiently. It's built around a straightforward structure using a `subscribers` object to manage event channels and their associated callbacks.
