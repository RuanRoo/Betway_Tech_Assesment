import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";

const Header = () => {
  // set state to open/close modal
  const [isOpen, setIsOpen] = useState(false);

  // set state to form data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/formSubmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(`Welcome ${data.name}`);

    setUsername('')
    setPassword('')
  };

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src="logo.png" className="logo" alt="" />
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
            <p>
              New customer? &nbsp;
              <Link className="register" href="/register">
                 Register here
              </Link>
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
                minlength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
            <div className="closeModal" onClick={() => setIsOpen(false)}>
              &#x2715;
            </div>
          </div>
        </Modal>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
