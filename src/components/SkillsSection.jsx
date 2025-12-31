import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // AI/ML
  { name: "PyTorch", level: 90, category: "ai-ml" },
  { name: "TensorFlow/Keras", level: 85, category: "ai-ml" },
  { name: "Scikit-learn", level: 85, category: "ai-ml" },
  { name: "Deep Learning", level: 90, category: "ai-ml" },
  { name: "Computer Vision", level: 80, category: "ai-ml" },
  { name: "NLP & Embeddings", level: 85, category: "ai-ml" },
  { name: "Time-series", level: 75, category: "ai-ml" },

  // LLM/RAG
  { name: "RAG Systems", level: 90, category: "llm-rag" },
  { name: "Prompt Engineering", level: 85, category: "llm-rag" },
  { name: "Vector Databases", level: 80, category: "llm-rag" },
  { name: "LangChain", level: 75, category: "llm-rag" },
  { name: "Local LLMs", level: 80, category: "llm-rag" },
  { name: "Document Chunking", level: 85, category: "llm-rag" },

  // Audio ML
  { name: "Wake-word Detection", level: 80, category: "audio-ml" },
  { name: "Spectrogram Modeling", level: 75, category: "audio-ml" },
  { name: "Audio Preprocessing", level: 80, category: "audio-ml" },
  { name: "ASR Fundamentals", level: 70, category: "audio-ml" },

  // Tools
  { name: "Python", level: 95, category: "tools" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "FastAPI", level: 80, category: "tools" },
  { name: "NumPy/Pandas", level: 90, category: "tools" },
];

const categories = ["all", "ai-ml", "llm-rag", "audio-ml", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
