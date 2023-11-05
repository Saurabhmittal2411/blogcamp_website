import './drop-down.css';
import './navbar.css';
import logo from '../../images/logo.png';
import search from "../../images/search.png";
import card1 from '../../images/card1.png';
import profile from '../../images/card1.png';
import pic from '../../images/user.png';
import signup from '../../images/signup.png';
import login from '../../images/login.png';
import logout from '../../images/logout.png';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const user = localStorage.getItem('token');
    const { id } = useParams();
    const [name, setname] = useState({
        username: '',
    });
    useEffect(() => {
        // Fetch the product details for the specified ID
        axios
            .get(`http://127.0.0.1:4000/user/id/${id}`)
            .then((response) => {
                const userData = response.data.data; // Extract the data from the response
                setname(userData); // Set the product state with the extracted data
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    const userInfo = localStorage.getItem('userInfo');
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });
    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success('logout successfully ');
        window.location.reload();
    };

    return (
        <div>
            <div id="navbar">
                <div id="logo">
                    <img src={logo} alt="cannot load" />
                </div>
                <ul>
                    <li class="item"><a href="/home">HOME</a></li>
                    <li class="item"><a href="/about">ABOUT</a></li>
                    <li class="item"><a href="/contact">CONTACT</a></li>
                    <li class="item"><a href="/write">WRITE</a></li>
                </ul>
                <div class="rightnav" ref={menuRef}>
                    {
                        user ?
                            <img className="profile" src={card1} alt="not available" onClick={() => setOpen(!open)} />

                            : (
                                <ul>
                                    <li class="but"><a href="/login">Login</a></li>
                                    <li class="but"><a href="/signup">Signup </a></li>
                                </ul>
                            )}
                    <img className="searchicon" src={search} alt="not available" />
                </div>
            </div>
            {/* Dropdown */}
            <div class={`sub-menu-wrap ${open ? 'active' : 'inactive'}`}>
                <div class="sub-menu">
                    <div class="user-info">
                        <img src={profile} alt="no profile pic" title='Profile pic' />

                        <h2>{name.username}</h2>

                    </div>
                    <hr />

                    <a href={`/profile/${userInfo}`} class="sub-menu-link">
                        <img src={pic} alt="no" />
                        <p>Edit Profile</p>
                        <div>{'>'}</div>
                    </a>
                    <a href="/login" class="sub-menu-link">
                        <img src={login} alt="no" />
                        <p>Login</p>
                        <div>{'>'}</div>
                    </a>
                    <a href="/signup" class="sub-menu-link">
                        <img src={signup} alt="no" />
                        <p>Signup</p>
                        <div>{'>'}</div>
                    </a>
                    <a href="#" class="sub-menu-link" onClick={handleLogout}>
                        <img src={logout} alt="no" />
                        <p>Logout</p>
                        <div>{'>'}</div>
                    </a>

                </div>
            </div>
        </div>
    )

};
export default Navbar;
