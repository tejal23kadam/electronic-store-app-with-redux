import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { IoClose, IoMenu } from "react-icons/io5";
import { addToCategoryFilter } from '../sliceComponent/CategoryFilterSlice';


function NavBar() {

    //state to track the active link and scroll state
    const [activeLink, setActiveLink] = useState("hero");
    const [isScrolled, setIsScrolled] = useState(false);

    const [navSections, setNavSections] = useState([]);
    const dispatch = useDispatch();

    //function to smoothly scroll to a section by its Id
    const cart = useSelector((state) => state.cart);


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
                // console.log(response.data.categories)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    // code for responsive design that shows and hides left side navbar 

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div className={click ? "main-container" : ""} onClick={() => Close()}>

            <div className='container-fluid'>

                <div id="navlist">
                    <div className=" navbar nav-container" onClick={e => e.stopPropagation()}>
                        <div className='menu-container'>
                            <div>
                                <img src={require('../../images/logo.png')} alt="no img" />
                            </div>
                            <div>
                                <ul className={click ? "nav-menu active" : "nav-menu"}>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('all')) }}><Link to="/all">all</Link></li>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} audio><Link to="/appliances">appliances</Link></li>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                    <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>
                                </ul>
                            </div>
                            <div className='cartCount'>
                                <Link to="cartData"><i className="bi bi-cart"></i></Link>
                                <span class="quantity">{cart.length}</span>
                            </div>
                            <div className="nav-icon" onClick={handleClick}>
                                <i className={click ? "bi-x" : "bi-justify"}></i>
                            </div>
                        </div>
                        <div>
                            <div className="box">
                                <input type="text" name="" placeholder='Enter Product Name' />
                                <i className="bi bi-search"></i>
                            </div>
                        </div>
                    </div>





                </div>
            </div>


        </div>

    )
}
export default NavBar 