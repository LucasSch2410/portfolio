import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type Tab = {
  title: string;
  value: string;
};

function Tabs({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) {
  const [activeIdx, setActiveIdx] = useState<string>("");

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center relative lg:text-sm",
        containerClassName
      )}
    >
      {tabs.map((tab) => (
        <Link to={"/" + tab.value}>
        <button
          key={tab.title}
          onClick={() => setActiveIdx(tab.value)}
          className={cn(
            "relative px-4 py-2 rounded-full z-[0]",
            { "z-0": activeIdx === tab.value},
            tabClassName
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {location.pathname === "/" + tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={cn(
                "absolute inset-0 bg-neutral-800 rounded-full",
                activeTabClassName
              )}
            />
          )}
            <span className="relative block text-neutral-100">{tab.title}</span>
        </button>
        </Link>
      ))}
    </div>
  );
}

export function AnimatedTabs() {
    const tabs = [
        {
            title: "Home",
            value: "",
        },
        {
            title: "Projetos",
            value: "projects",
        },
        {
            title: "Sobre",
            value: "about",
        },
    ];

    return (
        <div className="relative flex flex-col w-full items-end justify-center">
            <Tabs tabs={tabs} containerClassName="my-5" />
        </div>
    );
}