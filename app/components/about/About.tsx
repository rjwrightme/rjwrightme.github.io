import Container from "../Container";
import Info from "./Info";

const About = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold">
              <span className="text-xl font-mono font-normal text-sage-100">
                01.{" "}
              </span>
              About Me
            </h2>
            <p className="border-t border-solid border-white pt-4 mt-4">
              Hello! My name is RJ and I love exploring the intersection between
              design and code. I've been building things for the web since 2013,
              mostly in the ecommerce space.
            </p>
          </div>
        </div>
        <Info />
      </Container>
    </>
  );
};

export default About;
