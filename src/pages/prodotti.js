import React from "react";
import { Page } from "../containers";
import { COOKIE_NAME, getCookie } from "../utils";

// NB use to force STATIC site PRE-LIVE
const staticSite = false;

const App = () => {
	if (!getCookie(COOKIE_NAME)) {
		if (window.location.pathname !== "/") {
			window.location.pathname = "/";
		}
	}
	return <Page />;
};

export default App;
