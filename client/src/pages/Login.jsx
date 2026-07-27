import { useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../components/auth/InputField";
import PasswordField from "../components/auth/PasswordField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend API yahin connect hogi
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

        <div className="text-center">
          <h2 className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            CareerPilot AI
          </h2>

          <h1 className="text-4xl font-bold text-white mt-3">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-3">
            Login to continue your placement journey.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-6"
        >
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="accent-cyan-500"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-cyan-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-cyan-600
              hover:scale-[1.02]
            "
          >
            Continue
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <button
            type="button"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              text-white
              hover:bg-white/10
              transition
            "
          >
            Continue with Google
          </button>

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Sign Up
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;