/* eslint-disable react/prop-types */
function Button({ children, disabled }) {
  return (
    <button disabled={disabled} className="relative z-0">
      <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-black"></span>
      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-orange-400 px-3 py-1 text-base font-bold text-black transition-all duration-300 hover:bg-orange-300 active:left-1 active:top-1">
        {children}
      </span>
    </button>
  );
}

export default Button;
