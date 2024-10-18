import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar() {

    //state to track the active link and scroll state
    const [activeLink, setActiveLink] = useState("hero");
    const [isScrolled, setIsScrolled] = useState(false);
    const [navSections, setNavSections] = useState([]);

    //function to smoothly scroll to a section by its Id

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            //adjust margin top value ad needed
            const marginTop = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
        }
    }
    //map an array of object to a single dimantion array for section name
    const newArraySecName = navSections.map((section) => (section.secName))

    //function to detrmine the active section while scrolling 
    const determineActiveSection = () => {
        for (let i = newArraySecName.length - 1; i >= 0; i--) {
            const section = document.getElementById(newArraySecName[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    //set active link
                    setActiveLink(newArraySecName[i]);
                    break;
                }
            }
        }
    }
    useEffect(() => {
        axios.get("https://fakestoreapi.in/api/products/category")
            .then(response => {
                setNavSections(response.data.categories);
                console.log(response.data.categories)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    // code for responsive design that shows and hides left side navbar 

    const [isOpen, setIsOpen] = useState(false);
    const [showHide, setShowHide] = useState("header");
    const toggle = () => {
        setIsOpen(!isOpen);
        !isOpen ? setShowHide("header") : setShowHide("leftZero");
        showHide !== "header" ? setShowHide("header") : setShowHide("leftZero");
    }
    return (
        <div id="header" className="header dark-background d-flex flex-column">
            <i className="headerToggle d-xl-none " onClick={toggle}>
                <span className={isOpen ? 'bi bi-x' : 'bi bi-list'}></span>
            </i>
            <div className={showHide}>
                <div className='container'>
                    <div className="box">
                        <input type="text" name="" />
                        <i className="bi bi-search"></i>
                    </div>
                    <div className='navmenu'>
                        <div>
                            <nav>
                                <ul>
                                    {/* {navSections.map((section, i) => (
                                        <li key={i} onClick={() => scrollToSection(section.secName)}>
                                            <Link to="/" className={activeLink === section.secName ? "active" : ""}>{section}</Link>
                                        </li>
                                    ))} */}
                                    <li><Link to="/all">all</Link></li>  
                                    <li><Link to="/tv">tv</Link></li>
                                    <li><Link to="/audio">audio</Link></li>
                                    <li><Link to="/laptop">laptop</Link></li>
                                    <li><Link to="/mobile">mobile</Link></li>
                                    <li><Link to="/gaming">gaming</Link></li>
                                    <li><Link to="/appliances">appliances</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <i className="bi bi-cart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar 