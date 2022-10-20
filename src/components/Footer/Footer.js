import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
    box-sizing: border-box;
    padding: 0px 36px 0px 36px;
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;
    background-color: #FAAA;
`

const Sphere = styled.div`
    position: absolute;
    left: 145px;
    bottom: 310px;
    height: 91px;
    width: 91px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
`

function Footer(){

    return (
        <Bottom>
            <h2>
                Hábitos
            </h2>
            <Sphere>
                <p>Hoje</p>
                <img src="" alt="" />
            </Sphere>
            <h2>
                Histórico
            </h2>
        </Bottom>
    )
}

export default Footer;
