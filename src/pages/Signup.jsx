import { useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../components/auth/InputField";
import PasswordField from "../components/auth/PasswordField";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        <h2 className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
          CareerPilot AI
        </h2>

        <h1 className="text-4xl font-bold text-white mt-3">
          Create Account 🚀
        </h1>

        <p className="text-gray-400 mt-2">
          Start your placement journey today.
        </p>

        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-6"
        >
          <InputField
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordField
            label="Password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordField
            label="Confirm Password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-600 transition"
          >
            Create Account
          </button>

          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Login
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Signup;