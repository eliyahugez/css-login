const LargeRedButton = ({ text, phone, type, className, children, display, handleClick, isActive }) => {

  let hidden = isActive ? '' : 'hidden';



  if (type === "submit") {
    return <button
      className={className}
      type="submit"
    >
      {children}
    </button>
  }

  if (type === "Oredr") {
    return <div
      className="mx-auto justify-center grid py-16 max-w-xl animate-pulse"
    >
      <button className=" cursor-pointer bg-red-600 text-white text-md md:text-2xl
   font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors"

        onClick={() => handleClick(display)}
      >
        {text}
      </button>
    </div>
  }
  return (<div
    className="mx-auto justify-center grid max-w-xl animate-pulse"
  >
    <a className=" cursor-pointer bg-red-600 text-white text-md md:text-2xl
   font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors"

      href={`tel:9138710701`}>
      {text}
      <span>{phone}</span>
    </a>
  </div>
  );
};

export default LargeRedButton;