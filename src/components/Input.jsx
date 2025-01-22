

export default function InputLable({ label, isValidInput, ...props }) {

  let labelClassName = "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300"
  let inputClassName = "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"

  if (isValidInput) {
    labelClassName = "block mb-2 text-xs font-bold tracking-wide uppercase text-red-300"
    inputClassName = "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-red-300"
  }
  return <p>
    <label className={labelClassName}>{label}</label>
    <input className={inputClassName} {...props} />
  </p>
}