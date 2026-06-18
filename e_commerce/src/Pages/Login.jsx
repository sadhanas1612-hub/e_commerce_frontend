import { Link, useNavigate } from 'react-router-dom';
function Login() {  
    const navigate = useNavigate();
    async function loginExecution() {

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(!username || !password){
       //(username === '' || password === '') {
            alert("Please fill in all fields");
            return;
        }
         try { //backend connection 
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},   
            body: JSON.stringify({ username:username, password:password })
        });
        const data = await response.json();
        console.log(data);

            if(data.message === 'Login successful'){    
                alert('Login successful')
            navigate("/");
            }
            else {
                alert('Invalid username or password');
            }
        }
        catch (error) {
            alert('unable to connect to the server');
        }
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");

        localStorage.setItem("isLoggedIn", "true");
localStorage.setItem(
"user",
JSON.stringify(response.data)
);
    }

    return (
        <>
        <div className="login-container">
            <h1>Login</h1>
            <label htmlFor="name">user name:</label> 
            <input type="text" id="username" placeholder="Enter username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" />
            <br />
            <br />

        <button type="submit" className="btn btn-primary"
            onClick={loginExecution}>Login</button>

                <Link to="/Signup">Don't have an account? Signup</Link>
        </div>
        </>
    )
}
<h1>Login</h1>

export default Login;