import '../assets/css/textarea.css';
import { FiSend } from "react-icons/fi";


const Textarea = () => {
    return ( 
        <>
        <div className="textarea-container">
            <h2>Send a Message</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit harum laudantium voluptatem sint quam quis! Velit perspiciatis laudantium facere repellendus quas animi reprehenderit exercitationem soluta quia mollitia. Quas, beatae.</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="send">
                <a href="">Send <FiSend/></a>
            </div>
        </div>
        </>
     );
}
 
export default Textarea;