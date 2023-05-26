interface PromptProps {
  heading?: string;
  className?: string;
}

const Prompt: React.FC<PromptProps> = ({ heading, className }) => {
  return (
    <div className={`flex items-center mt-6 ${className || ""}`}>
      <svg
        stroke-width="0"
        viewBox="0 0 320 512"
        className="dark:fill-yellow-200 mr-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
      </svg>
      {heading && (
        <h4>
          rj.<span className="font-semibold text-sage-100">{heading}</span>
        </h4>
      )}
      {!heading && (
        <span className="h-4 w-2 dark:bg-slate-300 animate-cursor"></span>
      )}
    </div>
  );
};

export default Prompt;
