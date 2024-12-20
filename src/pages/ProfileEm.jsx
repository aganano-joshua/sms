import NavBar from '../components/NavBar'
import '../util/Profile.css'

const Profile = ({name, email, gender, role}) => {
    return (
        <div style={{ height: '100vh' }}>
            <div className="main-content-main-page" style={{paddingLeft: '0'}}>
                <h1>Staff Management System</h1>
                <div className="profile-card">
                    <div>

                    <div className="image-profile">AJ</div>
                    <div className="profile-details">
                        <ul>
                            <li>Name: {name}</li>
                            <li>Gender: {gender}</li>
                            <li>Email: {email}</li>
                            <li>Gender: {role}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile