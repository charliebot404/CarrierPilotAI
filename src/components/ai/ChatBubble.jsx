function ChatBubble({ sender, message, ai }) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        ai
          ? "bg-cyan-500/10 border border-cyan-500/20"
          : "bg-white/5 border border-white/10"
      }`}
    >
      <p className="text-sm text-cyan-400 font-semibold">
        {sender}
      </p>

      <p className="text-gray-300 mt-2 leading-7">
        {message}
      </p>
    </div>
  );
}

export default ChatBubble;