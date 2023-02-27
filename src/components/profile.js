import Logo from '../assets/logo.png';
import '../assets/css/profile.css';
import profile from '../assets/profile.jpg';

const Profile = () => {
    return ( 
        <>
        <div className="profile-wrapper">
        <div className="product-card">
                <img src={profile} alt="" />
                <div className="product-content">
                    <h2>BarberX</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore asperiores cum ad voluptates nam numquam, accusantium, aliquid veniam repellat vitae omnis eveniet nostrum dignissimos aspernatur id cupiditate earum sequi excepturi. Dolorem sint earum, in ut consequuntur voluptate sed nesciunt!</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profile;