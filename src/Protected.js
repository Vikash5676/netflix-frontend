import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import verifyToken from './verifyToken'
import Navbar from './components/Navbar/Navbar';

function Protected({ component }) {
    const [scroll, setScroll] = useState(0);

    const navigate = useNavigate()
    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if (!token) {
            navigate("/signup")
        } else {
            verifyToken(token).then((res) => {
                if (!res.message) {
                    navigate("/signup");
                }
            })
        }
    }, [])

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScroll(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        < ><Navbar scroll={scroll} />{component}</>
    )
}

export default Protected