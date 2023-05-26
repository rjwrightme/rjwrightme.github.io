import Circles from "./Circles";
import Pill from "./Pill";
import Prompt from "./Prompt";

//SVG Components
import PhotoshopIcon from "../svgs/PhotoshopIcon";
import IllustratorIcon from "../svgs/IllustratorIcon";
import FigmaIcon from "../svgs/FigmaIcon";
import JavaScriptIcon from "../svgs/JavaScriptIcon";
import TypeScriptIcon from "../svgs/TypeScriptIcon";
import ReactIcon from "../svgs/ReactIcon";
import NextjsIcon from "../svgs/NextjsIcon";
import GatsbyIcon from "../svgs/GatsbyIcon";
import TailwindIcon from "../svgs/TailwindIcon";
import NodejsIcon from "../svgs/NodejsIcon";
import MongodbIcon from "../svgs/MongodbIcon";
import MysqlIcon from "../svgs/MysqlIcon";
import GitIcon from "../svgs/GitIcon";

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
          <Pill
            tool="JavaScript"
            experience={7}
            competency="Skilled"
            icon={JavaScriptIcon}
          />
          <Pill
            tool="TypeScript"
            experience={1}
            competency="Capable"
            icon={TypeScriptIcon}
          />
          <Pill
            tool="React"
            experience={2}
            competency="Capable"
            icon={ReactIcon}
          />
          <Pill
            tool="Next.js"
            experience={1}
            competency="Capable"
            icon={NextjsIcon}
          />
          <Pill
            tool="Gatsby"
            experience={1}
            competency="Capable"
            icon={GatsbyIcon}
          />
          <Pill
            tool="Tailwind CSS"
            experience={2}
            competency="Skilled"
            icon={TailwindIcon}
          />
          <Pill
            tool="Node.js"
            experience={3}
            competency="Capable"
            icon={NodejsIcon}
          />
          <Pill
            tool="MongoDB"
            experience={1}
            competency="Capable"
            icon={MongodbIcon}
          />
          <Pill
            tool="MySQL"
            experience={1}
            competency="Capable"
            icon={MysqlIcon}
          />
          <Pill tool="Git" experience={3} competency="Capable" icon={GitIcon} />
        </div>
        <Prompt heading="designStack" />
        <div className="flex flex-wrap gap-2 mt-2">
          <Pill
            tool="Photoshop"
            experience={10}
            competency="Pro"
            icon={PhotoshopIcon}
          />
          <Pill
            tool="Illustrator"
            experience={7}
            competency="Pro"
            icon={IllustratorIcon}
          />
          <Pill
            tool="Figma"
            experience={2}
            competency="Skilled"
            icon={FigmaIcon}
          />
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
