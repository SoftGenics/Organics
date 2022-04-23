import React from 'react'
import {
    Header,
    Container,
    HeaderMeta,
    Logo,
    Img,
    HeaderMetaRight,
    Button, 
    MobileIcon, 
    HeaderNav, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavRoute
} from './HomeNavbarElement.js';//importing its style
import logo from '../images/Finallogo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import {animateScroll as scroll} from 'react-scroll';
import { bool, func } from 'prop-types';

const Nav = ({ open, setOpen, show, setShow }) => { //passing or defining values here

    const toggleHome = () => {//for scrolling to the top when logo is clicked
        scroll.scrollToTop();
    }

    return (
        <>
            <Header>
                <Container>
                    <HeaderMeta>  
                        <MobileIcon open={open} onClick={() => setOpen(!open)}> {/* triggering open function */} 
                            <MenuIcon />
                        </MobileIcon>
                        <Logo>
                            <Img src={logo} onClick={toggleHome} alt='logo' />
                        </Logo>
                        <HeaderMetaRight>
                            <Button>
                                <SearchOutlinedIcon />
                            </Button>
                            <Button show={show} onClick={() => setShow(!show)}>
                                <PermIdentityOutlinedIcon />
                            </Button>
                            <Button>
                                <ShoppingCartOutlinedIcon />
                            </Button>
                        </HeaderMetaRight>
                    </HeaderMeta>
                </Container>
                <HeaderNav>
                    <NavMenu>
                        <NavItem>
                            <NavRoute to='shopall'>Shop All </NavRoute>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='category'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Shop By Category </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='concern'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Shop By Concern</NavLinks>
                        </NavItem>   
                        <NavItem>
                            <NavLinks to= 'about'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            > About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavRoute to= 'contact'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            > Contact </NavRoute>
                        </NavItem>  
                    </NavMenu>
                </HeaderNav>
            </Header>
        </>
    );
}
Nav.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
Nav.propTypes = {
    show: bool.isRequired,
    setShow: func.isRequired,
};
export default Nav;