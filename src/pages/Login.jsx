import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let handleLogin = async () => {
    try {
      if (username.trim() == "") {
        alert("Username cannot be empty");
        return;
      }
      if (password.trim() == "") {
        alert("password cannot be empty");
        return;
      }

      const res = await loginUser({ username, password });
      alert(res.message);
      if (res.success) {
        let data = JSON.stringify(res.data?.user);
        localStorage.setItem("user", data);
        setUsername("");
        setPassword("");
        navigate("/user-details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 px-4 pt-16 ">
      <div className="flex justify-center">
        <div className="p-8 w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl">
          <h2 className="text-xl text-center text-gray-200 mb-6">
            Login to your account
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="text-gray-400 text-sm">
                user Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter user name"
                className="w-full mt-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-400 text-sm">
                password
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter user password"
                className="w-full mt-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold "
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
          </div>
          <div className="text-center mt-4 text-gray-400 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

//  <input
//         placeholder="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="text"
//         value={password}
//         placeholder="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button
//         onClick={() => {
//           handleLogin();
//         }}
//       >
//         Login
//       </button>
