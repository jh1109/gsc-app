import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/layout/ScrollToTop";

function RootLayout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;