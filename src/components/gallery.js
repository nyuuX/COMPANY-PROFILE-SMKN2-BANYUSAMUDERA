import '../assets/css/gallery.css';
import foto from '../assets/gallery.jpg';
import foto2 from '../assets/gallery2.jpg';

const Gallery = () => {
    return ( 
        <>
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-row">
                <img src={foto} alt="" />
                <img src={foto2} alt="" />
                <img src={foto} alt="" />
            </div>
            <div className="gallery-row">
                <img src={foto2} alt="" />
                <img src={foto} alt="" />
                <img src={foto2} alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Gallery;