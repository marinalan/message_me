import consumer from "./consumer"

var scroll_bottom = function() {
  if ($('#messages').length >0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
};

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $("#message-container").append(data["message"]);
    scroll_bottom();
  }
});
