import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

type Page = {
  name: string;
  url: string;
  index: number;
};
const homePage = {
  name: "Home",
  url: "/",
  index: 0,
};
const applyPage = {
  name: "Apply",
  url: "/apply",
  index: 1,
};
const faqPage = {
  name: "FAQ",
  url: "/faq",
  index: 2,
};
const errorPage = {
  name: "error",
  url: "/404",
  index: 3,
};

const allPagesArr: Page[] = [homePage, applyPage, faqPage, errorPage];
type allPagesObjType = {
  [index: string]: Page;
};
const allPagesObj: allPagesObjType = {
  homePage: homePage,
  applyPage: applyPage,
  faqPage: faqPage,
  errorPage: errorPage,
};
interface NavigationContextType {
  getSelectedPage: Page;
  setSelectedPage: (page: Page) => void;
  getPagesArr: Page[];
  getPagesObj: allPagesObjType;
  getSelectedPageIndex: number;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

export const NavigationContextProvider: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState<Page>(allPagesObj.homePage);

  const handleGetSelectedPageIndex = () => {
    return selectedPage.index;
  };

  const defaultContextValues = {
    getSelectedPage: selectedPage,
    setSelectedPage: setSelectedPage,
    getPagesArr: allPagesArr,
    getPagesObj: allPagesObj,
    getSelectedPageIndex: handleGetSelectedPageIndex(),
  };

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setSelectedPage(allPagesObj.homePage);
        break;
      case "/apply":
        setSelectedPage(allPagesObj.applyPage);
        break;
      case "/faq":
        setSelectedPage(allPagesObj.faqPage);
        break;
      default:
        // not a page on the navigation bar
        setSelectedPage(allPagesObj.homePage);
        break;
    }
  }, [router.asPath]);

  return (
    <NavigationContext.Provider value={defaultContextValues}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
