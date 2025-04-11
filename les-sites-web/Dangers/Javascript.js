document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button[type='submit']").addEventListener("click", function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        let score = 0;
        let bonnesReponses = {
            q1: "fraude",
            q2: "https",
            q3: "ignorer",
            q4: "fake-news",
            q5: "propagande",
            q6: "promotion",
            q7: "isolement",
            q8: "signaler",
            q9: "reseaux",
            q10: "harcelement",
            q11: "fraude",
            q12: "coordonnees",
            q13: "insu",
            q14: "outil",
            q15: "d'influence",
            q16: "produits",
            q17: "idees",
            q18: "comportements",
            q19: "programmes",
            q20: "sites"
        };

        // Vérification des réponses aux questions à choix multiples
        for (let i = 1; i <= 10; i++) {
            let selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && selected.value === bonnesReponses[`q${i}`]) {
                score++;
            }
        }

        // Vérification des réponses aux textes à trous
        for (let i = 11; i <= 20; i++) {
            let selected = document.querySelector(`select[name="q${i}"]`);
            if (selected && selected.value === bonnesReponses[`q${i}`]) {
                score++;
            }
        }

        alert("Votre score est : " + score + " / 20");
    });
});
