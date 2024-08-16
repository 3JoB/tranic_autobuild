import type { ReactElement } from "react";

import PaperIcon from "@/assets/brand/vine.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import FeatureCard from "@/components/data/FeatureCard";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";
import type { HangarProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const PaperHome = ({ project }: HangarProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Vine"
        description="Subarea multithread, single server. Bring more extensions on ShreddedPaper."
        keywords={[
          "tranicmc",
          "tranic",
          "multithread",
          "shreddedpaper",
          "purpur",
          "server",
          "minecraft",
          "performance",
          "spigot",
          "fork",
        ]}
      />
      <SoftwareHeader
        id="vine"
        name="Vine"
        versionGroup={project.latestVersionGroup}
        icon={PaperIcon}
        header={
          <>
            Subarea Multi-thread
            <br />
            <span className="text-blue-500">single Minecraft Server</span>
          </>
        }
        description="Bring more extensions, optimizations, and repair on ShreddedPaper."
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            Why Vine?
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label="It's stupidly fast"
              description="Perform true multi-threaded collaborative computing on a single server. It can process tasks at a much faster speed than traditional single-threaded servers."
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label="Is Vine for you?"
              description="Vine is suitable for small and medium-sized servers with a relatively concentrated number of players. It is still experimental, so please pay attention to updates in time."
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label="Is it suitable for the existing plugin ecology??"
              description="My answer is, no."
            />
          </div>
        </div>
      </section>
    </>
  );
};

PaperHome.softwareProps = {
  github: "https://github.com/LevelTranic/Vine",
};

export default PaperHome;

export const getStaticProps = getProjectProps("vine");
