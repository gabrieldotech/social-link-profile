document.addEventListener("DOMContentLoaded", function() {
    let socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            let url = this.querySelector("a").href;
            window.location.href = url;
        });
        link.addEventListener("mouseenter", function() {
            this.style.cursor = "pointer";
        });
    });
});
