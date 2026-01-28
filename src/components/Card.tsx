export interface CardProp {
  id: string;
  picture: string;
  name: string;
  description: string;
  technologies: string[];
  learnings: string[];
  links: {
    github: string;
    appli?: string;
    drawSQL?: string;
  };
  date: string;
}
export default function Card({
  picture,
  name,
  description,
  technologies,
  learnings,
  links,
  date,
}: CardProp) {
  return (
    <div className="mb-5 mt-5 w-full max-w-md rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img src={picture} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Contenu */}
      <div className="p-4 text-[#592D13]">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="mt-2 text-sm">{description}</p>

        {/* Technologies */}
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-200 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Learnings */}
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {learnings.map((learn, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[#592D13] text-[#FFF4E0] rounded"
            >
              {learn}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="mt-5 grid grid-cols-3 gap-4 text-sm mb-4">
          {Object.entries(links).map(([key, url]) =>
            url ? (
              <a
                key={key}
                href={url}
                className="bg-[#FFF4E0] text-[#592d13] hover:bg-black hover:text-white font-medium py-2 px-4 rounded-full cursor-pointer w-full inline-block text-center"
              >
                {key === "github"
                  ? "Github"
                  : key === "appli"
                    ? "Appli"
                    : "DrawSQL"}
              </a>
            ) : null,
          )}
        </div>

        <div className="mt-2 text-xs">{date}</div>
      </div>
    </div>
  );
}
