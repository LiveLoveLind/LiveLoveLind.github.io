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
                var role = form.querySelector("#contact-us-form #role").value;
                var phone = form.querySelector("#contact-us-form #phone").value;
                var texting = form.querySelector("#contact-us-form #texting").value;
                var partner_name = form.querySelector("#contact-us-form #partner-name").value;
                var partner_email = form.querySelector("#contact-us-form #partner-email").value;
                var partner_role = form.querySelector("#contact-us-form #partner-role").value;
                var partner_phone = form.querySelector("#contact-us-form #partner-phone").value;
                var partner_texting = form.querySelector("#contact-us-form #partner-texting").value;
                var event_date = form.querySelector("#contact-us-form #event-date").value;
                var flexible = form.querySelector("#contact-us-form #flexible").value;
                var city = form.querySelector("#contact-us-form #city").value;
                var venue = form.querySelector("#contact-us-form #venue").value;
                var service = form.querySelector("#contact-us-form #service").value;
                var subject = form.querySelector("#contact-us-form #subject").value;
                var message = form.querySelector("#contact-us-form #contact-message").value;
                var body = encodeURIComponent("Message received from " + name + " (email: " + email + ") with the subject " + subject +"\n\nWedding Details:\n" + "\n\nAre you the Bride or Groom?:\n" + role + "\n\nYour Phone Number:\n" + phone + "\n\nCan I text this number?\n" + texting + "\n\nWho's the lucky someone?\n" + partner_name + "\n\nPartner's Email:\n" + partner_email + "\n\nBride or Groom?\n" + partner_role + "\n\nPartner's Phone Number:\n" + partner_phone + "\n\nCan I text this Number?\n" + partner_texting + "\n\n\nThe Big Day Details:\n" + "\nEvent Date:\n" + event_date + "\n\nIs the start time flexible?\n" + flexible + "\n\nEvent City:\n" + city + "\n\nVenue:\n" + venue + "\n\nService of Interest:\n" + service + "\n\nMessage:\n" + message);

                // update href on submit button with the update email format
                document.getElementById("submit-contact-form").href = "mailto:LiveLoveLind.Weddings@gmail.com?subject=LiveLoveLind%20Contact%20Form%20Submission&body=" + body;
            }, false)
        }
    });
})()
