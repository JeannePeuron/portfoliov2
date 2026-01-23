export interface CardProp {
  picture: string;

  name: string;
  description: string;

  technology1: string;
  technology2?: string;
  technology3?: string;
  technology4?: string;
  learning1: string;
  learning2?: string;
  learning3?: string;
  learning4?: string;
  learning5?: string;

  linkGithub: string;
  linkAppli?: string;
  drawSQL?: string;
  date: string;
}

export default function Card(props: CardProp) {
  return (
    <div className="mb-5 mt-5 w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-white   transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={props.picture}
          alt={props.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="p-4">
        <h1 className="text-lg font-bold">{props.name}</h1>

        <p className="mt-2 text-sm text-gray-700">{props.description}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {props.technology1 && (
            <span className="px-2 py-1 bg-gray-200 rounded">
              {props.technology1}
            </span>
          )}
          {props.technology2 && (
            <span className="px-2 py-1 bg-gray-200 rounded">
              {props.technology2}
            </span>
          )}
          {props.technology3 && (
            <span className="px-2 py-1 bg-gray-200 rounded">
              {props.technology3}
            </span>
          )}
          {props.technology4 && (
            <span className="px-2 py-1 bg-gray-200 rounded">
              {props.technology4}
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {props.learning1 && (
            <span className="px-2 py-1 bg-blue-200 rounded">
              {props.learning1}
            </span>
          )}
          {props.learning2 && (
            <span className="px-2 py-1 bg-blue-200 rounded">
              {props.learning2}
            </span>
          )}
          {props.learning3 && (
            <span className="px-2 py-1 bg-blue-200 rounded">
              {props.learning3}
            </span>
          )}
          {props.learning4 && (
            <span className="px-2 py-1 bg-blue-200 rounded">
              {props.learning4}
            </span>
          )}
          {props.learning5 && (
            <span className="px-2 py-1 bg-blue-200 rounded">
              {props.learning5}
            </span>
          )}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4 text-sm mb-4 ">
          <a
            href={props.linkGithub}
            className=" bg-[#FFF4E0] text-[#592d13] hover:bg-black hover:text-white font-medium py-2 px-4 rounded-full cursor-pointer w-full inline-block text-center"
          >
            Github
          </a>

          {props.linkAppli && (
            <a
              href={props.linkAppli}
              className="bg-[#FFF4E0] text-[#592d13] hover:bg-black hover:text-white font-medium py-2 px-4 rounded-full cursor-pointer w-full inline-block text-center"
            >
              Appli
            </a>
          )}
          {props.drawSQL && (
            <a
              href={props.drawSQL}
              className="bg-[#FFF4E0] text-[#592d13] hover:bg-black hover:text-white font-medium py-2 px-4 rounded-full cursor-pointer w-full inline-block text-center"
            >
              DrawSQL
            </a>
          )}
        </div>

        <div className="mt-2 text-xs text-gray-500">{props.date}</div>
      </div>
    </div>
  );
}
