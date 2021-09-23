import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import tw from "twin.macro";

import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
import * as ROUTES from "./constants/routes";

const StyledDiv = tw.div`font-display min-h-screen p-8 overflow-hidden`;

const Dashboard = lazy(() => import("./pages/dashboard"));
const Welcome = lazy(() => import("./pages/welcome"));
const ContactUs = lazy(() => import("./pages/contact-us"));
const AboutUs = lazy(() => import("./pages/about-us"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  const { user } = useAuthListener();

  return (
    <StyledDiv>
      <UserContext.Provider value={{ user }}>
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.SIGN_UP} component={SignUp} />
              <Route path={ROUTES.CONTACT_US} component={ContactUs} />
              <Route path={ROUTES.ABOUT_US} component={AboutUs} />
              <Route path={ROUTES.WELCOME} component={Welcome} />
              <Route path={ROUTES.PROFILE} component={Profile} />
              <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </UserContext.Provider>
    </StyledDiv>
  );
}
