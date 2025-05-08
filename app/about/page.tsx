"use client";

import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { AboutData } from "@/data/setup";
import Image from "next/image";
import SectionContainer from "@/components/oposite_gradient_container";
import { TiBusinessCard } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineInterests } from "react-icons/md";
import SkillsCards from "@/components/skills_cards";

function AboutIntroduction() {
  return (
    <div className="flex items-center lg:space-x-16 margins mt-32 max-lg:flex-col max-lg:space-y-12 lg:max-w-screen-xl">
      <div className="size-[250px] max-md:size-[200px] relative shrink-0">
        <Image
          src={AboutData.image_path}
          alt={AboutData.name}
          style={{ objectFit: "cover" }}
          fill
          className="rounded-full shadow-2xl shadow-secondary/30 dark:shadow-secondary/5 bg-secondary/10"
        ></Image>
      </div>
      <div className="flex flex-col space-y-3">
        <h2>{AboutData.name}</h2>
        <span className="text-lg">{AboutData.job_title}</span>
        <div className="parent_keywords">
          {AboutData.qualifications.map((qualification, i) => (
            <div key={i} className="keywords">
              {<qualification.icon key={i + 100} className="text-base" />}
              <span>{qualification.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="flex flex-col margins">
      <div className="about_titles">
        <TiBusinessCard />
        <h3>Professional Overview</h3>
      </div>
      <div className="flex flex-col space-y-3">
        {AboutData.summary.map((paragraph, i) => (
          <p key={i} className="">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="margins">
      <div className="about_titles">
        <FaCode className="" />
        <h3 className="">Skills</h3>
      </div>
      <SkillsCards />
    </div>
  );
}

function WorkExperiences() {
  return (
    <div className="margins">
      <div className="about_titles">
        <IoBriefcaseOutline />
        <h3>Work Experiences</h3>
      </div>
      <div className="space-y-14">
        {AboutData.work_experiences.map((work_experience, i) => (
          <div key={i} className="">
            <div className="flex justify-between max-lg:flex-col">
              <div className="flex flex-col">
                <h4 className="h4_titles">{work_experience.job_title}</h4>
                <p className="font-medium">{work_experience.company}</p>
                <p className="text-sm">{work_experience.location}</p>
              </div>
              <span className="">{work_experience.start_end_date}</span>
            </div>
            <ul className="my-4 list-disc ml-4 space-y-2">
              {work_experience.job_description.map((paragraph, j) => (
                <li key={j}>{paragraph}</li>
              ))}
            </ul>
            <div className="parent_keywords my-4">
              {work_experience.keywords.map((keyword, j) => (
                <span key={j} className="keywords">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// function Certifications() {
//   return (
//     <div className="margins">
//       <div className="about_titles">
//         <PiCertificate />
//         <h3>Certifications</h3>
//       </div>
//       <div className="grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1">
//         {AboutData.certifications.map((certification, i) => (
//           <Link
//             key={i}
//             href={certification.link}
//             target="_blank"
//             className="card flex-row items-center space-x-6"
//           >
//             <div className="size-[80px] relative shrink-0">
//               <Image
//                 src={certification.image_path}
//                 alt={certification.name}
//                 style={{ objectFit: "cover" }}
//                 fill
//               ></Image>
//             </div>
//             <div className="">
//               <h4 className="h4_titles mb-1">{certification.name}</h4>
//               <p className="">{certification.company}</p>
//               <p className="text-secondary/70 text-sm">
//                 Issued: {certification.issued_date}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

function Degrees() {
  return (
    <div className="margins">
      <div className="about_titles">
        <LuGraduationCap />
        <h3>Education</h3>
      </div>
      <div className="space-y-14">
        {AboutData.degrees.map((degree, i) => (
          <div key={i} className="">
            <div className="flex justify-between max-lg:flex-col">
              <div className="">
                <h4 className="h4_titles">{degree.name}</h4>
                <p className="font-medium">{degree.school_name}</p>
              </div>
              <p>{degree.start_end_date}</p>
            </div>
            <div className="parent_keywords mt-2">
              {degree.keywords.map((keyword, j) => (
                <span key={j} className="keywords">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HobbiesInterests() {
  return (
    <div className="margins">
      <div className="about_titles">
        <MdOutlineInterests />
        <h3>Hobbies & Interests</h3>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {AboutData.hobbies_interests.map((hobby_interest, i) => (
          <div key={i} className="card flex-col space-y-2 sm:mr-6">
            <div className="h4_titles">
              {<hobby_interest.icon />}
              <h4>{hobby_interest.name}</h4>
            </div>
            <p className="text-sm text-secondary/70">
              {hobby_interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Menu />
      <div>
        <SectionContainer bg_gradient={true} tr_blur={true} lb_blur={false}>
          <AboutIntroduction />
          <Summary />
          <Skills />
          <WorkExperiences />
          {/*<Certifications />*/}
          <Degrees />
          <HobbiesInterests />
        </SectionContainer>
      </div>
      <Footer />
    </div>
  );
}
