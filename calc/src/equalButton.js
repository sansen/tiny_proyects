function ComputeButton({ operationText, onOperationTextChange}) {
  return (
	  <button
      onClick={(e) => onOperationTextChange(eval(operationText))}
	  >=</button>
  );
}

export default ComputeButton;
