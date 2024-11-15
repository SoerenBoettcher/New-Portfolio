import { useRef } from "react";
import my from "../assets/my1.jpeg";
import Type from "./Type";

const socialMediaLinks = [
    "https://github.com/SoerenBoettcher",
    "https://www.linkedin.com/in/s%C3%B6ren-b%C3%B6ttcher-406abb318/",
];

const Hero = () => {
    const contactRef = useRef(null);

    const social_media = ["logo-github", "logo-linkedin"];
    return (
        <section id="home" className="min-h-screen flex py-20 md:flex-row flex-col items-center">
            <div className="flex-1 flex items-center justify-center h-full">
                <img
                    src={my}
                    alt="Foto von Sören"
                    className="md:w-2/3 h-[700px] mb-6 rounded-xl border-2 border-gray-600 object-cover"
                />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Sören Böttcher</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        <Type />
                    </h4>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {social_media?.map((icon, index) => (
                            <a
                                key={icon}
                                href={socialMediaLinks[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-white cursor-pointer "
                            >
                                <ion-icon name={icon}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={contactRef}></div>
        </section>
    );
};

export default Hero;
