import '../assets/css/product.css'
import produk1 from '../assets/produk.jpg';
import produk2 from '../assets/product1.jpg';
import produk3 from '../assets/product2.jpg';
import produk4 from '../assets/produk3.jpg';
import { BsChevronDown } from "react-icons/bs";

const Product = () => {
    return ( 
        <>
        <div className="product-container">
                <div className="product-row">
                    <div className="product-card">
                        <img src={produk1} alt="" />
                        <div className="product-content">
                            <h2>Produk 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore asperiores cum ad voluptates nam numquam, accusantium, aliquid veniam repellat vitae omnis eveniet nostrum dignissimos aspernatur id cupiditate earum sequi excepturi. Dolorem sint earum, in ut consequuntur voluptate sed nesciunt!</p>
                            <a href="">Action</a>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={produk2} alt="" />
                        <div className="product-content">
                            <h2>Produk 2</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore asperiores cum ad voluptates nam numquam, accusantium, aliquid veniam repellat vitae omnis eveniet nostrum dignissimos aspernatur id cupiditate earum sequi excepturi. Dolorem sint earum, in ut consequuntur voluptate sed nesciunt!</p>
                            <a href="">Action</a>
                        </div>
                    </div>
                </div>
                <div className="product-row">
                    <div className="product-card">
                        <img src={produk3} alt="" />
                        <div className="product-content">
                            <h2>Produk 3</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore asperiores cum ad voluptates nam numquam, accusantium, aliquid veniam repellat vitae omnis eveniet nostrum dignissimos aspernatur id cupiditate earum sequi excepturi. Dolorem sint earum, in ut consequuntur voluptate sed nesciunt!</p>
                            <a href="">Action</a>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={produk4} alt="" />
                        <div className="product-content">
                            <h2>Produk 4</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore asperiores cum ad voluptates nam numquam, accusantium, aliquid veniam repellat vitae omnis eveniet nostrum dignissimos aspernatur id cupiditate earum sequi excepturi. Dolorem sint earum, in ut consequuntur voluptate sed nesciunt!</p>
                            <a href="">Action</a>
                        </div>
                    </div>
                </div>
                <div id="arrow-down"><span><BsChevronDown /></span></div>
            </div>
        </>
     );
}
 
export default Product;