import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";


const Header = ({openModal, closeModal, modalIsOpen}) => {
  // set state to open/close modal
  const [isOpen, setIsOpen] = useState(false);
  
  
  // set state to form data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Success message
  const [successMessage, setSuccessMessage] = useState(null); 
  const [registerMessage, setregisterMessage] = useState(null); 
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/formSubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      console.log(`Welcome ${data.name}!`);

      if(response.ok) {
        // Print welcome message and close modal after 3 seconds
        setSuccessMessage(`Welcome back ${data.name}`)
        setregisterMessage(`Please check your email, your free bets are on the way!`)
        setTimeout(() => setIsOpen(false), 2000) 
        setTimeout(() => setSuccessMessage(''), 2000)
        setTimeout(() => closeModal(), 4000) 
        setTimeout(() => setregisterMessage(''), 4000)
      }
    } catch(error) {
      console.error(error)
    }
    

    setUsername("");
    setPassword("");
    setName("");
  };

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <Link href="/">
        <img src="logo.png" className="logo" alt="" />
        </Link>
      </div>
      <div className="CTA">
        <button className="login" onClick={() => setIsOpen(true)}>
          Login
        </button>
        <Modal
          className="modal"
          overlayClassName="Overlay"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
        >
          <div className="modalContainer">
            <h3 className="loginHeader">Login</h3>
            <p className="newCustomer">
              New customer? &nbsp;
              <span className="register" onClick={openModal}>
                Register here
                </span>
            </p>
            <hr />
            <form className="loginForm" onSubmit={handleSubmit}>
              <label>Username</label> <br />
              <input
                type="email"
                id="username"
                value={username}
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label>Password</label> <br />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>

              <Link className="forgotPassword" href="/register">
                <p>Forgot Username/Password</p>
              </Link>
            </form>
            <div className="closeModal" onClick={() => setIsOpen(false)}>
              &#x2715;
            </div>
            {successMessage && <p className="welcomeMessage">{successMessage}</p>}
          </div>
        </Modal>
        <button className="signup" onClick={openModal}>
          Sign up
        </button>
        <Modal
          className="modal"
          overlayClassName="Overlay"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <div className="modalContainer">
            <h3 className="loginHeader">Register Account</h3>
            <p className="newCustomer">
              Join today and get 100% first deposit match as a Free Bet or as a
              Casino Games Bonus.
            </p>
            <hr />
            <form className="loginForm" onSubmit={handleSubmit}>
              <label>Name</label> <br />
              <input
                type="text"
                id="name"
                value={name}
                placeholder="First & Last name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label> <br />
              <input
                type="email"
                id="username"
                value={username}
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label>Password</label> <br />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">
                Create Account
              </button>
            </form>
            <div className="closeModal" onClick={closeModal}>
              &#x2715;
            </div>
            {registerMessage && <p className="welcomeMessage">{registerMessage}</p>}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
