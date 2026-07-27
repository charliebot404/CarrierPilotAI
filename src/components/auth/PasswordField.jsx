import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300 font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            pr-12
            text-white
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;