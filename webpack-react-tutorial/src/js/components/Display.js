import React , {Component} from 'react';
import results from '../results.json'

class Display extends Component {
  constructor(props) {
    super(props);
    var obj = JSON.parse(JSON.stringify(results));
    console.log(obj);
  }
  render() {
    
    return(
      // <table>
      //   <th>  
      //     {
      //       this.obj.map((value,key) => {
      //         return(
      //           <h3>{this.key}</h3>
      //         )
      //       })
      //     }
      //   </th>  
      // </table>
      <div>hello</div>
    )
  }
}

export default Display
