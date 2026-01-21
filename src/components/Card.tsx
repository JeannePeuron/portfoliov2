export interface CardProp {
  picture: string;

  name: string;

  description: string;
  technology1: string;
  technology2?: string;
  technology3?: string;
  technology4?: string;
  linkGithub: string;
  linkAppli?: string;
  date: string;
}

export default function Card(props: CardProp) {
  return (
    <div className=" relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
      {/* Image de fond dynamique */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${props.picture})` }}
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Contenu */}
      <div className="relative z-10 p-4 text-white h-full flex flex-col justify-end">
        <h1 className="text-xl font-bold">{props.name}</h1>
        <p className="mt-2 text-sm">{props.description}</p>

        <div className="mt-2 space-x-2 text-xs">
          {props.technology1 && <span>{props.technology1}</span>}
          {props.technology2 && <span>{props.technology2}</span>}
          {props.technology3 && <span>{props.technology3}</span>}
          {props.technology4 && <span>{props.technology4}</span>}
        </div>

        <div className="mt-2 space-x-4">
          <a href={props.linkGithub} className="underline text-sm">
            Github
          </a>
          {props.linkAppli && (
            <a href={props.linkAppli} className="underline text-sm">
              Appli
            </a>
          )}
        </div>

        <div className="mt-2 text-xs">{props.date}</div>
      </div>
    </div>
  );
}
