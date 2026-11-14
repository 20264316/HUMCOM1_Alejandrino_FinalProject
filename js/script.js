const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("fullname").value;
    document.getElementById("thanks").textContent = "Thank you, " + name + "! This form is a demo, so your message was not sent yet.";
    form.reset();
  });
}
