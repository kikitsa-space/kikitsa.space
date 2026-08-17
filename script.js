document.addEventListener("DOMContentLoaded", () => {

    const languageButton = document.getElementById("language-switch");

    // Check if the visitor has already selected a language
    let currentLanguage = localStorage.getItem("kikitsa-language") || "el";

    function changeLanguage(language) {

        currentLanguage = language;

        // Change HTML language
        document.documentElement.lang = language;

        // Change all text elements
        document.querySelectorAll("[data-el][data-en]").forEach(element => {

            element.textContent =
                language === "en"
                    ? element.getAttribute("data-en")
                    : element.getAttribute("data-el");

        });


        // Change image ALT text
        document.querySelectorAll("[data-alt-el][data-alt-en]").forEach(image => {

            image.alt =
                language === "en"
                    ? image.getAttribute("data-alt-en")
                    : image.getAttribute("data-alt-el");

        });


        // Change page title
        document.title =
            language === "en"
                ? "kikitsa | Creative Space"
                : "κικίτσα | Creative Space";


        // Change meta description
        const metaDescription =
            document.getElementById("meta-description");

        if (metaDescription) {

            metaDescription.setAttribute(
                "content",
                language === "en"
                    ? "Kikitsa is a contemporary art space for exhibitions, workshops, photo shoots, podcasts and cultural events in Athens."
                    : "Η κικίτσα είναι ένας σύγχρονος χώρος τέχνης για εκθέσεις, εργαστήρια, φωτογραφίσεις, podcast και πολιτιστικές εκδηλώσεις στην Αθήνα."
            );

        }


        // Change language button
        languageButton.textContent =
            language === "el"
                ? "EN"
                : "GR";


        // Save language preference
        localStorage.setItem("kikitsa-language", language);

    }


    // Language switch
    languageButton.addEventListener("click", () => {

        const newLanguage =
            currentLanguage === "el"
                ? "en"
                : "el";

        changeLanguage(newLanguage);

    });


    // Load saved/default language
    changeLanguage(currentLanguage);

});