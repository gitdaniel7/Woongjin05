import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount (처음 렌더링 완료)");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate (업데이트 완료)");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount (컴포넌트 제거됨)");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <p>카운트: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1 증가
        </button>
      </div>
    );
  }
}

export default ClassComponent;