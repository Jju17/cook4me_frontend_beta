import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

import logo from "../../images/logo.svg";

const HeaderTW = tw.header`
    flex justify-between my-0
`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLinks = tw.div`text-center flex items-center `;

export const NavLink = tw(Link)`
    text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 whitespace-nowrap
    font-semibold tracking-wide transition duration-300 
    pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500 
  `;
export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-12 mr-4`}
  }
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export default function Header({ roundedHeaderButton = false }) {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  console.log("user : ", user);

  function handleImgError() {
    return `/images/avatars/pierre.jpg`;
  }

  return (
    <HeaderTW>
      <LogoLink to="/">
        <img src={logo} alt="logo" />
        Cook4Me
      </LogoLink>

      {user ? (
        <NavLinks>
          <NavLink to={ROUTES.BECOMING_COOKER}>Devenir un Cooker</NavLink>
          <NavLink to={ROUTES.ABOUT_US}>A propos</NavLink>
          <NavLink to={ROUTES.CONTACT_US}>Nous Contacter</NavLink>
          <NavLink to={ROUTES.DASHBOARD} arial-label="Home">
            Dashboard
          </NavLink>
          <NavLink to={ROUTES.DASHBOARD}>Panier</NavLink>

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
              alt={`${user.displayName} profile picture`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/avatars/pierre.jpg";
              }}
            />
          </NavLink>
        </NavLinks>
      ) : (
        <NavLinks>
          <NavLink to={ROUTES.BECOMING_COOKER}>Devenir un Cooker</NavLink>
          <NavLink to={ROUTES.ABOUT_US}>A propos</NavLink>
          <NavLink to={ROUTES.CONTACT_US}>Nous Contacter</NavLink>
          <NavLink to={ROUTES.LOGIN} tw="lg:ml-12!">
            Connexion
          </NavLink>
          <PrimaryLink
            css={roundedHeaderButton && tw`rounded-full`}
            href={ROUTES.SIGN_UP}
          >
            S'inscrire
          </PrimaryLink>
        </NavLinks>
      )}
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
