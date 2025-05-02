import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state?.users?.userAuth);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Profile</h2>
      {user ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">
          No user information available. Please log in.
        </div>
      )}
    </div>
  );
};

export default Profile;