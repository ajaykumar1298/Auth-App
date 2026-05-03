import React from "react";

function User() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-gray-400">No user data found. Please login.</p>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-10">
      <div className="max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6">
        <div className="flex justify-center">
          <img
            src={user.avatar?.url}
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        <h2 className="text-center text-xl font-semibold mt-4 text-gray-200">
          {user.username}
        </h2>

        <p className="text-center text-sm text-gray-400">{user.email}</p>

        <div className="border-t border-gray-700 my-4"></div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">User ID</span>
            <span className="text-gray-200">{user._id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Role</span>
            <span className="text-blue-400 font-medium">{user.role}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Email Verified</span>
            <span
              className={`${
                user.isEmailVerified ? "text-green-400" : "text-red-400"
              }`}
            >
              {user.isEmailVerified ? "Yes" : "No"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Login Type</span>
            <span className="text-gray-200">{user.loginType}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Created At</span>
            <span className="text-gray-200">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="w-full mt-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
