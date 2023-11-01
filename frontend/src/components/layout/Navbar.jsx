// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let userId = useSelector((state) => state.userId);
  let user = useSelector((state) => state.user);

  return (
    <nav className="bg-gradient-to-r from-violet-950 to-purple-950 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <Link to="/">
              <h1 className=" text-2xl font-bold">Vind Expert</h1>
            </Link>
          </div>

          {userId && (
            <div className="flex space-x-4">
              <div className="text-white">
                <Link to="/companies">Companies</Link>
              </div>
              <div className="text-white">
                <Link to="/invites">Invites</Link>
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            {userId ? (
              <div>
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.profilePicture}
                    alt="profile picture"
                    className="w-8 h-8 rounded-full ml-2"
                  />
                  <Link to="/logout" className="text-white">
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-white">
                  Login
                </Link>
                <Link to="/register" className="text-white">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;