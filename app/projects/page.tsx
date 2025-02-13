"use client";

import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import SectionContainer from "@/components/oposite_gradient_container";
import { ProjectsData, uniqueProjectsKeywords } from "@/data/setup";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { IoFilterCircleOutline } from "react-icons/io5";
import Link from "next/link";

function ProjectsIntroduction() {
  return (
    <div className="margins mt-32 space-y-6 lg:max-w-screen-lg">
      <h2>Projects</h2>
      <p>{ProjectsData.page_description}</p>
    </div>
  );
}

interface KeywordsFilterProps {
  selectedKeyword: string[];
  setSelectedKeyword: Dispatch<SetStateAction<string[]>>;
}

function KeywordsFilter({
  selectedKeyword,
  setSelectedKeyword,
}: KeywordsFilterProps) {
  const toggleKeyword = (keyword: string) => {
    setSelectedKeyword((prev) =>
      prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword]
    );
  };
  const clearSelectedKeyword = () => {
    setSelectedKeyword([]);
  };
  return (
    <div className="flex m-auto items-center space-x-4">
      {selectedKeyword.length == 0 ? (
        <IoFilterCircleOutline className="project_filters !text-secondary" />
      ) : (
        <RxCrossCircled
          onClick={() => clearSelectedKeyword()}
          className="project_filters hover:bg-secondary/10 cursor-pointer"
        />
      )}
      <div className="flex flex-row flex-wrap gap-1">
        {uniqueProjectsKeywords.map((keyword, i) => (
          <button
            key={i}
            className={`${
              selectedKeyword.includes(keyword)
                ? "bg-secondary text-primary hover:bg-secondary/85 dark:bg-secondary/90 dark:hover:bg-secondary"
                : "bg-primary/0 hover:bg-primary dark:bg-primary dark:hover:bg-secondary/5"
            } border-[1px] border-secondary/20 py-0.5 px-2 rounded-md focus:outline-none`}
            onClick={() => toggleKeyword(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectsShowcase() {
  const [selectedKeyword, setSelectedKeyword] = useState<string[]>([]);

  const isProjectKeywordsSelected = (
    projectKeywords: string[],
    selectedKeyword: string[]
  ) => {
    return projectKeywords.some((keyword) => selectedKeyword.includes(keyword));
  };

  return (
    <div className="margins space-y-8">
      <KeywordsFilter
        selectedKeyword={selectedKeyword}
        setSelectedKeyword={setSelectedKeyword}
      />
      <div className="grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1">
        {ProjectsData.projects.map((project, i) =>
          isProjectKeywordsSelected(project.keywords, selectedKeyword) ||
          selectedKeyword.length == 0 ? (
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
                      target="_blank"
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
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Menu />
      <div>
        <SectionContainer bg_gradient={true} tr_blur={true}>
          <ProjectsIntroduction />
          <ProjectsShowcase />
        </SectionContainer>
      </div>
      <Footer />
    </div>
  );
}
