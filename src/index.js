/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

export default function MyDatePicker(props){

  const [ value , updateValue ] = useState (new Date ());
  const[pickdate,setPickdate]=useState('');
  const onChange = (date)=> {
  updateValue (date);
  };


  
  return(
    <div className='daypick'>
          <input type='text'  className='getdatevalue' onChange={e=>setPickdate(e.target.value)}/>
          <br/>
          <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy' onChange={e =>onChange(e.target.value)}  value={value}
          minDate={new Date(props.startdate)} maxDate={new Date(props.enddate)}> 
          </DatePicker>
          </div>
        
      );
};

// MyDatePicker.propTypes = {
//   'minDate' : PropTypes.date.isRequired ,
//   'maxDate' : PropTypes.date.isRequired
// };

// MyDatePicker.defaultProps = {
//   'label' : string ,
//   'backgroundColor' : null ,
//   'minDate' : date ,
//   'maxDate' : date
// };
