import React from "react";


const About = () => {
    const info = [
      { text: "Years experience", count: "Fresher" },
      { text: "Completed Projects", count: "10" },
      { text: "Companies Work", count: "01" },
    ];
    return (
      <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            About <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">My introduction</p>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                 Hy I am Parag Aggarwal Recently I have Completed my graduation in Btech
                 ECE but My Interest is in Software Department So I developed my skills
                 in Software like I am a Full Stack Web Developer having skills in  (MERN Developer), Python(Django, Flask), 
                 Javascript.
                </p>
                <div className="flex mt-10 items-center gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-cyan-600">+</span>{" "}
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <a href="./src/assets/Code_a_program.pdf" download>
                  <button className="btn-primary">Download CV</button>
                </a>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;