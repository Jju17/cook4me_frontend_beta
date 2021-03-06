import React, { useContext } from "react";

import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const HeaderTW = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`flex items-center flex-col sm:flex-col
md:flex-col lg:flex-row`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const NavLinkImg = tw.img`display: inline`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between z-50`;

export const MyNavToggle = tw.button`lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300 `;

export const NavToggle = styled(MyNavToggle)((props) => [
  tw`lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300`,
  props.isOpen && tw`fixed top-10 right-10`,
]);

export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default function Header({
  roundedHeaderButton = false,
  collapseBreakpointClass = "lg",
}) {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  const isCooker = true;
  //   const [isCooker, setIsCooker] = useState(true);

  const defaultLinks = [
    <NavLinks>
      <NavLink to={ROUTES.BECOMING_COOKER}>Devenir un Cooker</NavLink>
      <NavLink to={ROUTES.ABOUT_US}>A propos</NavLink>
      <NavLink to={ROUTES.CONTACT_US}>Nous Contacter</NavLink>
      <NavLink to={ROUTES.LOGIN} tw="lg:ml-12!">
        Connexion
      </NavLink>
      <PrimaryLink
        css={roundedHeaderButton && tw`rounded-full`}
        to={ROUTES.SIGN_UP}
      >
        S'inscrire
      </PrimaryLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const logoLink = [
    <LogoLink to="/" key={1}>
      <img src={logo} alt="logo" />
      Cook4Me
    </LogoLink>,
  ];

  return (
    <HeaderTW className={"header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {user ? (
          <NavLinks>
            {isCooker ? (
              <NavLink to={ROUTES.ADMIN_COOKER}>Mes Plats</NavLink>
            ) : (
              <NavLink to={ROUTES.BECOMING_COOKER}>Devenir un Cooker</NavLink>
            )}
            <NavLink to={ROUTES.ABOUT_US}>A propos</NavLink>
            <NavLink to={ROUTES.CONTACT_US}>Nous Contacter</NavLink>
            <NavLink to={ROUTES.DASHBOARD} arial-label="Home">
              Dashboard
            </NavLink>
            <NavLink to={ROUTES.CART}>Panier</NavLink>

            <button
              className={`focus:text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 whitespace-nowrap
    font-semibold tracking-wide transition duration-300 
    pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`}
              onClick={() => {
                firebase.auth().signOut();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  firebase.auth().signOut();
                }
              }}
              to={ROUTES.WELCOME}
            >
              Sign Out
            </button>

            <NavLink to={`/p/${user.displayName}`}>
              <NavLinkImg
                className="rounded-full h-8 w-8 flex items-end"
                src={`/images/avatars/${user.displayName}.jpg`}
                alt={`${user.displayName} profile picture`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/avatars/pierre.jpg";
                }}
              />
            </NavLink>
          </NavLinks>
        ) : (
          defaultLinks
        )}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {user ? (
            <NavLinks>
              {isCooker ? (
                <NavLink to={ROUTES.ADMIN_COOKER}>Mes Plats</NavLink>
              ) : (
                <NavLink to={ROUTES.BECOMING_COOKER}>Devenir un Cooker</NavLink>
              )}
              <NavLink to={ROUTES.ABOUT_US}>A propos</NavLink>
              <NavLink to={ROUTES.CONTACT_US}>Nous Contacter</NavLink>
              <NavLink to={ROUTES.DASHBOARD} arial-label="Home">
                Dashboard
              </NavLink>
              <NavLink to={ROUTES.CART}>Panier</NavLink>

              <button
                className={`focus:text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 whitespace-nowrap
    font-semibold tracking-wide transition duration-300 
    pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`}
                onClick={() => {
                  firebase.auth().signOut();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    firebase.auth().signOut();
                  }
                }}
                to={ROUTES.WELCOME}
              >
                Sign Out
              </button>

              <NavLink to={`/p/${user.displayName}`}>
                <img
                  className="rounded-full h-8 w-8 flex items-end"
                  src={`/images/avatars/${user.displayName}.jpg`}
                  alt={`${user.displayName} profile`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/avatars/pierre.jpg";
                  }}
                />
              </NavLink>
            </NavLinks>
          ) : (
            defaultLinks
          )}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
          isOpen={showNavLinks ? true : false}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </HeaderTW>
  );
}

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
