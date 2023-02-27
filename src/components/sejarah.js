import history from '../assets/history.jpg';
import '../assets/css/sejarah.css';

const Sejarah = () => {
    return ( 
        <>
        <div className="sejarah-container">
            <h2>History</h2>
            <div className="sejarah">
                <img src={history} alt="" />
                <div className="sejarah-desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quibusdam reiciendis impedit inventore, quis similique autem nesciunt non pariatur veniam cum assumenda. Laudantium deserunt libero recusandae iure, soluta totam laborum, velit dolor voluptatum accusamus rem quibusdam. Excepturi obcaecati enim blanditiis aspernatur laboriosam voluptatum corrupti. Quia saepe illo eaque ipsum inventore.</p>
                <a href="">Action</a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sejarah;