import styled from 'styled-components'
import'../../styles/colors.css'

export const Container = styled.div`
    position:fixed;
    top:0;
    left:50%;
    transform:translateX(-50%);
    max-width:1170px;
    width:100%;
    height:120px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    transition:0.6s ease;
    background:var(--gray-extra-light);
    overflow:hidden;
    z-index:1;
    div{
        margin:0 10px;
    }
    @media only screen and (max-width:750px){
        height:70px;
        justify-content:space-between;
        flex-direction:column;
        
        nav, div{
            display:none;
            transition:2s ease;
        }
        &.show{
            height:100vh;
            nav, div{
                display:block;
            }
        }
    }
`
export const Logo = styled.div`
    position:relative;
    display:block !important;
    cursor: pointer;
    h1{
        font-size:24px;
        color:var(--orange-regular);
        text-transform:uppercase;
        &:hover{
            color:var(--orange-bold);
        }
    }
    @media only screen and (max-width:750px){
        top:35px;
        transform:translateY(-50%);
    }
`
export const Nav = styled.nav`
    width:auto;
    ul{
        li{
            display:inline;
            font-size:14px;
            margin:0 20px;
            font-weight:bold;
            color:var(--gray-regular);
            cursor: pointer;
            &:hover{
                color:var(--orange-regular);
            }
        }
    }
    @media only screen and (max-width:750px){
        ul{
            li{
                display:block;
                text-align:center;
                margin:40px 0;
            }
        }
    }
`
export const Login = styled.div`
    position:relative;
    font-size:14px;
    color:var(--orange-regular);
    text-transform:uppercase;
    font-weight:bold;
    margin:0 20px;
    cursor: pointer;
    &:hover{
        color:var(--orange-bold);
    }
    @media only screen and (max-width:750px){
        bottom:35px;
        transform:translateY(50%);
    }
`
export const Toggle = styled.button`
    position:absolute;
    top:35px;
    right:20px;
    background:none;
    transform:translateY(-50%) rotate(180deg);
    cursor: pointer;
    display:none;
    svg{
        font-size:2.8em;
        color:var(--orange-regular);
        &:hover{
            color:var(--orange-bold);
        }
    }
    @media only screen and (max-width:750px){
        display:block;
    }
`