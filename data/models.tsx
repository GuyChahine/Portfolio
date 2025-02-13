import { IconType } from "react-icons";

export class Qualification {
  name: string;
  icon: IconType;

  constructor({ name, icon }: { name: string; icon: IconType }) {
    this.name = name;
    this.icon = icon;
  }
}

export class SkillModel {
  name: string;
  icon: IconType;
  keywords: string[];

  constructor({
    name,
    icon,
    keywords,
  }: {
    name: string;
    icon: IconType;
    keywords: string[];
  }) {
    this.name = name;
    this.icon = icon;
    this.keywords = keywords;
  }
}

export class WorkExperienceModel {
  job_title: string;
  company: string;
  location: string;
  start_end_date: string;
  job_description: string[];
  keywords: string[];

  constructor({
    job_title,
    company,
    location,
    start_end_date,
    job_description,
    keywords,
  }: {
    job_title: string;
    company: string;
    location: string;
    start_end_date: string;
    job_description: string[];
    keywords: string[];
  }) {
    this.job_title = job_title;
    this.company = company;
    this.location = location;
    this.start_end_date = start_end_date;
    this.job_description = job_description;
    this.keywords = keywords;
  }
}

export class CertificationModel {
  name: string;
  link: string;
  image_path: string;
  company: string;
  issued_date: string;

  constructor({
    name,
    link,
    image_path,
    company,
    issued_date,
  }: {
    name: string;
    link: string;
    image_path: string;
    company: string;
    issued_date: string;
  }) {
    this.name = name;
    this.link = link;
    this.image_path = image_path;
    this.company = company;
    this.issued_date = issued_date;
  }
}

export class DegreeModel {
  name: string;
  school_name: string;
  start_end_date: string;
  keywords: string[];

  constructor({
    name,
    school_name,
    start_end_date,
    keywords,
  }: {
    name: string;
    school_name: string;
    start_end_date: string;
    keywords: string[];
  }) {
    this.name = name;
    this.school_name = school_name;
    this.start_end_date = start_end_date;
    this.keywords = keywords;
  }
}

export class HobbyInterestModel {
  name: string;
  icon: IconType;
  description: string;

  constructor({
    name,
    icon,
    description,
  }: {
    name: string;
    icon: IconType;
    description: string;
  }) {
    this.name = name;
    this.icon = icon;
    this.description = description;
  }
}

export class LinkModel {
  url: string;
  icon: IconType;

  constructor({ url, icon }: { url: string; icon: IconType }) {
    this.url = url;
    this.icon = icon;
  }
}

export class Button {
  name: string;
  link: string;

  constructor({ name, link }: { name: string; link: string }) {
    this.name = name;
    this.link = link;
  }
}

export class ProjectModel {
  name: string;
  image_path: string;
  description: string[];
  keywords: string[];
  project_buttons: Button[];

  constructor({
    name,
    image_path,
    description,
    keywords,
    project_buttons,
  }: {
    name: string;
    image_path: string;
    description: string[];
    keywords: string[];
    project_buttons: Button[];
  }) {
    this.name = name;
    this.image_path = image_path;
    this.description = description;
    this.keywords = keywords;
    this.project_buttons = project_buttons;
  }
}

export class AboutModel {
  name: string;
  image_path: string;
  email: string;
  job_title: string;
  qualifications: Qualification[];
  summary: string[];
  skills: SkillModel[];
  work_experiences: WorkExperienceModel[];
  certifications: CertificationModel[];
  degrees: DegreeModel[];
  hobbies_interests: HobbyInterestModel[];
  links: LinkModel[];

  constructor({
    name,
    image_path,
    email,
    job_title,
    qualifications,
    summary,
    skills,
    work_experiences,
    certifications,
    degrees,
    hobbies_interests,
    links,
  }: {
    name: string;
    image_path: string;
    email: string;
    job_title: string;
    qualifications: Qualification[];
    summary: string[];
    skills: SkillModel[];
    work_experiences: WorkExperienceModel[];
    certifications: CertificationModel[];
    degrees: DegreeModel[];
    hobbies_interests: HobbyInterestModel[];
    links: LinkModel[];
  }) {
    this.name = name;
    this.image_path = image_path;
    this.email = email;
    this.job_title = job_title;
    this.qualifications = qualifications;
    this.summary = summary;
    this.skills = skills;
    this.work_experiences = work_experiences;
    this.certifications = certifications;
    this.degrees = degrees;
    this.hobbies_interests = hobbies_interests;
    this.links = links;
  }
}

export class ProjectsModel {
  page_description: string;
  projects: ProjectModel[];

  constructor({
    page_description,
    projects,
  }: {
    page_description: string;
    projects: ProjectModel[];
  }) {
    this.page_description = page_description;
    this.projects = projects;
  }
}

export class ContactModel {
  page_description: string;

  constructor({ page_description }: { page_description: string }) {
    this.page_description = page_description;
  }
}

export class HomeModel {
  personal_description: string[];
  main_buttons: Button[];
  about_title: string;
  about_background: string[];
  project_title: string;
  project_description: string;

  constructor({
    personal_description,
    main_buttons,
    about_title,
    about_background,
    project_title,
    project_description,
  }: {
    personal_description: string[];
    main_buttons: Button[];
    about_title: string;
    about_background: string[];
    project_title: string;
    project_description: string;
  }) {
    this.personal_description = personal_description;
    this.main_buttons = main_buttons;
    this.about_title = about_title;
    this.about_background = about_background;
    this.project_title = project_title;
    this.project_description = project_description;
  }
}
