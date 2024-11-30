function Button({value, operationText, onOperationTextChange}) {
  return (
	  <button
      onClick={(e) => onOperationTextChange(operationText + e.target.innerText)}
	  >{value}</button>
  );
}

export default Button;
