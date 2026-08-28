import Image from "next/image";

export const ProblemImage = () => {
  return (
    <div className="order-1 lg:order-2">
      <div className="relative aspect-4/5 overflow-hidden border border-border clip-diagonal-b">
        <Image
          src="/images/the-problem.webp"
          alt="Trabajadores con casco y chaleco reflectante junto a maquinaria pesada"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/25" />
      </div>
    </div>
  );
};
