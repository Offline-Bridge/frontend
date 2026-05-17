import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shallowNavigate(url: string) {
  if (typeof window === "undefined") return;
  window.history.pushState({}, "", url);
}
