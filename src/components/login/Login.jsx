import React, { useState } from "react";
import users from "./../../data/user.json";
import { useNavigate } from "react-router-dom";
import RfidLogo from "./../../assets/img/rfidXNCI.png";
import Hitachi from "./../../assets/img/hitachi.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLoading(true);

    e.preventDefault();
    const user = users.user.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setLoading(false);
      localStorage.setItem("token", true);
      navigate("/report/overview");
      window.location.reload();
    } else {
      setLoading(false);
      setEmail("");
      setPassword("");
      alert("Username atau Password anda salah");
    }
  };

  return (
    <div class="row">
      <div class="col-md-7 d-none d-md-block">
        <div
          className="overflow-hidden img-fluid"
          style={{
            backgroundImage: `url(${Hitachi})`,
            backgroundSize: "cover",
            maxWidth: "100%",
            height: "100vh",
          }}
        ></div>
      </div>
      <div class="col-md-5 bg-white d-flex justify-content-center">
        <div className="login-page bg-white">
          <div className="login-box">
            <div className="">
              <div className=" text-center">
                <a href="#" className="h3">
                  RFID Manajemen Aset
                </a>
              </div>
              <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form onSubmit={handleLogin}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                    </div>
                    <div className="col-4">
                      {loading ? (
                        <button
                          type="submit"
                          className="btn btn-default btn-block"
                        >
                          Loading ...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign In
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="card-footer mt-3">
                    <div class="d-flex justify-content-center">
                      <img src={RfidLogo} alt="logo-rfid" width="70%" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
