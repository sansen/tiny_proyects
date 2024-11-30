import './buttonPanels.css'
import Button from './button'
import ComputeButton from './equalButton'
import ClearButton from './clearButton'

function ButtonsPanel({ operationText, onOperationTextChange }) {
    return (
	<>
	    <div className="operationPad">
	  <Button value="+"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="-"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="/"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="*"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	    <Button value="("
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	    <Button value=")"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <ComputeButton
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <ClearButton
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	    </div>
	    <div className="numericPad">
	  <Button value="1"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="2"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="3"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="4"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="5"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="6"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="7"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="8"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="9"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	  <Button value="0"
      operationText={operationText}
      onOperationTextChange={onOperationTextChange}
	  />
	    </div>
	    </>
  );
}

export default ButtonsPanel;
