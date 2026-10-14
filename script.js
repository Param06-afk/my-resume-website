$(document).ready(function () {
    // jQuery animation for page sections
    $(".resume-section, .biodata-card, .about").hide().fadeIn(800);
    // Contact form validation
    $("#contactForm").submit(function (event) {
        event.preventDefault();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();
        if (name === "" || email === "" || message === "") {
            $("#formMessage")
                .text("Please fill in all the fields.")
                .css("color", "red");
            return;
        }
        // JavaScript email validation
        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $("#formMessage")
                .text("Please enter a valid email address.")
                .css("color", "red");
            return;
        }
        $("#formMessage")
            .text("Message sent successfully!")
            .css("color", "green");
        // Clear form
        $("#contactForm")[0].reset();
    });
    // Smooth navigation effect
    $("a").click(function () {
        $(this).css("opacity", "0.7");
        setTimeout(() => {
            $(this).css("opacity", "1");
        }, 300);
    });
});