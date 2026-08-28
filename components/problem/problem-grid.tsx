"use client";

import { Eye, EyeOff, Timer, TriangleAlert } from "lucide-react";
import { ProblemCard } from "./problem-card";

export interface ProblemCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}
const problems: ProblemCardProps[] = [
  {
    icon: EyeOff,
    title: "Puntos ciegos",
    text: "En vehículos de gran porte, los espejos y la observación humana no alcanzan a cubrir todo el entorno de la máquina.",
  },
  {
    icon: Eye,
    title: "Visibilidad limitada",
    text: "Durante maniobras críticas, una persona cercana puede pasar completamente desapercibida para el operador.",
  },
  {
    icon: Timer,
    title: "Tiempo de reacción",
    text: "El margen para reaccionar es mínimo. Cada segundo cuenta cuando hay una persona en la zona de trabajo.",
  },
  {
    icon: TriangleAlert,
    title: "Riesgo permanente",
    text: "Detectar a tiempo a alguien en el área de operación no siempre es simple, y el error no tiene margen.",
  },
];

export const ProblemGrid = () => {
  return (
    <div className="mt-10 grid gap-3 overflow-hidden border border-border  sm:grid-cols-2">
      {problems.map((p, i) => (
        <ProblemCard key={i} problem={p} />
      ))}
    </div>
  );
};
