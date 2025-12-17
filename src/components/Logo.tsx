import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-7 h-7", text: "text-sm", subtext: "text-[8px]", inner: "w-3 h-3" },
    md: { icon: "w-8 h-8", text: "text-base", subtext: "text-[9px]", inner: "w-3.5 h-3.5" },
    lg: { icon: "w-10 h-10", text: "text-lg", subtext: "text-[10px]", inner: "w-4 h-4" },
  };

  const s = sizes[size];

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className={`${s.icon} rounded-lg border border-primary/40 bg-primary/10 flex items-center justify-center relative overflow-hidden`}>
        {/* Inner geometric shape */}
        <div className={`${s.inner} rounded-sm bg-primary rotate-45 group-hover:rotate-[135deg] transition-transform duration-500`} />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-primary/60" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-primary/60" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${s.text} tracking-wide`}>ZAPERRA</span>
          <span className={`${s.subtext} font-mono text-primary tracking-widest`}>WORKFLOWS</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;