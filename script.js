// Display event details

function showMessage(eventName) {

    alert(
        "You selected: " + eventName +
        "\n\nRegistration is open for this event!"
    );
}


// Registration Form

document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        let selectedEvent =
            document.getElementById("event").value;

        let message =
            document.getElementById("formMessage");

        message.innerHTML =
            "✅ Thank you, " +
            name +
            "! Your registration for " +
            selectedEvent +
            " has been submitted successfully.";

        // Clear form

        document
            .getElementById("registrationForm")
            .reset();

    });