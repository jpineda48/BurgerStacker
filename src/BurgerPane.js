import React, {Component} from "react";

import Ingredient from "./Ingredient";


export default class BurgerPane extends Component {
    render(){
        const { ingredients } = this.props

        let burgerBits = ingredients.map((ing, idx) => ( 
            <li key={idx}>
                <Ingredient ingredient= {ing} />
            </li>

        ))
        
        return (
            <section className="pane">
                <h3>Burger</h3>
                <li >
                    {burgerBits}
                </li>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )

    }
}