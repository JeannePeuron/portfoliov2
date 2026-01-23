import Card from "./Card";
export default function ListCards() {
  return (
    <div className="grid grid-cols-3 p-4 gap-6">
      <Card
        picture="/petadopte.jpg"
        name="Adaopte - Adoption d'animaux"
        description="Application web responsive dédiée à la découverte et à l’adoption d’animaux.
Elle permet de rechercher et filtrer des animaux par type et localisation, avec un affichage dynamique sous forme de cartes.
Projet frontend réalisé en React et TypeScript, en mobile-first, à partir de données locales en JSON. "
        technology1="React (vite)"
        technology2="TypeScript"
        technology3="TailwindCSS (Responsive)"
        technology4="SQL"
        learning1="JSON"
        learning4="Filtres"
        learning2="Hooks"
        learning3="Props"
        learning5="React Router"
        linkGithub="https://github.com/JeannePeuron/petadopte"
        linkAppli="https://petadopte.vercel.app/"
        drawSQL="https://drawsql.app/teams/adatechschool-1/diagrams/petadopte"
        date="Janvier 2026"
      />
      <Card
        picture="/dataviz.jpg"
        name="Dataviz - Tournages réalisés à Paris"
        description="Application web de data visualisation exploitant une API open data sur les lieux de tournage à Paris.
Elle présente des graphiques interactifs permettant d’analyser l’évolution, les types de tournages et leur répartition géographique.
Projet réalisé en équipe avec React et TypeScript, axé sur la consommation d’API, la transformation de données et la visualisation."
        technology1="React (vite)"
        technology2="TypeScript"
        technology3="TailwindCSS (Responsive)"
        learning1="API Rest"
        learning2="Recharts"
        learning3="React Router"
        learning4="Filtres"
        linkGithub="https://github.com/freezer49/DATAVIZ-JC"
        linkAppli="https://dataviz-jc.vercel.app/"
        date="Decembre 2025"
      />
      <Card
        picture="/meteo.jpg"
        name="Station de météo"
        description="Application web affichant la météo actuelle d’une ville à partir de son nom, grâce à la consommation d’API OpenStreetMap et Open-Météo.
Projet axé sur la programmation asynchrone en JavaScript (async/await, fetch) et la gestion des erreurs côté utilisateur.
Réalisé pour pratiquer l’interaction client/serveur et la manipulation de données JSON."
        technology1="JavaScript"
        technology2="HTML"
        technology3="CSS"
        learning1="API"
        learning2="fetch async/await"
        learning5="Promesses"
        learning3="DOM"
        learning4="Conditions"
        linkGithub="https://github.com/JeannePeuron/kata-mini-station-meteo"
        date="Decembre 2025"
      />
      <Card
        picture="/quotations-app.jpg"
        name="Biblihotèque de citations"
        description="Application web simple permettant de centraliser et afficher des citations ou répliques favorites.
L’utilisateur peut ajouter une citation avec son auteur ou autrice et visualiser la liste mise à jour en temps réel.
Projet réalisé en JavaScript pour pratiquer la manipulation du DOM et la gestion d’événements. "
        technology1="JavaScript"
        technology2="HTML"
        technology3="CSS"
        learning1="DOM"
        linkGithub="https://github.com/JeannePeuron/quotations-app"
        linkAppli="https://jeannepeuron.github.io/quotations-app/"
        date="Novembre 2025"
      />
      <Card
        picture="/palindromes.png"
        name="Outil de vérification des dates palindromes"
        description="Petit projet JavaScript permettant de détecter les dates palindromes et de générer les prochaines occurrences à partir d’aujourd’hui.
Le projet met en pratique la manipulation de chaînes, la validation de dates et la logique algorithmique en JS.
Réalisé en JavaScript vanilla, idéal pour consolider les bases et l’algorithmique côté front-end."
        technology1="JavaScript"
        technology2="HTML"
        learning1="Conditions"
        learning2="Boucles"
        linkGithub="https://github.com/JeannePeuron/lesPalindromes"
        date="Novembre 2025"
      />
      <Card
        picture="/exercice-1.png"
        name="Quiz - Les dessins animés de notre enfance"
        description="Quiz interactif en front-end permettant de tester ses connaissances sur les dessins animés des années 80 à aujourd’hui.
Le joueur répond à des questions à choix multiples, avec gestion du score, de la progression et d’un mode chronométré.
Projet réalisé en groupe dans un cadre pédagogique pour pratiquer la manipulation du DOM et la logique JavaScript."
        technology1="HTML"
        technology2="JavaScript"
        learning1="Git"
        learning2="DOM"
        learning3="LocalStorage"
        learning4="URL"
        learning5="Fisher Yates"
        linkGithub="https://github.com/JeannePeuron/projet-quiz-team-mejeda.git"
        linkAppli="https://piouoiq.github.io/projet-quiz-team-mejeda/"
        date="Novembre 2025"
      />
      <Card
        picture="/exercice0.png"
        name="Traducteur de morse"
        description="Traducteur web individuel capable de convertir du texte en code Morse et inversement.
Projet axé sur la manipulation de structures de données, la gestion des entrées utilisateur et le développement d’un algorithme de conversion.
Réalisé en HTML, CSS et JavaScript, avec versionnage via Git/GitHub, dans le cadre de ma formation Fullstack."
        technology1="JavaScript"
        technology2="HTML"
        technology3="CSS"
        learning1="DOM"
        learning2="Teableaux et objets"
        learning3="Fonctions"
        linkGithub="https://github.com/JeannePeuron/traducteur_morse"
        date="Novembre 2015"
      />

      <Card
        picture="/exercice2.png"
        name="Guess a number"
        description="Petit jeu JavaScript où l’utilisateur doit deviner un nombre choisi, avec indications si le nombre est trop grand ou trop petit.
Le projet met en pratique la logique, les fonctions, la gestion des entrées utilisateur et les boucles.
Réalisé en JavaScript vanilla, avec HTML/CSS optionnel pour l’interface."
        technology1="JavaScript"
        learning1="Prompt"
        learning2="Conditions"
        linkGithub="https://github.com/JeannePeuron/GuessANumber"
        date="Octobre 2015"
      />
      <Card
        picture="/exercice3.png"
        name="SHI-FU-MI"
        description="Dans le cadre de la formation découverte chez AdaTechSchool : Mini-jeu Pierre-Feuille-Ciseaux réalisé en groupe pour s’initier à JavaScript.
Le joueur affronte l’ordinateur avec résultat affiché dynamiquement grâce à la manipulation du DOM.
Projet axé sur les bases du JavaScript, les conditions, boucles, fonctions et le travail collaboratif."
        technology1="JavaScript"
        learning1="Variables"
        learning2="Fonctions"
        learning3="Boucles"
        learning4="Conditions"
        linkGithub="https://github.com/JeannePeuron/Shifumi"
        date="Juillet 2015"
      />
      <Card
        picture="/exercice4.png"
        name="Curriculum Vitae"
        description="Version codée de mon CV personnel réalisée en HTML et CSS, dans le cadre d’un stage aux côtés d’un développeur web.
Ce projet m’a permis de découvrir les bases du développement web, la structuration d’une page et la logique du code.
Première expérience concrète en front-end, posant les fondations de mon apprentissage en développement web."
        technology1="HTML"
        technology2="CSS"
        learning1="Premiers pas vers le HTML et le CSS"
        linkGithub="https://github.com/JeannePeuron/CV"
        date="mai 2025"
      />
    </div>
  );
}
