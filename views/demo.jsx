import React from "react";

class MyComponent extends React.Component{
    render() {
        let props = this.props;
        this.state={
            number: 0
        };
        return (
            <button onClick={(event)=>{console.log(this.state.number)}}> dsaasdasd</button>
        )
    }
}
export default MyComponent;
