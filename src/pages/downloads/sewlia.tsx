import type { ReactElement } from "react";

import PaperIcon from "@/assets/brand/logo.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const PaperDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Sewlia Downloads"
        description="Download Sewlia, our Minecraft server software offering unrivaled performance and stability."
        keywords={[
          "tranic",
          "minecraft",
          "performance",
          "sewlia",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="sewlia"
        project={project}
        icon={PaperIcon}
        description="Download Sewlia, our Minecraft server software offering unrivaled performance and stability."
        experimentalWarning="Download experimental builds of Sewlia, our Minecraft server software offering unrivaled performance and stability. Proceed with caution!"
      />
    </>
  );
};

export default PaperDownloads;

export const getStaticProps = getProjectProps("sewlia");
