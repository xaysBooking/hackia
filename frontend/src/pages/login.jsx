import React, { useState } from "react";
import { BASE_URL } from "../config";
import Modal from "../components/modal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User created:", data);
      } else {
        console.error("Error creating user:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
      setModal(true);
    }
  };

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <div className="p-20 h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gray-200">
      <div className="content text-lg text-center md:text-left mb-4">
        <h1 className="text-5xl text-blue-500 font-bold">Facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <form
          className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg"
            type="submit"
          >
            {loading ? "loging in.." : "Login"}
          </button>
          <a className="text-blue-400 text-center my-2">Forgot Password?</a>
          <hr />
          <button className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">
            Create New Account
          </button>
        </form>
        {modal && <Modal isOpen={modal} onClose={handleCloseModal} />}
        <p className="text-center text-sm my-4">
          <span className="font-semibold text-center w-full">
            Create a Page
          </span>{" "}
          for a celebrity, band or business
        </p>
      </div>
    </div>
  );
}

export default Login;
