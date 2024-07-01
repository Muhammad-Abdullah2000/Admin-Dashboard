import React, { useEffect } from 'react';
import './SideBar.css';
import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { BiSolidMessageSquareMinus } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login';
import img1 from '../../imgs/img1.jpg';


const SideBar = () => {

    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");

    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            <Login />

        }
        else {
            navigate("/login");

        }

        // eslint-disable-next-line
    }, [])



    return (
        <>

            <section id='SideBar'>
                <div className="top">
                    <AiFillHome id='font' />
                    <h2>Ponder Insight</h2>
                </div>

                <div className="mid">
                    <input type="text" id='txt' placeholder='Ponder Insight' />
                </div>

                <div className="lmid">
                    <div className="topone">
                        <RxDashboard id='font1' />
                        <Link to={'/dashboard'} id='h1'> <h3>Dashboard</h3></Link>
                    </div>

                    <div className="toptwo">
                        <TbReportSearch id='font2' />
                        <Link to={'/reports'} id='h1'> <h3>Create</h3></Link>

                        <div className="notification">
                            <p>2</p>
                        </div>
                    </div>

                    <div className="topthree">
                        <BsFillCartFill id='font3' />
                        <Link to={'/orders'} id='h1'><h3>Blogs</h3></Link>
                    </div>

                    <div className="topfour">
                        <IoMdAnalytics id='font4' />
                        <Link to={'/analytics'} id='h1'> <h3>Ratings</h3></Link>
                    </div>

                    <div className="topfive">
                        <BiSolidMessageSquareMinus id='font5' />
                        <Link to={'/messages'} id='h1'> <h3>Comments</h3></Link>
                    </div>

                    <div className="topsix">
                        <FiSettings id='font6' />
                        <Link to={'/settings'} id='h1'><h3>Settings</h3></Link>
                    </div>

                    <div className="topseven">
                        <BiLogOut id='font7' />
                        <h3 id='h1' onClick={handleLogout}>Logout</h3>
                    </div>


                </div>

                <div className="last">
                    <div className="img">
                        <img src={img1} alt="user img" id='img' />
                    </div>

                    <div className="user">
                        <h4>Philip Gouse</h4>
                        <p>admin</p>
                    </div>

                    <div className="arrows">
                        <MdKeyboardArrowUp id='arr' />
                        <MdKeyboardArrowDown id='arr' />
                    </div>
                </div>
            </section>

        </>
    )
}

export default SideBar