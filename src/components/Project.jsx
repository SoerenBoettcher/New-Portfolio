import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectNotiz from "../assets/project-notiz-app.png";
import projectWeb from "../assets/project-website-mit-html-css.png";
import projectPortfolio from "../assets/project-first-portfolio-html-css.png";
import projectGaming from "../assets/project-gruppen-gaming-page.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: projectNotiz,
      name: "Never forget a note",
      github_link: "https://github.com/SoerenBoettcher/Notizbuch",
      live_link: "https://notizbuch.onrender.com/",
    },
    {
      img: projectWeb,
      name: "First Website with HTML and CSS",
      github_link: "https://github.com/SoerenBoettcher/web",
      //live_link: "",
    },
    {
      img: projectPortfolio,
      name: "First Portfolio with HTML and CSS",
      github_link: "https://github.com/SoerenBoettcher/Portfolio",
      live_link: "https://soerenboettcher.github.io/Portfolio/",
    },
    {
      img: projectGaming,
      name: "First Groupwork (Gaming-Page)",
      github_link: "https://github.com/h1-Hello-World-h1/Gaming-Room-",
      //live_link: "",
    },
  ];
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg hover:text-gray-100"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg hover:text-gray-100"
                    >
                      Live
                    </a>
                    <div className="autoplay-progress" slot="container-end">
                      <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref={progressContent}></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
