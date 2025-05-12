
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/13d60eef-26ba-4097-9445-5ec6b6a03e6c.png"
        alt="Central do Alérgico - Saúde e Conforto"
        className={cn(
          "h-14 md:h-16 transition-all duration-300", // Increased from h-10 md:h-12 to h-14 md:h-16
          scrolled ? "opacity-100" : "opacity-100"
        )}
      />
    </a>
  );
};

export default Logo;
