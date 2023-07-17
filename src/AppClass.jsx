import React from "react";
import Counter from './basic/components/Counter'

export default class AppClass extends React.Component {
    state = { count:0 }

    onClick =() =>{
        this.setState({ count: this.state.count + 1 });
    }

    componentDidMount(){
        console.log('컴파운드가 마운트 되었음!');
    }

    componentWillUnmount(){
        console.log('컴파운드가 곧 언마운트될 예정임!');
    }
    // 요위로는 유지됨 다시 호출되지 않음 아래만 호출됨

    render() {
     return (
        <div className='container'>
          <div className='banner'>
             Total Count:{this.state.count}{this.state.count> 10? '🔥': '🧊'}
          </div>
          <div className='counters'>
            <Counter total={this.state.count} onClick={this.onClick}/>
            <Counter total={this.state.count} onClick={this.onClick}/>
          </div>
        </div>
     )
    }
}