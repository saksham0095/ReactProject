import React from 'react';
import './Second.css'
const second= (props) => {
	
	
		return(<div className="person">
			
			<p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>

			</div>);

	
}
export default second;