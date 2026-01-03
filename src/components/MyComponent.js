import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Ximen",
    age: 20,
    sex: "Mail",
  };

  handleClick(event) {
    console.log("Clicked");

    this.setState({
      name: "Nhut tuong dep trai",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, I'm {this.state.age} and sex is
        {this.state.sex}
        <br></br>
        <button
          onClick={(event) => {
            this.handleClick();
          }}
        >
          click me
        </button>
        <button onMouseOver={this.handleOnMouseOver}>Move</button>
      </div>
    );
  }
}

export default MyComponent;
