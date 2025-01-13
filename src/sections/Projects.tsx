import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

import LAB1 from "@/assets/images/LAB1.png";
import LAB2 from "@/assets/images/LAB2.png";
import LAB3 from "@/assets/images/LAB3.png";
import LAB4 from "@/assets/images/LAB4.png";
import LAB5 from "@/assets/images/LAB5.png";
import LAB6 from "@/assets/images/LAB6.png";
import LAB8 from "@/assets/images/LAB8.png";

import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

const portfolioProjects = [
  {
    labratory_work: "Лабораторная работа 1",
    title: "Реализация удаленного импорта собственного пакета",
    results: [{ title: "Выполнена" }, { title: "21 декабря 2024, 13:03" }],
    link: "https://github.com/masyanychXD/Prog-5-LAB-1.git",
    image: LAB1,
  },
  {
    labratory_work: "Лабораторная работа 2",
    title: "Использование API openweathermap.org",
    results: [{ title: "Выполнена" }, { title: "21 декабря 2024, 13:45" }],
    link: "https://github.com/masyanychXD/Prog-5-LAB-2.git",
    image: LAB2,
  },
  {
    labratory_work: "Лабораторная работа 3",
    title: "Публикация на pypi",
    results: [{ title: "Выполнена" }, { title: "10 января 2025, 15:35" }],
    link: "https://github.com/masyanychXD/Prog-5-LAB-3.git",
    image: LAB3,
  },
  {
    labratory_work: "Лабораторная работа 4",
    title: "Создание генератора с элементами ряда Фибоначчи",
    results: [{ title: "Выполнена" }, { title: "10 января 2025, 19:37" }],
    link: "https://github.com/masyanychXD/Prog-5-LAB-4.git",
    image: LAB4,
  },
  {
    labratory_work: "Лабораторная работа 5",
    title: "Получение курсов валют (ООП)",
    results: [{ title: "Выполнена" }, { title: "11 января 2025, 20:09" }],
    link: "https://github.com/masyanychXD/Prog-5-LAB-5.git",
    image: LAB5,
  },
  {
    labratory_work: "Лабораторная работа 6",
    title: "Использование шаблона «Декоратор»",
    results: [{ title: "Выполнена" }, { title: "12 января 2025, 21:56" }],
    link: "https://github.com/masyanychXD/Prog-5-LAB-6.git",
    image: LAB6,
  },
  {
    labratory_work: "Лабораторная работа 8",
    title: " Графики matplotlib",
    results: [{ title: "Выполнена" }, { title: "12 января 2025, 23:30" }],
    link: "https://colab.research.google.com/drive/1tTv2xeUE3tPuC0InoFFcHQ86YOV6o35r?usp=sharing",
    image: LAB8,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className=" container ">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Программирование (5 семестр)
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Лабораторные работы
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Проверьте мои выполненные работы за пятый семестр обучения
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-500 inline-flex font-bold uppercase tracking-widest text-lg text-transparent bg-clip-text">
                    <span>{project.labratory_work}</span>
                  </div>
                  <h3 className="font-serif text-xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2 mt-8">
                      <span>Посмотреть работу</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-1 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
