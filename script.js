(function () {
    emailjs.init({
        publicKey: "GTIwHs6WntgcGAxyF"
    });
})();

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.innerText = "Sending...";
    formStatus.innerText = "";
    formStatus.style.color = "#333";

    try {
        await emailjs.sendForm(
            "service_sa1fh49",
            "template_ua8takg",
            contactForm
        );

        formStatus.innerText = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();

        setTimeout(() => {
            formStatus.innerText = "";
        }, 3000);
    } catch (error) {
        console.error("EmailJS Error:", error);
        formStatus.innerText = "Failed to send message. Please try again.";
        formStatus.style.color = "red";
    } finally {
        sendBtn.disabled = false;
        sendBtn.innerText = "Send Message";
    }
});
