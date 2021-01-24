import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import '../App.css';
import {setStyle} from "../actions/styleSetter";
import {setLogin} from "../actions/userActions";
import {setWidth, setDevice, setPageWidth, setClock, setCof, setMarginTop, setMarginLeft} from "../actions/pageActions";
import {styleDesktop} from '../styles/desktop';
import {styleTablet} from '../styles/tablet';
import {stylePhone} from '../styles/phone';
import FirstPage from "../containers/FirstPage";
import SecondPage from "../containers/SecondPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    let size = window.screen.availWidth;
    console.log(size);
    if (size >= 1247){
        this.props.setStyle(styleDesktop);
        this.props.setDevice("desktop");
        this.props.setWidth(420)
    }else if (size >= 855){
        this.props.setStyle(styleTablet);
        this.props.setDevice("tablet");
        this.props.setWidth(420)
    }else {
        this.props.setStyle(stylePhone);
        this.props.setDevice("phone");
        this.props.setWidth(size*0.7)
    }
      if(localStorage.getItem("loginIn")!=null || localStorage.getItem("loginIn")!=undefined){
          this.props.setLogin(true)
      } else {
          this.props.setLogin(false)
      }

  }

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Route exact={true} strict={true} path="/~s285605/" component={FirstPage}/>
            <Route exact={true} strict={true} path="/~s285605/main" component={SecondPage}/>
          </BrowserRouter>
        </div>
    );
  }
}

const mapStateToProps = store =>{
    return {
        page: store.page,
        style: store.style
    }
}

const mapDispatchToProps = dispatch => {
  return{
      setMarginTop: margin => dispatch(setMarginTop(margin)),
      setMarginLeft: margin => dispatch(setMarginLeft(margin)),
      setCof: cof => dispatch(setCof(cof)),
      setClock: width => dispatch(setClock(width)),
      setStyle: style => dispatch(setStyle(style)),
      setWidth: width => dispatch(setWidth(width)),
      setPageWidth: width =>dispatch(setPageWidth(width)),
      setDevice: type => dispatch(setDevice(type)),
      setLogin: flag => dispatch(setLogin(flag)),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)