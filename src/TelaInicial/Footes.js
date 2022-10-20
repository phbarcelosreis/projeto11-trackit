import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;
    background-color: #FAAA;
`

const Sphere = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 100px;
`

function Footer(){

    return (
        <Bottom>
            <h2>
                Hábitos
            </h2>
            <Sphere>
                Hoje
            </Sphere>
            <h2>
                Histórico
            </h2>
        </Bottom>
    )
}

export default Footer;
