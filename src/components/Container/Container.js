import React from "react";
import "./Container.scss";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const Container = ({ children }) => {
    return (
        <div className="container">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default Container;
