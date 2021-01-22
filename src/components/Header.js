import React from 'react'

export class Header extends React.Component{
    render() {
        const {group,firstDeveloper,secondDeveloper,variant,style} = this.props;
        return(
            <div className="hat" style={style.style.header}>
                {variant}
                <br/>{firstDeveloper}, {secondDeveloper}
                <br/>{group}
            </div>
        )
    }
}