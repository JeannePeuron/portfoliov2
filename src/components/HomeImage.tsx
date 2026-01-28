export default function HomeImage() {
  return (
    <div className="relative h-[100vh]">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/HomeImage.png')" }}
      ></div>

      {/* Contenu au-dessus */}
      <div className="relative z-10 text-white p-10 text-center pt-75">
        <h1 className="text-5xl font-bold font-[preahvihear] ">
          Jeanne PEURON
        </h1>
        <br />

        <p className="p-4">
          Bienvenue sur mon portfolio ! Découvrez mon évolution <br /> au cours
          de ma formation de développeuse full-stack à AdataTechSchool.
        </p>
      </div>
    </div>
  );
}
