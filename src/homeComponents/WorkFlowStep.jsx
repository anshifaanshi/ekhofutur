import { ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Start with a prompt",
    description: "Start with a simple prompt describing what you want your agent to do. Our builder interprets your idea and creates the structure for you in seconds",
    link: "https://i.postimg.cc/Rh6rYP1W/analysis-strategy-study-information-business-planning.jpg",
    image: "https://i.postimg.cc/QM2ntXcx/visual-design-pl9Drj-AMV6I-unsplash.jpg",
  },
  {
    id: 2,
    title: "Adjust and personalize",
    description: "Adjust tasks, actions and integrations. Add personality, rules and data sources to make the agent work exactly the way you want.",
    link: "",
    image: "https://i.postimg.cc/Rh6rYP1W/analysis-strategy-study-information-business-planning.jpg",
  },
  {
    id: 3,
    title: "Launch & Automate",
    description: "Deploy your agent and let it run. It executes tasks autonomously, reports results, and continues working in the background.",
    link: "https://prebuiltui.com/templates",
    image: "https://i.postimg.cc/W1K5W2Wr/campaign-creators-ARW7Ic7MSAM-unsplash.jpg",
  },
];

export default function WorkflowSteps() {
  // Split heading for animation
  const heading = "From idea to autonomous agent quickly and effortlessly";
  const words = heading.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section className="mt-32 relative flex flex-col items-center py-16">
      {/* Heading with yellow gradient animation */}
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-12"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        {firstPart}{" "}
        <motion.span
          className="bg-gradient-to-t from-yellow-400 to-yellow-600 p-1 bg-left inline-block bg-no-repeat"
          initial={{ backgroundSize: "0% 100%" }}
          whileInView={{ backgroundSize: "100% 100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
        >
          {lastWord}
        </motion.span>
      </motion.h2>

      <p className="text-center text-slate-300 max-w-2xl mb-20">
        Empower your business with AI agents that optimize processes and accelerate performance.
      </p>

      <div className="relative space-y-20 md:space-y-30 w-full max-w-6xl">
        <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            01
          </p>
          <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            02
          </p>
          <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            03
          </p>
        </div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-6 md:gap-20 ${
              index % 2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
            }`}
          >
            <img
              src={step.image}
              alt={step.title}
              className="flex-1 h-auto w-full max-w-sm rounded-2xl"
            />
            <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
              <h3 className="text-2xl font-medium text-white">{step.title}</h3>
              <p className="text-gray-100 text-sm/6 line-clamp-3 pb-2">{step.description}</p>
              {step.link && (
                <a href={step.link} className="flex items-center gap-2 text-indigo-300 hover:underline">
                  Learn More
                  <ExternalLinkIcon className="size-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
