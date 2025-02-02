import { Constants, Developer } from "./constants";

type DeveloperShortName = (typeof Constants.DEVELOPERS)[number]["shortName"];

const getDeveloperData = (names: DeveloperShortName[]): Developer[] | any[] => {
  return (
    names.map((name) =>
      Constants.DEVELOPERS.find((c) => c?.shortName === name)
    )
  );
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const Utils = { getDeveloperData, scrollToTop };
