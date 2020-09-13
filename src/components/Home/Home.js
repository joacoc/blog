import React from "react";
import { Link, Route, Switch, useLocation, useHistory } from "react-router-dom";
import { routedPages } from "../Pages";

export default function Home() {
    const { pathname } = useLocation();
    const history = useHistory();

    // Default Page (Last one)
    const DefaultPage = routedPages[0].page;

    // Route Pages
    const routesByKey = {};
    const routes = routedPages.map((route, index) => {
        const { path, page: Page } = route;
        routesByKey[path] = {
            Page,
            pageNumber: index
        };
        return (
            <Route key={path} path={path}>
                <Page />
            </Route>
        )
    });

    // Work with the selected page
    const pageSelected = routesByKey[pathname];
    let pageNumber = 0;

    if (pageSelected) {
        pageNumber = pageSelected.pageNumber;
    } else {
        if (pathname !== "/") {
            // If there is none redirect to the home ("/");
            history.push("/");
        }
    }

    console.log(pageNumber);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-right mt-10 mb-10 font-light">
                    <Link to="/about">
                        About
                    </Link>
                </div>
                <div>
                    <Switch>
                        {/* Routes */}
                        {routes}
                        {/* Default Route */}
                        <Route key={"default"} path={"/"}>
                            <DefaultPage />
                        </Route>
                    </Switch>
                    {/* Navigation Links */}
                    <div id="nav-links" className={"pb-10"}>
                        <div className={"float-left"}>
                            {(pageNumber > 0) ? (
                                <Link to={routedPages[pageNumber - 1].path}>
                                    Back
                                </Link>
                            ) : undefined }
                        </div>
                        <div className={"float-right"}>
                            {(pageNumber < routedPages.length - 1) ? (
                                <Link to={routedPages[pageNumber + 1].path}>
                                    Next
                                </Link>
                            ) : undefined }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}