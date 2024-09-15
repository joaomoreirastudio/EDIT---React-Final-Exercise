import React, { createContext, useContext, useState } from "react";

interface TitleContextProps {
    titles: { [key: string]: string };
    setTitle: (key: string, title: string) => void;
}

const TitleContext = createContext<TitleContextProps | undefined>(undefined);

export const TitleProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [titles, setTitles] = useState<{ [key: string]: string }>({});

    const setTitle = (key: string, title: string) => {
        setTitles((prevTitles) => ({ ...prevTitles, [key]: title }));
    };

    return (
        <TitleContext.Provider value={{ titles, setTitle }}>
            {children}
        </TitleContext.Provider>
    );
};

export const useTitle = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error("useTitle must be used within a TitleProvider");
    }
    return context;
};
