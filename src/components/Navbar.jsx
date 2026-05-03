import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { logoutUser } from "../services/api";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = async function () {
    const res = await logoutUser();
    alert(res.message);
    console.log(res);
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="flex justify-between bg-gray-900 items-center p-4 text-white">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-white  bg-clip-text text-transparent">
        Auth App
      </div>
      {user && (
        <div className="flex flex-row gap-4 items-center gap-4">
          <span>Hello {user.username}</span>
          <button
            className="bg-red-500 rounded-lg font-semibold p-2 "
            onClick={(e) => {
              //   handleLogout();
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
