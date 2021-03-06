import React from "react";
import {connect} from 'react-redux';
import {Button} from "primereact/button";
import {Slider} from 'primereact/slider';
import {getTable, sendPoint, setR, setX, setY} from "../actions/pageActions";
import {logout} from "../actions/userActions";
import '../button.css'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.sendPoint = this.sendPoint.bind(this);
    }

    sendPoint(e){
        console.log("X: "+this.props.page.x/10 + "\nY: " + this.props.page.y/10 + "\nR: " + this.props.page.r/10);
        let butch = {
            x: this.props.page.x/10,
            y: this.props.page.y/10,
            r: this.props.page.r/10,
        };
        this.props.sendPoint(butch);
    }

    render() {
        const {page,style} = this.props;
        return(
            <div className="form" style={style.style.xyr_in}>
                <div style={style.style.form.x_in}>
                    <p style={style.style.form.chooseX}>Choose X: {page.x/10}</p>
                    <div >
                        <Slider
                            min={-30}
                            max={50}
                            step={1}
                            value={page.x}
                            onChange={this.props.setX}
                            style={style.style.form.slider}
                        />
                    </div>
                </div>

                <div style={style.style.form.y_in}>
                    <p style={style.style.form.chooseY}>Choose Y: {page.y/10}</p>
                    <div >
                        <Slider
                            min={-50}
                            max={50}
                            step={1}
                            value={page.y}
                            onChange={this.props.setY}
                            style={style.style.form.slider}
                        />
                    </div>
                </div>

                <div style={style.style.form.r_in}>
                    <p style={style.style.form.chooseR}>Choose R: {page.r/10}</p>
                    <div >
                        <Slider
                            min={10}
                            max={50}
                            step={1}
                            value={page.r}
                            onChange={this.props.setR}
                            style={style.style.form.slider}
                        />
                    </div>
                </div>

                <div style={style.style.form.send_form}>
                    <Button id={'send'} label="Отправить" type={"submit"} style={style.style.form.send_button} onClick={this.sendPoint} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
     return{
         page: store.page,
         style: store.style
     }
}

const mapDispatchToProps = dispatch => {
    return{
        setR: r => dispatch(setR(r.value)),
        setX: x => dispatch(setX(x.value)),
        setY: y => dispatch(setY(y.value)),
        getTable: () => dispatch(getTable()),
        logout: () => dispatch(logout()),
        sendPoint: butch => dispatch(sendPoint(butch))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Form)