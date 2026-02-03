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
    <div className="mb-5 mt-5 w-full max-w-md h-[520px] rounded-lg overflow-hidden bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl flex flex-col">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img src={picture} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-4 text-[#592D13]">
        <div className="text-xs">{date}</div>

        <h1 className="text-lg font-bold">{name}</h1>

        {/* Description limitée */}
        <p className="mt-2 text-sm ">{description}</p>

        {/* Technologies */}
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-[#592D13] px-2 py-1 text-[#FDF8F2]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Learnings */}
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {learnings.map((learn) => (
            <span
              key={learn}
              className="rounded bg-[#FDF8F2] px-2 py-1 text-[#592D13]"
            >
              {learn}
            </span>
          ))}
        </div>

        {/* Liens toujours en bas */}
        <div className="mt-auto flex flex-col gap-2 pt-4 text-xs">
          {Object.entries(links).map(([key, url]) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full cursor-pointer rounded bg-[#D9A78C] px-4 py-1 text-center font-medium text-[#FDF8F2] hover:bg-[#592D13]"
              >
                {key === "github"
                  ? "Github"
                  : key === "appli"
                    ? "Voir l’application"
                    : "DrawSQL"}
              </a>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
