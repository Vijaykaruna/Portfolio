// Theme Mode Change
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("moon") ? "moon" : "sun";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-mode");
    themeBtn.classList[savedIcon === "moon" ? "add" : "remove"]("moon");
}
// Scroll button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// Download Resume
function Resume()
{
    window.open('https://drive.google.com/file/d/1ATS2MGVUBK6f-KAMFcmTSK02HOrSM-f6/view?usp=sharing');
}

const form = document.querySelector("form");
const send_btn = document.getElementById("send-btn");
const fullname = document.getElementById("from-name");
const email = document.getElementById("from-email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
  const bodyMessage = `Fullname: ${fullname.value}<br> Email: ${email.value}<br>
  Message: ${message.value}`;
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vijaykarunanithi2003@gmail.com",
    Password : "AFDAED6DED085DD1CCA39F677BE0B249E404",
    To : 'vijaykarunanithi2003@gmail.com',
    From : "vijaykarunanithi2003@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
   () => alert("Email sent successfully!"),
    (error) => alert("Failed to send email: " + error)
);
form.reset();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
})