import { createContext, ReactNode, useContext, useState } from "react";

type ScrollContextType = {
  scrollY: number;
  setScrollY: (y: number) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  setScrollY: () => {},
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollY(): number {
  return useContext(ScrollContext).scrollY;
}

export function useSetScrollY(): (y: number) => void {
  return useContext(ScrollContext).setScrollY;
}
