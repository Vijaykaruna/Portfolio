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
    window.open('https://drive.google.com/file/d/14ERlGiuPpyODzAgXkq0JaC5pozCB5zR0/view?usp=sharing');
}
//Send Message
let send_btn = document.getElementById("send-btn");
let fullname = document.getElementById("from-name");
let email = document.getElementById("from-email");
let message = document.getElementById("message");
let subject = document.getElementById("subject");

send_btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    let body_message = `Hi this, ${fullname.value} <br> My Email is ${email.value} <br> ${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vijaykarunanithi2003@gmail.com",
        Password : "D7EB20F23B824059DBABE194841962300351",
        To : 'vijaykarunanithi2003@gmail.com',
        From : "vijaykarunanithi2003@gmail.com",
        Subject : subject.value,
        Body : body_message
    }).then(
      message => alert(message)
    );
});
