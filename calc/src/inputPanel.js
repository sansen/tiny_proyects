function InputPanel({ operationText, onOperationTextChange }) {
  return (
	  <input
      type="text"
      value={ operationText }
      onChange={(e) => onOperationTextChange(e.target.value)}
	  />
  );
}

export default InputPanel;
