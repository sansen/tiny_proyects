import { useState } from 'react';
import './Calc.css'
import InputPanel from './inputPanel'
import ButtonsPanel from './buttonsPanel'

function Calc() {
  const [operationText, setOperationText] = useState('');

  return (
    <div className="Calc">
	  <InputPanel 
      operationText={operationText}
      onOperationTextChange={setOperationText}
          />
	  <ButtonsPanel
      operationText={operationText}
      onOperationTextChange={setOperationText}
	  />
    </div>
  );
}

export default Calc;
