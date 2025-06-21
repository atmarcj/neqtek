import logoImage from "@assets/Logo (3)_1750457619206.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="NeQTeK Logo" 
        className="w-10 h-10 object-contain"
      />
      <span className="ml-3 text-xl font-bold text-gradient">NeQTeK</span>
    </div>
  );
}
