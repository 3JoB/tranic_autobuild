import type { NextPage } from "next";

import FoliaIcon from "@/assets/brand/logo.svg";
import PaperIcon from "@/assets/brand/vine.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title="Downloads"
        description="Find downloads for our software – including Mars, Vine and LevelBukkit."
        keywords={["tranic", "minecraft", "performance", "downloads"]}
      />
      <header className="max-w-4xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          Downloads
        </h1>
        <p className="text-xl text-center mb-6">
          {"Select the software you want to download."}
        </p>
        <h2 className="text-2xl text-center font-medium mt-4">
          Minecraft Server Software
        </h2>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="vine"
            name="Vine"
            icon={PaperIcon}
            description="Paper is a Minecraft game server, designed to greatly improve performance and offer more advanced features and API."
          />
          <SoftwarePreview
            id="levelbukkit"
            name="LevelBukkit"
            icon={FoliaIcon}
            description="Folia is a new fork of Paper that adds regionized multithreading to the server. Access to Folia builds isn't currently available."
          />
        </div>
        <h2 className="text-2xl text-center font-medium mt-4">
          Infrastructure Software
        </h2>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4"></div>
      </header>
    </>
  );
};

export default Downloads;
