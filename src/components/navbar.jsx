import React from 'react'
import styled from 'styled-components'
import { FaBell, FaSearch } from 'react-icons/fa';
import { MdOutlineNotifications, MdSearch } from 'react-icons/md';

function Navbar() {
    return (
        <Nav>
            <TopLeft>
                <IconCard>
                    <MdSearch size={15} />
                </IconCard>
                <IconCard>
                    <MdOutlineNotifications size={15} />
                </IconCard>
                <Date>De, 28 NOV 2022</Date>
            </TopLeft>

            <Bottom>
                <BottomLeft>
                    <h2>Folajimi S.</h2>
                    <p style={{
                        marginTop: '20px',
                        marginLeft: '15px',
                        fontWeight: 600
                    }}>The challenger</p>
                </BottomLeft>
                <BottomRight>
                    <p>Authenticate</p>
                </BottomRight>
            </Bottom>
        </Nav>
    )
}


const Nav = styled.nav`
    padding: 20px;
    padding-left: 10%;
    padding-right: 5%;
    height: 70px;
    background: #fff;
    display: flex;
    flex-direction: column;
    /* flex-direction: row; */
`
const TopLeft = styled.div`
    display: flex;
    margin-left: auto;
    justify-self: flex-end;
    align-items: center;
 `



const IconCard = styled.div`
cursor: pointer;
    color: #149ba2;
    height:30px;
    width:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#eaeaea;
    margin-right: 15px;
    border-radius:5px;

`
const Date = styled.h1`
font-weight: 900;
font-size: 17px;
color:#106c71
`
const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

const BottomLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    color:#106c71
`

const BottomRight = styled.div`
background: #d91e50;
cursor: pointer;
color:#fff;
align-self: center;
display: flex;
align-items: center;
justify-content: center;
padding-right: 25px;
padding-left: 25px;
border-radius: 5px;

&:active{
  background: #981236;
  
}
`
export default Navbar