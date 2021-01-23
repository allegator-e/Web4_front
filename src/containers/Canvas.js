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
/*
    componentDidUpdate() {
        this.drawPoints();
    }

    drawPoints() {
        makeDots(this.props.page.table, this.props.page.canvasWidth)
    }
*/
    clickCanvas(e) {
        let width = this.props.page.canvasWidth;
        let r = this.props.page.r/10;
        let position = getMousePosition(document.getElementById('graph'), e);
        let svgX = position.x;
        let svgY = position.y;
        let y = ((width/2 - svgY) * r / (12*width/41)).toFixed(4);
        let x = (((svgX - width/2) * r / (12*width/41))).toFixed(4);
        console.log(width + ' 120:' + (12*width/41)+ ' pageX:' + svgX + ' pageY:' + svgY);
        console.log("X: " + x + "\nY: " + y + "\n R:" + r);
        this.sendPoint(x, y, r);
    }


    render() {
        const {style,page} = this.props;
        return(
            <div>
                <svg ref='canvas' id={'graph'} className={'graph'} onClick={this.clickCanvas} style={style.style.graph}>
                    <line className="axes" x1="0" x2="400" y1="200" y2="200" stroke="black"></line>
                    <line x1="200" x2="200" y1="0" y2="400" stroke="black"></line>
                    <polygon points="200,0 194,25 206,25" stroke="black"></polygon>
                    <polygon points="400,200 375,206 375,194" stroke="black"></polygon>

                    <line x1="260" x2="260" y1="205" y2="195" stroke="black"></line>
                    <line x1="320" x2="320" y1="205" y2="195" stroke="black"></line>

                    <line x1="80" x2="80" y1="205" y2="195" stroke="black"></line>
                    <line x1="140" x2="140" y1="205" y2="195" stroke="black"></line>

                    <line x1="195" x2="205" y1="140" y2="140" stroke="black"></line>
                    <line x1="195" x2="205" y1="80" y2="80" stroke="black"></line>

                    <line x1="195" x2="205" y1="260" y2="260" stroke="black"></line>
                    <line x1="195" x2="205" y1="320" y2="320" stroke="black"></line>

                    <text x="250" y="190">R/2</text>
                    <text x="315" y="190">R</text>

                    <text x="70" y="190">-R</text>
                    <text x="125" y="190">-R/2</text>

                    <text x="210" y="145">R/2</text>
                    <text x="210" y="85">R</text>

                    <text x="210" y="265">-R/2</text>
                    <text x="210" y="325">-R</text>

                    <polygon points="320,200 320,260 200,260, 200,200" fill="purple" fill-opacity="0.3"
                             stroke="purple"/>

                    <path d="M 80 200 A 110 110, 0, 0, 1, 200 80 L 200 200 Z" fill="purple" fill-opacity="0.3"
                          stroke="purple"/>

                    <polygon points="200,140 200,200 260,200" fill="purple" fill-opacity="0.3"
                             stroke="purple"/>

                    <circle r="3" cx="200" cy="200" id="point" fill="black"/>
                    {page.table.map((item) => (
                        <circle r="3"
                                cx={(item.x * (12*this.props.page.canvasWidth/41) / item.r + this.props.page.canvasWidth/2)}
                                cy={(item.y * -(12*this.props.page.canvasWidth/41) / item.r + this.props.page.canvasWidth/2)}
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

function makeDots(table, width) {
    for(const dot of table){
        let x = dot.x;
        let y = dot.y;
        let r = dot.r;
        if (dot.hit === true) {
            document.querySelector('.graph').innerHTML += '<circle r="3" cx="' + (x * (12*width/41) / r + width/2) +
                '" cy="' + (y * -(12*width/41) / r + width/2) + '" fill="yellow" ></circle>'
        } else {
            document.querySelector('.graph').innerHTML += '<circle r="3" cx="' + (x * (12*width/41) / r + width/2) +
                '" cy="' + (y * -(12*width/41)/ r + width/2) + '" fill="red" ></circle>'
        }
    }
}

const  mapStateToProps = store =>{
    return{
        page: store.page,
        style: store.style
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        sendPoint: butch => dispatch(sendPoint(butch))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Canvas)