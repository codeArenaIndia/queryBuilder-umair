import React from "react";
const CustomSelect = ({
  options,
  sequence,
  handleChange,
  value,
  name,
  setIndex,
  title,
  groupSequence
}) => {
  return (
    <div className="sorting">
      {/* <label htmlFor="select-input">{title} </label> */}
      <select
        name={name}
        className="select-input"
        id={name}
        value={value}
        onChange={(e) => handleChange(e, sequence, groupSequence, setIndex)}
      >
        {options &&
          options.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default React.memo(CustomSelect);
