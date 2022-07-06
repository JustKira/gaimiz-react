const CustomSelection = ({input, type,meta:{touched,error,warning},Children}) => {
    return (
    <div>
      <div>
        <select {...input} className="px-10 py-3 mt-3 mx-3 text-slate-600 relative bg-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full" type={type} >
        <option></option>
        <option value = "DELL">Dell</option>
        <option value = "HP">HP</option>
        <option value = "Lenovo">Lenovo</option>
        </select>
        {touched &&
          ((error && <span  className=" absolute text-white px-3 py-3 mt-3 mx-8">{error}</span>) ||
            (warning && <span  className=" absolute text-white px-3 py-3 mt-3 mx-8">{warning}</span>))}
      </div>
    </div>
    )
  }

export default CustomSelection