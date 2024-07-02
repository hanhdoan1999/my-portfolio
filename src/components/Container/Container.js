import React from "react";
import "./Container.scss";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const Container = ({ children,isOn,toggleSwitch }) => {
    return (
        <div className="container">
            <Header isOn={isOn} toggleSwitch={toggleSwitch}/>
            {children}
            <Footer/>
        </div>
    );
}

export default Container;
