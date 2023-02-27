import '../assets/css/card.css';
import konten1 from '../assets/konten1.jpg';
import konten2 from '../assets/konten2.jpg';
import { BsChevronDown } from "react-icons/bs";

const Konten = () => {
    return ( 
        <>
        <div className="card-container">
            <div className="card-wrapper">
                <div className="konten-card">
                    <img src={konten1} alt="" />
                    <h2>KONTENT 01</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolores illum reiciendis iste ea dignissimos, iure harum qui doloribus veniam et ipsa cumque omnis illo modi nemo perferendis officia id, dicta recusandae officiis maiores. Similique pariatur, consequuntur unde in officia voluptates, totam possimus molestiae perferendis alias, sint ex culpa explicabo.</p>
                    <a href="">Action</a>
                </div>
                <div className="konten-card">
                    <img src={konten2} alt="" />
                    <h2>KONTENT 02</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolores illum reiciendis iste ea dignissimos, iure harum qui doloribus veniam et ipsa cumque omnis illo modi nemo perferendis officia id, dicta recusandae officiis maiores. Similique pariatur, consequuntur unde in officia voluptates, totam possimus molestiae perferendis alias, sint ex culpa explicabo.</p>
                    <a href="">Action</a>
                </div>
            </div>
            <div id="arrow-down"><span><BsChevronDown /></span></div>
        </div>
        </>
     );
}
 
export default Konten;