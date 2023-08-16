

document.getElementById('emailForm').addEventListener('submit', 
function (event) {
    event.preventDefault();

    const form = event.target;
    
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    emailjs.init('U97N1dgMJIOohQV58');

    const params = {
        from_email: email,
        from_name: name,
        subject: subject,
        message: message,
    }

    if (!subject) {
        const result = confirm('Subject is empty! Are you sure you want to send the message?');

        if (result) {
            sentEmail();
        } else {

        }
    } else {
        sendEmail();
    }

    function sendEmail() {
        let cursor = emailjs.send("service_vebi09g","template_bavvbxh",params);

        cursor.then(
        function (response) {
            alert('Email sent successfully!');
            form.reset();
        },
        function (error) {
            alert('FAILED...', error);
        });
    }
});