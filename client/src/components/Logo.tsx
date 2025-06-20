interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
        N
      </div>
      <span className="ml-3 text-xl font-bold text-gradient">NeQTeK</span>
    </div>
  );
}
