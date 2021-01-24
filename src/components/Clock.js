import React from "react";

export class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time : this.timeNow()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            6000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        this.setState({
            time : this.timeNow()
        });
    }

    timeNow() {
        let date = new Date();
        let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
        let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return hours + ":" + minutes + ":" + seconds;
    }

    render() {
        const {style} = this.props;
        return(
            <div id="clock" className="clock" style={style.style.clock}>{this.state.time}</div>
        )
    }

}
