import React from "react";

export class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const { table, style } = this.props;
        return (
            <div className="table">
                    <table id="table" width="60%" style={style.style.result}>
                        <thead>
                        <tr>
                            <th style={style.style.result_head}>X</th>
                            <th style={style.style.result_head}>Y</th>
                            <th style={style.style.result_head}>R</th>
                            <th style={style.style.result_head}>HIT</th>
                        </tr>
                        </thead>

                        <tbody>
                        {table.map((item) => (
                            <tr>                            >
                                <td>
                                    {item.x}
                                </td>
                                <td>
                                    {item.y}
                                </td>
                                <td>
                                    {item.r}
                                </td>
                                <td>
                                    {String(item.hit)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </div>
        )
    }
}

