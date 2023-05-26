import Circles from "./Circles";
import Pill from "./Pill";
import Prompt from "./Prompt";

const Info = () => {
  return (
    <div className="w-full max-w-screen-md border-2 border-solid dark:border-slate-300 rounded-3xl mx-auto mt-20">
      <div className="flex justify-center items-center relative py-2 border-b-2 dark:border-slate-300">
        <div className="absolute left-0">
          <Circles />
        </div>
        <h3>rj.info</h3>
      </div>
      <div className="px-6">
        <Prompt heading="technologies" />
        <div className="flex flex-wrap gap-2 mt-2">
          <Pill tool="JavaScript" />
          <Pill tool="TypeScript" />
          <Pill tool="React" />
          <Pill tool="Next.js" />
          <Pill tool="Tailwind CSS" />
          <Pill tool="Node.js" />
          <Pill tool="MongoDB" />
          <Pill tool="MySQL" />
        </div>
        <Prompt heading="designStack" />
        <div className="flex flex-wrap gap-2 mt-2">
          <Pill tool="Photoshop" />
          <Pill tool="Illustrator" />
          <Pill tool="Figma" />
        </div>
        <Prompt heading="hobbies" />
        <p className="opacity-50">
          graphic design, photography, videography, hiking, swimming, reading
        </p>
        <Prompt className="mb-10" />
      </div>
    </div>
  );
};

export default Info;
