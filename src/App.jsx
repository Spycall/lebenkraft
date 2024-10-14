import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Services from "./pages/Services";
import Imprints from "./pages/Imprints";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Layout from "./layout/Layout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <AboutUs />,
            },
            {
                path: "contact",
                element: <ContactUs />,
            },
            {
                path: "career",
                element: <Career />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "imprints",
                element: <Imprints />,
            },
            {
                path: "private",
                element: <PrivacyPolicy />,
            },
        ],
    },
]);
const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
