"use client"
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function DataProvider({ children }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/blogs.json")
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData.blogs);
                console.log(jsonData);
            })
            .catch((error) => {
                console.error('Error fetching blogs.json:', error);
            });
    }, []);
    return (
        <Context.Provider value={[data, setData]}>{children}</Context.Provider>
    );
}

export function useDataContext() {
    return useContext(Context);
}