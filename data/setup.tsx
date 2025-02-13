import {
  Qualification,
  SkillModel,
  WorkExperienceModel,
  CertificationModel,
  DegreeModel,
  HobbyInterestModel,
  LinkModel,
  AboutModel,
  Button,
  ProjectModel,
  ProjectsModel,
  ContactModel,
  HomeModel,
} from "@/data/models";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { BiTennisBall } from "react-icons/bi";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { LuPlane } from "react-icons/lu";
import { LiaChessKnightSolid } from "react-icons/lia";
import { TbMountain } from "react-icons/tb";
import { LuChefHat } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { IoMdCloudOutline } from "react-icons/io";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdOutlineWeb } from "react-icons/md";

export let AboutData = new AboutModel({
  name: "Guy Chahine",
  image_path: "/images/profile_picture_example.jpg",
  email: "guychahine@gmail.com",
  job_title: "AI Research Scientist & MLOps Engineer",
  qualifications: [
    new Qualification({ name: "Generative AI Specialist", icon: LuBrain }),
    new Qualification({
      name: "AI Research Scientist",
      icon: AiOutlineExperiment,
    }),
    new Qualification({ name: "MLOps Engineer", icon: IoMdCloudOutline }),
    new Qualification({ name: "Full-Stack Developer", icon: MdOutlineWeb }),
  ],
  summary: [
    "AI Research Scientist and MLOps Engineer with a focus on generative AI, machine learning, and advanced computational frameworks, currently based in Nice, France. I specialize in delivering high-impact, scalable AI solutions that optimize operational processes and drive significant business results. With a track record of enhancing CI/CD systems, I developed an agentic workflow that improved auto-fix coverage from 10% to 80%, resulting in multi-million-dollar savings by reducing developer time spent on build failures.",
    "My recent achievements include improving large language model (LLM) reasoning in code, doubling the performance of existing models, and conducting cutting-edge research in retrieval-augmented generation (RAG), which led to a 25% increase in positive human feedback. I have successfully delivered solutions that enhance developer productivity, improve system efficiency, and solve complex technical challenges across multiple industries.",
    "With a Master’s in Data Science & AI and extensive experience in cloud technologies, automation, and AI-driven optimization, I am committed to advancing AI technologies and driving transformative change in every project I undertake. Outside of work, I enjoy tennis, music production, and exploring new cultures, which fuel my passion for continuous learning and creative problem-solving.",
  ],
  skills: [
    new SkillModel({
      name: "Generative AI",
      icon: LuBrain,
      keywords: [
        "LLM Finetuning",
        "Agentic Workflows",
        "Zero/Few-Shot Learning",
        "Function Calling",
        "Structured Output Reasoning",
        "Code Generation",
        "LangChain",
        "CrewAI",
        "Hugging Face",
        "RAG",
        "KG-RAG",
        "OpenAI",
        "DeepSeek",
        "Stable Diffusion",
        "GAN",
      ],
    }),
    new SkillModel({
      name: "AI & Machine Learning",
      icon: RiRobot2Line,
      keywords: [
        "Reinforcement Learning",
        "Deep Learning",
        "CNN",
        "Attention Mechanisms",
        "XGBoost",
        "SVM",
        "Random Forests",
        "KNN",
        "NLP",
        "Computer Vision",
        "Time Series Analysis",
        "Anomaly Detection",
        "Ensemble Methods",
        "Transfer Learning",
        "Hyperparameter Tuning",
      ],
    }),
    new SkillModel({
      name: "MLOps & DevOps",
      icon: IoMdCloudOutline,
      keywords: [
        "CI/CD",
        "Cloud Computing for AI",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Git",
        "API Development",
        "VectorDB",
        "GPU Acceleration",
        "Monitoring",
        "A/B Testing",
        "Scaling & Load Balancing",
        "Data & Model Security",
      ],
    }),
    new SkillModel({
      name: "Programming",
      icon: FaCode,
      keywords: [
        "Python",
        "Typescript",
        "SQL",
        "NoSQL",
        "React",
        "FastAPI",
        "REST APIs",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Web Scraping",
      ],
    }),
  ],
  work_experiences: [
    new WorkExperienceModel({
      job_title: "Lead Research Data Scientist",
      company: "Amadeus",
      location: "Cagnes-sur-Mer, France",
      start_end_date: "February 2024 - Present",
      job_description: [
        "Designed and implemented an agentic workflow framework for self-healing CI/CD failures, increasing coverage of auto-fixed root causes from 10% to 80% compared to existent models.",
        "Delivered a $26M revenue-saving solution by reducing developer time spent on fixing CI/CD build failures by 20%.",
        "Enhanced LLM reasoning capabilities in code, achieving 2x improvement over state-of-the-art models.",
        "Analyzed development behavior and build failure root causes using statistical and exploratory techniques, drawing insights for over 10,000 developers.",
      ],
      keywords: [
        "Self-Healing CI/CD",
        "Autonomous Code Repair",
        "DevOps AI Automation",
        "Agentic Workflows",
        "OpenAI",
        "Predictive Failure Analysis",
        "Jenkins",
        "GitHub Actions",
        "Python",
        "FastAPI",
        "Docker",
        "Kubernetes",
        "Azure",
      ],
    }),
    new WorkExperienceModel({
      job_title: "Undergraduate Data Science Researcher",
      company: "Alten",
      location: "Sophia Antipolis, France",
      start_end_date: "August 2023 - February 2024",
      job_description: [
        "Conducted scientific research on iterative narrative systems and retrieval-augmented generation, leading to the publication of four scientific and technical reports.",
        "Collected and secured data from 150+ employees and 25 projects to build a comprehensive knowledge base, covering 90% of the company’s project documentation.",
        "Designed a chatbot architecture and a high-performance RAG model leveraging knowledge graphs, improving positive human feedback by 25% compared to previous state-of-the-art models.",
        "Developed a web platform integrating AI/ML models, onboarding 30+ engineers ultimately boosting productivity by reducing search time on internal documentation.",
      ],
      keywords: [
        "RAG",
        "Agentic Workflows",
        "Document Search Optimization",
        "Iterative Narrative Systems",
        "Full-Stack Development",
        "PyTorch",
        "Scikit-learn",
        "BERT",
        "GPT",
        "OpenAI",
        "Python",
        "FastAPI",
        "Docker",
        "Azure",
      ],
    }),
  ],
  certifications: [
    new CertificationModel({
      name: "Neo4j Certification",
      link: "http://example.com",
      image_path: "/images/neo4j_certification.png",
      company: "Neo4j",
      issued_date: "28th Jan 2025",
    }),
  ],
  degrees: [
    new DegreeModel({
      name: "Master of Science - MS, Data Science & Artificial Intelligence",
      school_name: "Data Science Tech Institute",
      start_end_date: "September 2021 - August 2023",
      keywords: ["Departmental Honors", "Summa Cum Laude"],
    }),
    new DegreeModel({
      name: "Bachelor of Science - BS, Physics",
      school_name: "Saint Joseph University",
      start_end_date: "September 2017 - May 2021",
      keywords: [],
    }),
  ],
  hobbies_interests: [
    new HobbyInterestModel({
      name: "Tennis",
      icon: BiTennisBall, // Updated icon to match the sport
      description:
        "Engage in a competitive and exciting sport that requires agility and mental focus.",
    }),
    new HobbyInterestModel({
      name: "Music Production",
      icon: RiNeteaseCloudMusicLine, // Updated to represent music
      description:
        "Creating, composing, and producing music using digital tools and software.",
    }),
    new HobbyInterestModel({
      name: "Traveling",
      icon: LuPlane, // Updated to represent travel
      description:
        "Exploring new cultures, experiencing diverse landscapes, and broadening personal horizons.",
    }),
    new HobbyInterestModel({
      name: "Chess",
      icon: LiaChessKnightSolid, // Updated to represent chess
      description:
        "Strategic game that sharpens your mind and tests your problem-solving skills.",
    }),
    new HobbyInterestModel({
      name: "Bouldering",
      icon: TbMountain, // Updated to represent climbing and nature
      description:
        "Climbing challenging routes, testing your strength and problem-solving abilities.",
    }),
    new HobbyInterestModel({
      name: "Cooking",
      icon: LuChefHat, // Updated to represent cooking
      description:
        "Exploring the art of preparing and experimenting with diverse cuisines and flavors.",
    }),
  ],
  links: [
    new LinkModel({ url: "https://www.linkedin.com/in/guychahine/", icon: FaLinkedin }),
    new LinkModel({ url: "https://github.com/GuyChahine", icon: FaGithub }),
    new LinkModel({ url: "mailto:guychahine@gmail.com", icon: MdMailOutline }),
  ],
});

