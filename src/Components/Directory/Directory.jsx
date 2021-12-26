import React from "react";
import { useSelector } from "react-redux";

import DirectoryCard from "./DirectoryCard";

import "./Directory.scss";

function Directory(props) {
  const directories = useSelector((state) => state.clothes);

  const mainDirectory = directories.filter(
    (item) => item.title === "womens" || item.title === "mens"
  );
  const womensDirectory = mainDirectory[0];
  const mensDirectory = mainDirectory[1];

  const accessoriesDirectory = directories.filter(
    (item) => item.title !== "womens" && item.title !== "mens"
  );
  const jacketsDirectory = accessoriesDirectory[0];
  const hatsDirectory = accessoriesDirectory[1];
  const sneakersDirectory = accessoriesDirectory[2];

  if (directories.length === 0) {
    return "Hello!";
  }
  return (
    <div className="directory__container">
      <div className="main__categories">
        <DirectoryCard
          title={womensDirectory.title}
          img={womensDirectory.directoryImg}
          additionalClass={"directory__card_left"}
        />
        <DirectoryCard
          title={mensDirectory.title}
          img={mensDirectory.directoryImg}
          additionalClass={"directory__card_right"}
        />
      </div>
      <div className="accessories__categories">
        <DirectoryCard
          title={jacketsDirectory.title}
          img={jacketsDirectory.directoryImg}
          additionalClass={"accessories__card_first"}
        />
        <DirectoryCard
          title={hatsDirectory.title}
          img={hatsDirectory.directoryImg}
          additionalClass={"accessories__card_second"}
        />
        <DirectoryCard
          title={sneakersDirectory.title}
          img={sneakersDirectory.directoryImg}
          additionalClass={"accessories__card_third"}
        />
      </div>
    </div>
  );
}

export default Directory;
