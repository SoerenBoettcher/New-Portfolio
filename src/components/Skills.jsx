const Skills = () => {
    const skills = [
        {
            name: "HTML",
            logo: "logo-html5",
            level: "Experienced",
            count: 85,
        },
        {
            name: "CSS",
            logo: "logo-css3",
            level: "Effective",
            count: 75,
        },
        {
            name: "SASS",
            logo: "logo-sass",
            level: "Effective",
            count: 55,
        },
        {
            name: "JAVASCRIPT",
            logo: "logo-javascript",
            level: "Experienced",
            count: 80,
        },
        {
            name: "NODEJS",
            logo: "logo-nodejs",
            level: "Experienced",
            count: 85,
        },
        {
            name: "REACT",
            logo: "logo-react",
            level: "Experienced",
            count: 80,
        },
        {
            name: "NPM",
            logo: "logo-npm",
            level: "Experienced",
            count: 75,
        },
        {
            name: "FIREBASE",
            logo: "logo-firebase",
            level: "Effective",
            count: 44,
        },
    ];
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 mb-10 rounded-xl"
                        >
                            <p className="text-xl mb-2">{skill.name}</p>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                    <ion-icon name={skill.logo}> </ion-icon>
                                </div>
                            </div>
                            <p className="text-xl mt-3">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
