document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference in local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        
        // Save the theme preference
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Search functionality
    document.getElementById("search-bar").addEventListener("input", function () {
        let searchValue = this.value.toLowerCase();
        let articles = document.querySelectorAll("article");

        articles.forEach(article => {
            let text = article.textContent.toLowerCase();
            if (text.includes(searchValue)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });

    // Subscription functionality
    document.getElementById("subscribe").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            alert("Thank you for subscribing!");
            this.value = "";
        }
    });
});
