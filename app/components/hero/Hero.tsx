import Container from "../Container";
import CurlyBrace from "./CurlyBrace";
import Developer from "./Developer";
import Platform from "./Platform";

const Hero = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex justify-center items-center">
            <CurlyBrace />
            <h1 className="text-4xl font-bold text-center leading-6">
              <span className="font-mono text-sage-100">Developer</span>
              <br />
              <span className="font-medium text-lg leading-10">by</span>
              <br />
              Design
            </h1>
          </div>
          <Developer />
        </div>
      </Container>
      <Platform />
    </>
  );
};

export default Hero;
