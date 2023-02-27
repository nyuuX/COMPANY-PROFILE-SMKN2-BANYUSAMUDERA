import Konten from "../components/card";
import UncontrolledExample from "../components/carousel";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Navbar from "../components/Navbar";
import Product from "../components/product";

const Home = () => {
    return ( 
        <>
        <Navbar/>
        <UncontrolledExample />
        <Konten />
        <Gallery />
        <Product />
        <Footer />
        </>
    );
}
 
export default Home;