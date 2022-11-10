import React, {useState, useEffect }from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const BackToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
    };

    return (
        <TopToBtm>
            {" "}
            {showTopBtn && (
            <Icon>
            <FaArrowCircleUp size={50} onClick={goToTop}/>
            </Icon>    
            )}{" "}
        </TopToBtm>
    )
};

export default BackToTop;

const TopToBtm = styled.div`
    position: relative;
`

const Icon = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 20;
    color: #F4C430;
    cursor: pointer;
    &:hover {
        color: darkgray;
    };
`