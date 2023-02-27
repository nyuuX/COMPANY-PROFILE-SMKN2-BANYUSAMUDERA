import '../assets/css/team.css'
import produk1 from '../assets/product1.jpg';
import pfp from '../assets/zack.jpg'
import pfp1 from '../assets/ayo.jpg'
import pfp2 from '../assets/luis.jpg'
import pfp3 from '../assets/mata4.jpg'
import pfp4 from '../assets/derik.jpg'
import pfp5 from '../assets/fatha.jpg'

const Team = () => {
    return ( 
        <>
        <div className="team-wrapper">
            <h2>Our Team</h2>
            <div className="team-row">
                <div className="team-card">
                    <img src={pfp1} alt="" />
                    <div className="team-desc">
                        <h2>Don</h2>
                        <p>Front end dev</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp2} alt="" />
                    <div className="team-desc">
                        <h2>Derik</h2>
                        <p>Front end dev</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp3} alt="" />
                    <div className="team-desc">
                        <h2>Ava</h2>
                        <p>Front end dev</p>
                    </div>
                </div>
            </div>
            <div className="team-row">
                <div className="team-card">
                    <img src={pfp4} alt="" />
                    <div className="team-desc">
                        <h2>Paul</h2>
                        <p>Front end dev</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp5} alt="" />
                    <div className="team-desc">
                        <h2>Eliza</h2>
                        <p>Front end dev</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={pfp} alt="" />
                    <div className="team-desc">
                        <h2>Zack</h2>
                        <p>Front end dev</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Team;