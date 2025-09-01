"use client";

import { Interview } from "@/types";
import { getInterviewCoverByIndex } from "@/utils/utils";
import dayjs from "dayjs";
import Image from "next/image";
import { CalendarRange, StarOff } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


interface Feedback {
  text: string;
  level: number;
  createdAt: string;
  finalAssessment?: string;
}

type InterviewCardProps = Interview & { index?: number };

const InterviewCard = ({
  id,
  role,
  type,
  techstack,
  icon,
  createAt,
  image,
  index
}: InterviewCardProps) => {
  const feedBack = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(createAt || Date.now()).format("MMM D, YYYY");
  const cover = getInterviewCoverByIndex(index ?? 0);

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96 text-white relative">
      <div className="card-interview p-4 flex flex-col gap-4">
        
        {/* Tipo da entrevista */}
        <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-purple-500">
          <p className="badge-text">{normalizedType}</p>
        </div>

        {/* Imagem do usuário */}
        <Image
          src={image}
          alt="cover"
          width={90}
          height={90}
          className="rounded-full object-cover size-[90px]"
        />

        {/* Título com ícone cultural */}
        <h3 className="text-lg capitalize font-bold flex items-center gap-2">
          {role} Entrevista 
        </h3>

        {/* Data */}
        <div className="flex flex-row gap-2 items-center">
          <CalendarRange size={18} />
          <p>{formattedDate}</p>
        </div>

        {/* Feedback */}
        <div className="flex flex-row gap-2 items-center">
          <StarOff size={18} />
          <p>{feedBack?.level ?? "---"}/100</p>
        </div>

        {/* Final Assessment */}
        <p className="line-clamp-2 mt-5">
          {feedBack?.finalAssessment || "Você não tem entrevista ainda."}
        </p>

        <p className="text-2xl">{icon}</p>

        {/* Botão e techstack */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {techstack?.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-200 text-black rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <Button className="btn-primary cursor-pointer">
            <Link
              href={
                feedBack
                  ? `/interview/${id}/feedback`
                  : `/interview/${id}`
              }
            >
              {feedBack ? "Check o seu feedback" : "Conversar"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
