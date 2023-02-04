import React,{ Component } from "react";
import styled from "styled-components";
import Darkmode from "./components/Darkmode";
import SearchPanel from "./components/SearchPanel";
// import SectionCenter from "./components/SectionCenter";
import ErrorBoundary from "./components/ErrorBoundary";

const Wrapper = styled.div`
  width: 730px;
  height: max-content;
`

export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     repos: 52 ,
  //     followers: 7,
  //     following:11
  //   }
  // }
  
  render() {

    return (
      <div className="App">
        <Wrapper>
            <ErrorBoundary>
                <Darkmode/>
            </ErrorBoundary>
            <SearchPanel/>
            {/* <SectionCenter info={this.state} /> */}
        </Wrapper>
      </div>
    );
  }
}
