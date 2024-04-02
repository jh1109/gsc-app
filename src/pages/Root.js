import { Outlet } from "react-router";
import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default RootLayout;