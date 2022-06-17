import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
interface NavigationContextType {
  selected: number;
  setSelected: (num: number) => void;
}
const NavigationContext = createContext<NavigationContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

export const NavigationContextProvider: React.FC<Props> = (props: Props) => {
  const [selected, setSelected] = useState(0);
  const defaultContextValues = {
    selected,
    setSelected,
  };
  const router = useRouter();
  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setSelected(0);
        break;
      case "/about":
        setSelected(1);
        break;
      case "/roadmap":
        setSelected(2);
        break;
      case "/pricing":
        setSelected(3);
        break;
      case "/contact":
        setSelected(4);
        break;
      case "/signup":
        setSelected(5);
        break;
      case "/signin":
        setSelected(6);
        break;
      default:
        // not a page on the navigation bar
        setSelected(-1);
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
