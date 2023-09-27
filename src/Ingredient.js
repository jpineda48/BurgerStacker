import React, {Component} from "react";

///DISPLAYS INDIVIUSAL INGREDIENT DERIVED FROM PROPS

///recieves one ingredient and displays name and color

export default class Ingredient extends Component {
    render() {
        //destructure properties

        const {name, color} = this.props.ingredient

        return(
            <p
            style={{backgroundColor:color}}
            onClick={this.props.clickFunc}
            >{name}</p>
        )
    }
}

