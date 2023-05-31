const SectionIntro = ({ id, introTitle, introParagraph, position }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <h2 id="about" className="text-2xl font-bold">
          <span className="text-xl font-mono font-normal text-sage-100">
            01.{" "}
          </span>
          {introTitle}
        </h2>
        <p className="border-t border-solid border-white pt-4 mt-4">
          {introParagraph}
        </p>
      </div>
    </div>
  );
};

export default SectionIntro;
