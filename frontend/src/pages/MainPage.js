import MainPageComp from "../components/MainPageComp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <MainPageComp />
            <Footer />
        </div>
    );
};

export default MainPage;