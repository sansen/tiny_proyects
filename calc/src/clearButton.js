function ClearButton({ operationText, onOperationTextChange}) {
  return (
	  <button
      onClick={(e) => onOperationTextChange('')}
	  >C</button>
  );
}

export default ClearButton
