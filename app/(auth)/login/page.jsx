import React from 'react';

const Login = () => {
    return (
        <div className="container" style={{
            height: " 80vh",
            display: " flex",
            justifyContent: " center",
            alignItems: " center",
            flexDirection:"column"
        }}>
            <h1 style={{marginBottom:"20px"}}>
                Login form
            </h1>
            <form>
                <div className="input-group" style={{marginBottom:"20px"}}>
                    <span className="rounded-2" id="sizing-addon2">username</span>
                    <input type="text" className="form-control rounded" placeholder="Username" aria-describedby="sizing-addon2" />
                </div>
                <div className="input-group" style={{marginBottom:"20px"}}>
                    <span className="rounded" id="sizing-addon2">password</span>
                    <input type="password" className="form-control rounded" placeholder="Password" aria-describedby="sizing-addon2" />
                </div>

                <div style={{textAlign:"center"}}>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;