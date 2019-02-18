import React, { Component } from "react";

class TreeD3Nodelevel extends Component {
  render() {
    const { className, nodeData } = this.props;
    console.log('props:' + className);

    return (
      <div>
        <div className="upper-margin">
          {/* <h6>{nodeData.other}</h6> */}
          <div className="show-box">
            <div>{nodeData.name}</div>
            <div>{nodeData.type}</div>            
          </div>
          {nodeData._children && (
            // <button>{nodeData._collapsed ? "More" : "Less"}</button>
            <div className="float-right">{nodeData._collapsed ? (<div > <i className="fas fa-search-plus" /> </div>) : (<div> <i className="fas fa-search-minus" /> </div>)}</div>
          )}
        </div>
      </div>
    );
  }
}

export default TreeD3Nodelevel;