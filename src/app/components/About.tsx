import React from "react";

const About = () => {
  return (
    <div className=" flex align-middle justify-center mx-10 sm:mx-60 shadow-2xl">
      <article className="rounded-xl dark:bg-white bg-slate-900 p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div>
            <strong className="rounded-md border border-yellow bg-orange px-3 py-1.5 text-[10px] font-bold text-white">
              ABOUT ME
            </strong>

            <p className="mt-6  text-sm sm:text-lg    dark:text-gray-700 text-slate-300">
              I am a final year student at VSSUT, Burla pursuing B Tech in
              Computer Science and Engineering. I am a passionate Developer and
              Competitive Programmer(really love problem solving). I have
              participated in many contests, hackathons and secured good
              positions. Currently I am into Full Stack Web Development but I am
              always curious about new technologies. So I keep learning new
              things and improving my skills. Apart from this I am a designer
              who loves to design UI of apps and websites. I haved worked as a
              freelancer for 1 year and have made many projects. I am an
              instrumentalist who loves to play piano and drums (learned myself
              :)) I am a big fan of rock and metal music. I love to play chess
              and read books.
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                <p className="text-xs font-medium">40 seconds reads</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
