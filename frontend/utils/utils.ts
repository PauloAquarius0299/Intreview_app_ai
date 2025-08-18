import { dummyInterviews } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const getTechIconUrl = async (tech: string) => {
  const normalized = normalizeTechName(tech);
  const iconUrl = `${techIconBaseUrl}/${normalized}/${normalized}-original.svg`;

  // Se o ícone não existir, retorna um fallback
  const exists = await checkIconExists(iconUrl);
  return exists ? iconUrl : "/icons/default-tech.svg";
};

const checkIconExists = async (url: string) => {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch (error) {
    console.error(`Erro ao verificar ícone: ${url}`, error);
    return false;
  }
};

export const normalizeTechName = (tech: string) =>
  tech.toLowerCase().replace(/\s|\+/g, "");

export const getInterviewCoverById = (id: string) => {
  const index = parseInt(id, 10) % dummyInterviews.length;
  return dummyInterviews[index];
};

export function getInterviewCoverByIndex(index: number) {
  return dummyInterviews[index % dummyInterviews.length];
}

export const getTechLogos = (mappings: string[]) => {
  return mappings.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseUrl}/${normalized}/${normalized}-original.svg`,
    };
  });
};
