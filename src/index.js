/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

function MyDatePicker(props){

  const [cdate,setCdate] = useState(new Date());
   // console.log(caldate);

  return(
    <div className='daypick'> 
            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy'
            value={cdate}
            onChange={(date)=>{setCdate(date)}}
            minDate={new Date(props.startdate)}  maxDate={new Date(props.enddate)}> 
            </DatePicker>
            </div>
        
      );
}
export default MyDatePicker;

  
// MyDatePicker.propTypes = {
//   'startdate' : PropTypes.string.isRequired,
//   'enddate' : PropTypes.string.isRequired,
//   'onChange':PropTypes.func
// };

// MyDatePicker.defaultprops = {
//   //'selectdate' : string,
//   'startdate' : string,
//   'enddate':string
// };

