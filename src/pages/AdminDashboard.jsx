import NavBar from "../components/NavBar";
import '../util/DashboardMain.css'

const AdminDashboard = () => {
    const salary = '12000'
    return (
        <div>
            <NavBar />
            <div className="main-content-main-page">
                <h1>Staff Management System</h1>
                <div>

                    <div className="admin-info">
                        <h2>Admin</h2>
                        <label className="label" htmlFor="total">1</label>
                    </div>
                    <div className="admin-info">
                        <h2>Employee</h2>
                        <label className="label" htmlFor="employee">2</label>
                    </div>
                    <div className="admin-info">
                        <h2>Salary</h2>
                        <label className="label" htmlFor="total">${salary}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard