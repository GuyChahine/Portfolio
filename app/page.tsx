"use client";

import Menu from "@/components/menu";
import Footer from "@/components/footer";
import Image from "next/image";
import { AboutData } from "@/data/setup";
import { HomeData } from "@/data/setup";
import { ProjectsData } from "@/data/setup";
import SectionContainer from "@/components/oposite_gradient_container";
import SkillsCards from "@/components/skills_cards";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

function HomeIntroduction() {
  return (
    <div className="margins w-full my-32 space-y-8 flex flex-col items-center text-center">
      <div className="size-[250px] max-md:size-[200px] relative shrink-0">
        <Image
          src={AboutData.image_path}
          alt={AboutData.name}
          style={{ objectFit: "cover" }}
          fill
          className="rounded-full shadow-2xl shadow-secondary/30 dark:shadow-secondary/5"
        ></Image>
      </div>
      <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl font-bold !mt-8">
        Hi, I&apos;m {AboutData.name}
      </h1>
      <div className="flex flex-row flex-wrap gap-x-6 justify-center">
        {HomeData.personal_description.map((keyword, i) => (
          <span key={i} className="text-xl max-lg:text-base">
            {keyword}
          </span>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
        {HomeData.main_buttons.map((main_button, i) => (
          <div key={i} className="buttons home_buttons">
            <Link href={main_button.link}>{main_button.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeAbout() {
  return (
    <div className="margins flex flex-col items-center space-y-6 text-center">
      <h2 className="home_titles">{HomeData.about_title}</h2>
      <div className="!max-w-screen-lg">
        {HomeData.about_background.map((paragraph, i) => (
          <span key={i} className="pl-1">{paragraph}</span>
        ))}
      </div>
      <div className="h-[350px] overflow-hidden [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0))]">
        <SkillsCards />
      </div>
      <div className="flex">
        <div className="buttons home_buttons">
          <Link href="/about" className="flex flex-row items-center space-x-2">
            <span>Learn More About Me</span>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomeProjects() {
  const twoxl = useMediaQuery({ maxWidth: 1536 });
  const lg = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="margins space-y-6 flex flex-col items-center mb-24">
      <h2 className="home_titles">{HomeData.project_title}</h2>
      <p className="">{HomeData.project_description}</p>
      <div className="grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1">
        {ProjectsData.projects.map((project, i) =>
          i < (lg ? 3 : twoxl ? 4 : 3) ? (
            <div key={i} className="card flex-col !p-0">
              <div className="w-full h-[200px] relative shrink-0">
                <Image
                  src={project.image_path}
                  alt={project.name}
                  style={{ objectFit: "cover" }}
                  fill
                  className="rounded-t-md"
                ></Image>
              </div>
              <div className="px-6 py-8 space-y-4">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <div className="space-y-2">
                  {project.description.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
                <div className="parent_keywords">
                  {project.keywords.map((keyword, j) => (
                    <span key={j} className="keywords">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="space-x-4">
                  {project.project_buttons.map((project_button, j) => (
                    <Link
                      key={j}
                      href={project_button.link}
                      className="buttons"
                    >
                      {project_button.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      <div className="flex">
        <div className="buttons home_buttons">
          <Link
            href="/projects"
            className="flex flex-row items-center space-x-2"
          >
            <span>View All Projects</span>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Menu />
      <HomeIntroduction />
      <SectionContainer bg_gradient={true}>
        <HomeAbout />
        <HomeProjects />
      </SectionContainer>
      <Footer />
    </div>
  );
}