export let ProjectsData = new ProjectsModel({
  page_description:
    "Explore a collection of my projects, ranging from AI and Machine Learning to Generative AI, MLOps, and Web Development, showcasing my hands-on experience and continuous learning.",
  projects: [
    new ProjectModel({
      name: "AutoRAG: AI-Powered Customer Service Chatbot",
      image_path: "/images/autorag.jpg",
      description: [
        "A custom AI-powered customer service chatbot for seamless integration with e-commerce websites, providing 24/7 support for customer inquiries. The chatbot is built around a Retrieval-Augmented Generation (RAG) pipeline, combining document retrieval and generative models to deliver highly relevant, context-aware answers.",
        "Using Chromadb and Hugging Face encoders, I created a fast document retrieval system, ensuring the chatbot can access the most relevant content quickly and efficiently for each customer query. With just one click, the system can embed both website content and external documents, guaranteeing that responses are always accurate and up-to-date.",
        "This solution aims to empower businesses to manage higher volumes of inquiries while improving customer satisfaction and conversion rates through faster, more accurate, and consistent support.",
      ],
      keywords: [
        "AI Chatbot",
        "RAG",
        "E-commerce",
        "Generative AI",
        "Hugging Face",
        "ChromaDB",
        "NLP",
        "Customer Service Automation",
        "AI-Driven FAQ",
      ],
      project_buttons: [
        new Button({
          name: "Github",
          link: "https://github.com/GuyChahine/AutoRAG",
        }),
      ],
    }),
    new ProjectModel({
      name: "Google - American Sign Language Fingerspelling Recognition",
      image_path: "/images/aslfr.jpg",
      description: [
        "To make AI more accessible for the Deaf and Hard of Hearing (DHH) community, I participated in the Google - American Sign Language (ASL) Fingerspelling Recognition Competition, which aimed to develop an AI system capable of detecting and translating ASL fingerspelling into text. The dataset provided by Google consisted of over three million fingerspelled characters recorded from 100+ Deaf signers under diverse lighting conditions, making it a challenging yet rewarding task.",
        "I developed a Transformer-based sequence-to-sequence (Seq2Seq) model in PyTorch to accurately recognize and classify fingerspelled sequences from video frames. The model leveraged self-attention mechanisms to effectively track hand movements over time, ensuring robust predictions. To optimize real-time performance, I quantized the model and converted it into TensorFlow Lite (TFLite), making it deployable on edge devices like smartphones.",
        "Through extensive data augmentation and preprocessing techniques, I improved the model’s generalization, reducing classification errors. My solution achieved a high accuracy score, demonstrating AI's potential in bridging communication gaps for the DHH community.",
      ],
      keywords: [
        "Sign Language",
        "Transformer Model",
        "Seq-2-Seq",
        "PyTorch",
        "TFLite",
        "Computer Vision",
        "Accessibility AI",
      ],
      project_buttons: [
        new Button({
          name: "Github",
          link: "https://github.com/GuyChahine/Google-ASLFR",
        }),
      ],
    }),
    new ProjectModel({
      name: "Night to Day – Image Transformation with CycleGAN",
      image_path: "/images/night2day.jpg",
      description: [
        "In this project, I explored the fascinating domain of Generative Adversarial Networks (GANs) by designing a model capable of transforming nighttime images into daytime images and vice versa. This problem posed a unique challenge due to the complex lighting variations and dynamic shadows that occur during the transition between night and day.",
        "To create a robust dataset, I scraped and curated a collection of timelapse videos showcasing urban landscapes transitioning from night to day. Using this dataset, I trained a CycleGAN model with two generators: one responsible for transforming night images into day, and the other performing the inverse transformation. The generator architecture combined ResNet and U-Net, ensuring both high-quality texture preservation and spatial consistency. The discriminator was a CNN-based model, which refined the generated outputs by distinguishing real images from synthetically transformed ones.",
        "The final model produced realistic image transformations with minimal artifacts, proving the power of unsupervised deep learning in image-to-image translation.",
      ],
      keywords: [
        "GAN",
        "CycleGAN",
        "Image-to-Image",
        "Computer Vision",
        "Deep Learning",
        "ResNet",
        "U-Net",
        "CNN",
        "Unsupervised Learning",
      ],
      project_buttons: [
        new Button({
          name: "Github",
          link: "https://github.com/GuyChahine/Night-To-Day",
        }),
      ],
    }),
    new ProjectModel({
      name: "ScrapDynamics – Web Crawler for Automated Data Collection",
      image_path: "/images/scrapdynamics.jpg",
      description: [
        "During my work in data science, I often encountered the need for customized web crawling and scraping solutions to collect structured and unstructured data efficiently. To address this, I developed ScrapDynamics, a powerful web crawling framework that enables users to explore, extract, and structure information from websites using regular expressions and automated data extraction techniques.",
        "ScrapDynamics allows users to define custom crawling rules, extract links, metadata, and textual content, and handle large-scale web scraping tasks. It is optimized for high-performance data collection, with built-in support for asynchronous requests to maximize efficiency.",
        "This tool has been invaluable in gathering datasets for various machine learning and NLP tasks, enabling automation in market research, competitor analysis, and information retrieval.",
      ],
      keywords: [
        "Web Scraping",
        "Data Extraction",
        "Automation",
        "Web Crawler",
        "NLP",
        "Regular Expressions",
        "Python",
      ],
      project_buttons: [
        new Button({
          name: "Github",
          link: "https://github.com/GuyChahine/ScrapDynamics",
        }),
      ],
    }),
    new ProjectModel({
      name: "Detecting Continuous Gravitational Waves",
      image_path: "/images/g2net.jpg",
      description: [
        "This project was centered around astrophysics and signal processing, specifically in detecting continuous gravitational waves (CW) from space. These signals are incredibly weak, requiring advanced techniques to distinguish them from background noise.",
        "To tackle this challenge, I employed mel spectrograms, short-time Fourier transforms (STFT), and magnitude analysis to process raw wave signals. These transformed signals were then fed into deep convolutional neural networks (CNNs), trained to recognize the subtle patterns indicative of continuous gravitational waves.",
        "The model showed promising results in identifying subtle wave patterns, offering a small step forward in the broader effort to study continuous gravitational waves.",
      ],
      keywords: [
        "Gravitational Waves",
        "Signal Processing",
        "Deep Learning",
        "CNN",
        "Mel Spectrograms",
        "STFT",
        "Magnitude Analysis",
        "Time-Series Data",
      ],
      project_buttons: [
        new Button({
          name: "Github",
          link: "https://github.com/GuyChahine/g2net-detecting-continuous-gravitational-waves",
        }),
      ],
    }),
    new ProjectModel({
      name: "Modern Portfolio Website",
      image_path: "/images/portfolio.jpg",
      description: [
        "A Portfolio Website built with React.js and Next.js, designed for speed, responsiveness, and a modern user experience.",
        "Hosted on Vercel, it leverages client-side rendering (CSR) for optimized performance and features interactive project showcases, dark mode support, and dynamic content filtering.",
        "This portfolio serves as a professional and easily maintainable platform to present my expertise in web development, data science, and AI.",
      ],
      keywords: [
        "Next.js",
        "Vercel",
        "Web Development",
        "CSR",
        "Responsive Design",
        "Full-Stack Development",
      ],
      project_buttons: [
        new Button({
          name: "Github",
          link: "https://github.com/GuyChahine/Portfolio",
        }),
        new Button({
          name: "Live Demo",
          link: "https://guychahine.com",
        }),
      ],
    }),
  ],
});

export let HomeData = new HomeModel({
  personal_description: [
    "Senior Data Scientist",
    "Generative AI Expert",
    "MLOps & DevOps Engineer",
    "Full-Stack Developer",
  ],
  main_buttons: [
    new Button({ name: "Get in Touch", link: "/contact" }),
    new Button({ name: "View Projects", link: "/projects" }),
  ],
  about_title: "Pioneering Generative AI & MLOps Solutions",
  about_background: [
    "As a Data Scientist and MLOps specialist with expertise in Generative AI, I am dedicated to bridging the gap between research and practical applications. I develop scalable, innovative AI solutions that solve complex problems and drive significant business outcomes.",
  ],
  project_title: "Featured Projects",
  project_description:
    "A selection of projects driven by curiosity, innovation, and personal growth.",
});

export let ContactData = new ContactModel({
  page_description:
    "Have a question or want to get in touch? Fill out the form, and I’ll get back to you as soon as possible.",
});

export let uniqueProjectsKeywords = Array.from(
  new Set(ProjectsData.projects.map((project) => project.keywords).flat())
).sort((a, b) => a.localeCompare(b));
