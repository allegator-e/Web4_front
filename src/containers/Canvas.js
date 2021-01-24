import React from 'react';
import {connect} from 'react-redux';
import {sendPoint} from "../actions/pageActions";

class Canvas extends React.Component{
    constructor(props){
        super(props);
        this.clickCanvas = this.clickCanvas.bind(this);
    }

    sendPoint(x,y,r){
        let butch = {
            x: x,
            y: y,
            r: r
        };
        this.props.sendPoint(butch);
    }
    clickCanvas(e) {
        let width = this.props.page.canvasWidth;
        let r = this.props.page.r/10;
        let position = getMousePosition(document.getElementById('graph'), e);
        let svgX = position.x;
        let svgY = position.y;
        let y = ((width/2 - svgY) * r / (12*width/42)).toFixed(2);
        let x = (((svgX - width/2) * r / (12*width/42))).toFixed(2);
        console.log(width + ' 120:' + (12*width/42)+ ' pageX:' + svgX + ' pageY:' + svgY);
        console.log("X: " + x + "\nY: " + y + "\n R:" + r);
        this.sendPoint(x, y, r);
    }


    render() {
        const {style,page} = this.props;
        return(
            <div>
                <svg ref='canvas' id={'graph'} className={'graph'} width={page.canvasWidth} height={page.canvasWidth} onClick={this.clickCanvas} style={style.style.graph}>
                    <line className="axes" x1="0" x2={400*page.canvasWidth/420} y1={200*page.canvasWidth/420} y2={200*page.canvasWidth/420} stroke="black"/>
                    <line x1={200*page.canvasWidth/420} x2={200*page.canvasWidth/420} y1="0" y2={400*page.canvasWidth/420} stroke="black"/>
                    <polygon points={200*page.canvasWidth/420 + ",0 " + 194*page.canvasWidth/420 + "," + 25*page.canvasWidth/420 + " " + 206*page.canvasWidth/420 + "," + 25*page.canvasWidth/420} stroke="black"/>
                    <polygon points={400*page.canvasWidth/420 + "," + 200*page.canvasWidth/420 + " " + 375*page.canvasWidth/420 + "," + 206*page.canvasWidth/420 + " " + 375*page.canvasWidth/420 + "," + 194*page.canvasWidth/420} stroke="black"/>


                    <line x1={260*page.canvasWidth/420} x2={260*page.canvasWidth/420} y1={205*page.canvasWidth/420} y2={195*page.canvasWidth/420} stroke="black"/>
                    <line x1={320*page.canvasWidth/420} x2={320*page.canvasWidth/420} y1={205*page.canvasWidth/420} y2={195*page.canvasWidth/420} stroke="black"/>

                    <line x1={80*page.canvasWidth/420} x2={80*page.canvasWidth/420} y1={205*page.canvasWidth/420} y2={195*page.canvasWidth/420} stroke="black"/>
                    <line x1={140*page.canvasWidth/420} x2={140*page.canvasWidth/420} y1={205*page.canvasWidth/420} y2={195*page.canvasWidth/420} stroke="black"/>

                    <line x1={195*page.canvasWidth/420} x2={205*page.canvasWidth/420} y1={140*page.canvasWidth/420} y2={140*page.canvasWidth/420} stroke="black"/>
                    <line x1={195*page.canvasWidth/420} x2={205*page.canvasWidth/420} y1={80*page.canvasWidth/420} y2={80*page.canvasWidth/420} stroke="black"/>

                    <line x1={195*page.canvasWidth/420} x2={205*page.canvasWidth/420} y1={260*page.canvasWidth/420} y2={260*page.canvasWidth/420} stroke="black"/>
                    <line x1={195*page.canvasWidth/420} x2={205*page.canvasWidth/420} y1={320*page.canvasWidth/420} y2={320*page.canvasWidth/420} stroke="black"/>

                    <text x={250*page.canvasWidth/420} y={190*page.canvasWidth/420}>R/2</text>
                    <text x={315*page.canvasWidth/420} y={190*page.canvasWidth/420}>R</text>

                    <text x={70*page.canvasWidth/420} y={190*page.canvasWidth/420}>-R</text>
                    <text x={125*page.canvasWidth/420} y={190*page.canvasWidth/420}>-R/2</text>

                    <text x={210*page.canvasWidth/420} y={145*page.canvasWidth/420}>R/2</text>
                    <text x={210*page.canvasWidth/420} y={85*page.canvasWidth/420}>R</text>

                    <text x={210*page.canvasWidth/420} y={265*page.canvasWidth/420}>-R/2</text>
                    <text x={210*page.canvasWidth/420} y={325*page.canvasWidth/420}>-R</text>

                    <polygon points={320*page.canvasWidth/420 + "," + 200*page.canvasWidth/420 + " " + 320*page.canvasWidth/420 + "," + 260*page.canvasWidth/420 + " " + 200*page.canvasWidth/420 + "," + 260*page.canvasWidth/420 + " " + 200*page.canvasWidth/420 + "," + 200*page.canvasWidth/420} fill="purple" fill-opacity="0.3"
                             stroke="purple"/>


                    <path d={"M "+ 80*page.canvasWidth/420 + " "+ 200*page.canvasWidth/420 + " A " + 110*page.canvasWidth/420 + " " + 110*page.canvasWidth/420 + ", 0, 0, 1, " + 200*page.canvasWidth/420 + " "+ 80*page.canvasWidth/420 + " L "+ 200*page.canvasWidth/420 + " "+ 200*page.canvasWidth/420 + " Z"} fill="purple" fill-opacity="0.3"
                          stroke="purple"/>

                    <polygon points={200*page.canvasWidth/420 + "," + 140*page.canvasWidth/420 + " " + 200*page.canvasWidth/420 + "," + 200*page.canvasWidth/420 + " " + 260*page.canvasWidth/420 + "," + 200*page.canvasWidth/420} fill="purple" fill-opacity="0.3"
                             stroke="purple"/>

                    {page.table.map((item) => (
                        <circle r="3"
                                cx={(item.x * (12*this.props.page.canvasWidth/42) / item.r + this.props.page.canvasWidth/2)}
                                cy={(item.y * -(12*this.props.page.canvasWidth/42) / item.r + this.props.page.canvasWidth/2)}
                                fill={item.hit ? "yellow" : "red"}/>
                    ))}
                </svg>
            </div>
        )
    }
}

function getMousePosition(svg, event) {
    let rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

const  mapStateToProps = store =>{
    return{
        page: store.page,
        style: store.style
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        sendPoint: butch => dispatch(sendPoint(butch))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Canvas)