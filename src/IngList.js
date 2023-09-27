
import React, {Component} from "react";
import Ingredient from "./Ingredient";

export default class IngList extends Component {

    render(){
         
        const { ingredients } = this.props

        let allIngs = ingredients.map((ing, idx) => ( 
            <li key={idx}>
                <Ingredient ingredient= {ing} />
            </li>

        ))
        return(
            <>
            <p>Ingregients List</p>
            {allIngs}

            </>
        )
    }
}
