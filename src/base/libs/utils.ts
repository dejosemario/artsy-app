import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toggleContent(e: any) {
  e.currentTarget.lastElementChild.classList.toggle("rotate-180");
  e.currentTarget.nextElementSibling.classList.toggle("h-0");
}
