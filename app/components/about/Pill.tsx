import { ElementType } from "react";

interface PillProps {
  tool: string;
  experience: number;
  competency: string;
  icon: ElementType;
}

const Pill: React.FC<PillProps> = ({
  tool,
  experience,
  competency,
  icon: TooltipIcon,
}) => {
  return (
    <div className="group relative">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-all rounded-lg dark:bg-slate-50 dark:text-slate-700 scale-0 group-hover:scale-100">
        <div className="flex gap-1 items-center p-2">
          <TooltipIcon size={50} />
          <span className="text-5xl font-bold ml-4">{experience}</span>
          <div className="flex flex-col justify-center uppercase">
            <span className="text-xl font-bold leading-none">
              year{experience > 1 && "s"}
            </span>
            <span className="text-xs">experience</span>
          </div>
        </div>
        <div className="bg-orange-300 rounded-b-lg text-center uppercase text-xs px-2">
          <span>
            Competency: <span className="font-bold">{competency}</span>
          </span>
        </div>
      </div>
      <button className="border border-slate-300 rounded-full px-3 py-1 cursor-default hover:bg-slate-300 hover:text-slate-900">
        <span>{tool.toUpperCase()}</span>
      </button>
    </div>
  );
};

export default Pill;
