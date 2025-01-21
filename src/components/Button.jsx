
export default function Button({ children, ...props }) {
  console.log(children);

  return (
    <div>
      <button {...props} className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500">{children}</button>
    </div>
  );
}

