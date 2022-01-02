(function() {
    // Wait for DOM content to load so we can get references to the contact form
    document.addEventListener("DOMContentLoaded", function () {
        // diasable submit button until user has entered information
        var isSubmitDisabled = true;

        // get a reference to contact form, use that to get all form controls
        var form = document.getElementById("contact-us-form");
        var inputs = form.querySelectorAll(".form-control")
        for(var i = 0; i < inputs.length; i++){

            // add event listener for each form control. Listen for after the keypress is finished
            inputs[i].addEventListener('keyup', function() {
                // enable submit
                if(isSubmitDisabled){
                    document.getElementById("submit-contact-form").style = "";
                    isSubmitDisabled = false;
                }

                // gather form data
                var form = document.getElementById("contact-us-form");
                var name = form.querySelector("#contact-us-form #name").value;
                var email = form.querySelector("#contact-us-form #email").value;
                var subject = form.querySelector("#contact-us-form #subject").value;
                var message = form.querySelector("#contact-us-form #contact-message").value;
                var body = encodeURIComponent("Message received from " + name + " (email: " + email + ") with the subject " + subject + "\n\nMessage:\n" + message);

                // update href on submit button with the update email format
                document.getElementById("submit-contact-form").href = "mailto:LiveLoveLind@gmail.com?subject=LiveLoveLind%20Contact%20Form%20Submission&body=" + body;
            }, false)
        }
    });
})()
