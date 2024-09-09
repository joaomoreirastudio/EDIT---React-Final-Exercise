import {
    NavbarContainer,
    NavbarMenu,
    NavBarLogo,
    NavBarLogoImg,
    NavBarListContainer,
    NavBarList,
    HamburgerContainer,
    NavbarMenuDesktop,
} from "./NavBar.styled.js";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { FaChevronDown } from "react-icons/fa6";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <NavbarContainer>
                <NavBarLogo>
                    <NavBarLogoImg src={Logo} />
                </NavBarLogo>
                <NavbarMenuDesktop>
                    <NavBarListContainer>
                        <NavBarList>
                            Seating <FaChevronDown />
                        </NavBarList>
                        <NavBarList>
                            Living Room
                            <FaChevronDown />
                        </NavBarList>
                        <NavBarList>
                            Outdoor
                            <FaChevronDown />
                        </NavBarList>
                        <NavBarList>
                            Bedroom
                            <FaChevronDown />
                        </NavBarList>
                        <NavBarList>
                            Storage
                            <FaChevronDown />
                        </NavBarList>
                    </NavBarListContainer>
                </NavbarMenuDesktop>
                <HamburgerContainer>
                    <Hamburger
                        toggled={menuOpen}
                        toggle={handleHamburgerClick}
                    />
                </HamburgerContainer>
            </NavbarContainer>
            <NavbarMenu>
                {menuOpen && (
                    <NavBarListContainer>
                        <NavBarList>Seating</NavBarList>
                        <NavBarList>Living Room</NavBarList>
                        <NavBarList>Outdoor</NavBarList>
                        <NavBarList>Bedroom</NavBarList>
                        <NavBarList>Storage</NavBarList>
                    </NavBarListContainer>
                )}
            </NavbarMenu>
        </>
    );
};

export default NavBar;
