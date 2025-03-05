import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

let helloWorldPopup;

WA.ui.openPopup("fridge", "Bitte nachfüllen", [{
    label: "Close",
    className: "primary",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
    }
}]):

// Open the popup when we enter a given zone
WA.room.onEnterLayer("floorLayer").subscribe(() => {
    helloWorldPopup = WA.ui.openPopup("fridge", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("fridge").subscribe(() => {
    helloWorldPopup.close();
})

const myLayerSubscriber = WA.room.onEnterLayer("floorLayer").subscribe(() => {
  WA.chat.sendChatMessage("Hello!", "Mr Robot");
});
