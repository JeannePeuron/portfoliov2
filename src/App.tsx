import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="p-4 space-y-6">
      <Card
        picture="/exercice-1.png"
        name="Quiz - Les dessins animés de notre enfance"
        description="Réalisation d'un quiz sur un thème choisi en groupe. Travail de groupe : utilisation du Git et des branches etc... Sauvegarde du tableau des questions dans le localStorage, incrémentation du score dans l'URL. Mélange du tableau des questions avec l'algorithme de Fisher Yates. Utilisation de Math.random pour des questions aléatoires."
        technology1="HTML"
        technology2="JavaScript"
        linkGithub="https://github.com/JeannePeuron/projet-quiz-team-mejeda.git"
        linkAppli="Je n'ai plus le lien"
        date="Novembre 2025"
      />
    </div>
  );


export default App;
