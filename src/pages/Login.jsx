import '../util/Login.css'

const Login = () => {
    return (
        <div className='form-container' style={{height: '100vh'}}>
            <form className='form'>
                <h1>SMS</h1>
                <div className='input-container'>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className='input-container'>
                    <label htmlFor="email">Password</label>
                    <input type="password" placeholder='Enter your password' />
                </div>
                <input type="submit" value='Login' className='form-btn' style={{height: '3rem'}}/>
            </form>
        </div>
    )
}

export default Login