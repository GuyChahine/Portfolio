import { AboutData } from "@/data/setup";


export default function SkillsCards() {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1">
      {AboutData.skills.map((skill, i) => (
        <div key={i} className="card flex-col space-y-6">
          <div className="h4_titles">
            {<skill.icon />}
            <h4>{skill.name}</h4>
          </div>
          <div className="parent_keywords">
            {skill.keywords.map((keyword, j) => (
              <span key={j} className="keywords">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}