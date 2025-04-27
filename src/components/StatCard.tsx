
import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({ number, label, icon, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center",
      className
    )}>
      <div className="mb-3 text-rewear-green">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-rewear-green">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
