import React, { useState } from "react";
import './styles.css'
import ArrowIcon from '../../assets/img/arrow.png'
import CheckIcon from '../../assets/img/check.png'

interface SelectSearchBoxPropos {
  label?: string;
  data: any;
  onInputChange: (text:string)=>void;
}


const SelectSearchBox: React.FC<SelectSearchBoxPropos> = (props) => {
  const [focusCount, setFocusCount] = useState(0)
  const [showOptions, setShowOptions] = useState('none');
  const [inputValue, setInputValue] = useState('');

  function hideOptions(){
    setTimeout(()=>setShowOptions('none'), 200)
  }
  
  return (
    <div id="select-block-container">
      <div id="select-block" className="select-block">
        <input
          className="select-input"
          onFocus={() => setShowOptions('block')}
          onBlur={hideOptions}
          placeholder="Selecione um fornecedor"
          value={inputValue}
          onChange={(text) => {
            setInputValue(text.target.value)
            props.onInputChange(text.target.value)
            console.log('oansodjsabo')
            }}>
        </input>
        <img
          className={showOptions === 'block' ? 'spin' : ''}
          src={ArrowIcon}
          alt="ArrowIcon" />

        <div className={props.label ? 'above-text' : 'above-text-hidden'}>
          <span>{props.label}</span>
        </div>

        <div className="select-options" style={{ display: showOptions}}>

          {props.data.map((item:any)=>(
            <div 
              key={item.id} 
              tabIndex={0} 
              onFocus={()=>setFocusCount(focusCount+1)}
              onBlur={()=>setFocusCount(focusCount-1)}
              className="op"
              onClick={() => {
                console.log(inputValue) 
                setInputValue(item.text)
              }}>
                {item.text}
                <img
                  className={inputValue === item.text ? 'checked' : 'hidden' }
                  src={CheckIcon}
                  alt="Check Icon"/>
             </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default SelectSearchBox;