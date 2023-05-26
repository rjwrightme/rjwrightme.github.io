import Photoshop from "../svgs/Photoshop";

interface PillProps {
  tool: string;
}

const Pill: React.FC<PillProps> = ({ tool }) => {
  return (
    <div className="group relative">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-all rounded-lg dark:bg-slate-50 dark:text-slate-700 scale-0 group-hover:scale-100">
        <div className="flex gap-1 items-center p-2">
          <Photoshop size={50} />
          <span className="text-5xl font-bold ml-4">10</span>
          <div className="flex flex-col justify-center uppercase">
            <span className="text-xl font-bold leading-none">years </span>
            <span className="text-xs">experience</span>
          </div>
        </div>
        <div className="bg-orange-300 rounded-b-lg text-center">
          <span>
            Competency: <span className="font-bold">Pro</span>
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
