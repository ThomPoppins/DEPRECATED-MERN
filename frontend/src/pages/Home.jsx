import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mx-auto p-5">
        <h1 className="text-3xl my-8">Home</h1>

        <p className="">
          Visit /books and /companies route to see some of this this
          application's functionalities in action.
        </p>
      </div>

      <div className="mx-auto p-5">
        <Link to="/login">
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg mr-3">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
