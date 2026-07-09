import { socials } from "./socials";

// Right-side counterweight to the left-aligned PillNav. Mirrors the footer's
// social pills exactly (shared `socials` source). Shown only at xl+ where there
// is room; below that the footer carries the socials and the PillNav hamburger
// (mobile) owns navigation.
export default function NavSocials() {
  return (
    <div className="hidden xl:flex absolute top-4 right-6 z-99 h-[42px] items-center gap-3 font-mono">
      {socials.map(({ label, href, Icon }) => {
        const external = !href.startsWith("mailto:");
        return (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-full border border-white/20 py-2 px-4 text-xs text-white hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            <Icon size={16} />
            {label}
          </a>
        );
      })}
    </div>
  );
}
