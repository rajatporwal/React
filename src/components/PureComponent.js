import React, { PureComponent } from 'react';

const Temp = (props) => {
  console.log('render Temp');
  return (<div>{props.val}</div>)
}

class ComponentPure extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount(){
    setInterval(()=> {
      this.setState(()=>{
        return { val : 1}
      });
    }, 2000)
  }

  // shouldComponentUpdate(nextProp, nextState){
  //   console.log('nextState', nextState);
  //   console.log('currentState', this.state)
  //   return ( this.state.val === nextState.val ? false :true)
  // }

  render() {
    console.log('render App');
    return (
      <div className="App">
          <h2> I am pure component. </h2>
          <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default ComponentPure;