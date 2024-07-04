import React, { useEffect, useState } from "react";
import "./Container.scss";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const Container = ({ children}) => {
const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'app dark-mode' : 'app'}>
            <div className="container">
                <Header isOn={darkMode} toggleSwitch={toggleDarkMode}/>
                {children}
                <Footer/>
            </div>
        </div>
    );
}

export default Container;
