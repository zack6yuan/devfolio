import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Accent = "teal" | "orange" | "green" | "brown";

type ProjectCardProps = {
  emoji: string;
  image?: string;
  title: string;
  description: string;
  tags: string[];
  rating?: number;
  href: string;
  accent?: Accent;
};

const accentStyles: Record<Accent, {
  border: string;
  gradient: string;
  tag: string;
  ctaBorder: string;
}> = {
  teal: {
    border: "border-teal-400",
    gradient: "from-teal-300 to-cyan-500",
    tag: "bg-teal-500",
    ctaBorder: "border-teal-400",
  },
  orange: {
    border: "border-orange-400",
    gradient: "from-orange-300 to-amber-500",
    tag: "bg-orange-500",
    ctaBorder: "border-orange-400",
  },
  green: {
    border: "border-green-400",
    gradient: "from-green-300 to-emerald-500",
    tag: "bg-green-500",
    ctaBorder: "border-green-400",
  },
  brown: {
    border: "border-[#A87551]",
    gradient: "from-[#C99873] to-[#8B5E3C]",
    tag: "bg-[#8B5E3C]",
    ctaBorder: "border-[#A87551]",
  },
};

export default function ProjectCard({
  emoji,
  image,
  title,
  description,
  tags,
  rating,
  href,
  accent = "teal",
}: ProjectCardProps) {
  const styles = accentStyles[accent];

  return (
    <div className={`w-full max-w-md rounded-2xl border-3 ${styles.border} bg-white overflow-hidden shadow-lg`}>
      <div className={`relative h-32 sm:h-40 bg-linear-to-b ${styles.gradient} flex items-center justify-center overflow-hidden`}>
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <p className="text-5xl sm:text-6xl">{emoji}</p>
        )}

        {rating !== undefined && (
          <div className="absolute top-4 right-4 bg-white rounded-2xl px-3 py-1 flex items-center gap-1 shadow-md">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            <span className="text-sm font-bold text-gray-800">{rating}</span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-4">
        <h3 className="text-2xl font-extrabold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${styles.tag} text-white text-xs font-bold rounded-lg py-1 px-4`}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 flex items-center justify-center gap-2  ${styles.tag} ${styles.ctaBorder} text-white font-bold rounded-2xl py-2.5 hover:opacity-90 transition-opacity`}
        >
          <ArrowUpRight className="w-4 h-4" />
          Explore Island
        </a>
      </div>
    </div>
  );
}