import React, { Component } from 'react';

import Second from './Second/Second.js';
import './App.css';

class App extends Component {
  state={
    person:[{
    id:"aa",  
    name:'Manu',
    age:29
    },
    {
    id:"vbc",
    name:'Miller',
    age:28
    },
    {
    id:"dssd",  
    name:'Pogba',
    age:25
    }
    ],
    showData:false
  }


  deleteData = (dataIndex) =>{
    console.log(dataIndex);
    const persons= this.state.person.splice();
    persons.splice(dataIndex,1);
    this.setState({person:persons});
  }

  displayData = () => {
   this.setState({showData:true});
   }

  
  render() {

    const classes=[];
    if(this.state.person.length<=2)
    {
    classes.push('red');
    }

    if(this.state.person.lenth<=1)
    {
      classes.push('bold');
    }  

    let person=null;
    if(this.state.showData)
    {
      person=(<div> 
        {this.state.person.map((p,index) => {
              return <Second click={()=>this.deleteData(index)} name={p.name} age={p.age} key={p.id} />
              })}
              </div>
            );
    }
      return (
        <div className="App">
        
          <button type="button" className="red bold" onClick={this.displayData}>Toggle Button</button>
            {person}
       
        </div>
    
    );
  }
}

export default App;
