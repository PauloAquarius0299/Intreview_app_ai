import Image from "next/image";
import { getTechLogos } from "@/utils/utils";

type TechIconProps = {
  techStack: string[];
};
export const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const logos = getTechLogos(techStack);

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {logos.map(({ tech, url }) => (
        <Image
          key={tech}
          src={url}
          alt={tech}
          width={24}
          height={24}
          className="rounded-sm"
        />
      ))}
    </div>
  );
};