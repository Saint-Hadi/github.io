import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`app-container ${isMounted ? 'mounted' : ''}`}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={10}
            outerSize={15}
            color="0, 0 ,0"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <ScrollToTop>
          <Headermain />
          <AppRoutes />
        </ScrollToTop>
      </div>
    </Router>
  );
}