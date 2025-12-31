import { Brain, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI & Systems-Focused Engineer
            </h3>

            <p className="text-muted-foreground">
              Currently pursuing a B.Tech in Artificial Intelligence (PCTE),
              I focus on building intelligent backend systems and machine learning pipelines
              that solve real operational problems.
            </p>

            <p className="text-muted-foreground">
              My work centers around designing grounded AI systems using RAG,
              building LLM-powered internal tools, and developing ML models from scratch
              across vision, audio, NLP, and time-series domains.
            </p>

            <p className="text-muted-foreground text-sm italic">
              While my primary focus is AI systems and backend logic, I can build
              functional interfaces when the project calls for it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://github.com/BhavishBerry"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">LLM & RAG Systems</h4>
                  <p className="text-muted-foreground">
                    Building grounded AI systems with document-aware generation,
                    prompt engineering, and hallucination mitigation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Vision, audio, NLP, and time-series models built from scratch
                    using PyTorch, TensorFlow, and Scikit-learn.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Backend Systems</h4>
                  <p className="text-muted-foreground">
                    Python-based pipelines, AI orchestration, and API-level
                    system design for production AI applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
