import React, { useState, useContext } from 'react';
import { Container, Login, Logo, Nav, Toggle } from './styles';
import { MdMenu, MdClose } from 'react-icons/md'

import { Context } from '../../context/appContext'

import history from '../../history'

function Menu() {
    const { authenticated } = useContext(Context)
    const [ show, setShow ] = useState(false);
    function showMenu(){
        show ? setShow(false) : setShow(true);
    }
    function linkMenu(addr){
        history.push(addr)
        setShow(false);
    }
    function ReturnStatusAuthenticated() {
            return  authenticated ? 
                    <div>e nada</div> : 
                    <span>logar/cadastrar</span>
    }
    return (
        <Container className={ show ? 'show' : '' }>
            <Logo>
                <h1>tinpet</h1>
            </Logo>
            <Nav>
                <ul>
                    <li onClick={()=>{linkMenu('/')}}>Home</li>
                    <li onClick={()=>{linkMenu('/animal')}}>Animais</li>
                    <li onClick={()=>{linkMenu('/sobre')}}>Sobre</li>
                </ul>
            </Nav>
            <Login>
                <ReturnStatusAuthenticated />
            </Login>
            <Toggle onClick={showMenu}>
                { show ? <MdClose /> : <MdMenu /> }
            </Toggle>
      </Container>
  );
}

export default Menu;