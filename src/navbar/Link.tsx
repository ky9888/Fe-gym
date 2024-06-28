import { SelectedPage } from "@/shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
function removeDiacritics(str:string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage =removeDiacritics(page).toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-red-500" : ""}
        transition duration-500 hover:text-red-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
