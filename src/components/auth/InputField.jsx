function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300 font-medium">
        {label}
      </label>

      <input
        type={type}
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
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />
    </div>
  );
}

export default InputField;