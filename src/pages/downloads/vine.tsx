import type { ReactElement } from "react";

import PaperIcon from "@/assets/brand/vine.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const PaperDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Vine Downloads"
        description="Download Vine, our Minecraft server software offering unrivaled performance and stability."
        keywords={[
          "tranic",
          "minecraft",
          "performance",
          "vine",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="vine"
        project={project}
        icon={PaperIcon}
        description="Download Vine, our Minecraft server software offering unrivaled performance and stability."
        experimentalWarning="Download experimental builds of Vine, our Minecraft server software offering unrivaled performance and stability. Proceed with caution!"
      />
    </>
  );
};

export default PaperDownloads;

export const getStaticProps = getProjectProps("vine");
