
import React, {Component} from "react";
import Ingredient from "./Ingredient";

export default class IngList extends Component {

    render(){
         
        const { ingredients, add } = this.props

        let allIngs = ingredients.map((ing, idx) => ( 
            <li key={idx}>
                <Ingredient ingredient= {ing}
                            clickFunc={add}
                            itemKey={idx}
                />
            </li>

        ))
        return(
            <section className="pane"> 
                <h3>Ingregients List</h3>
                {allIngs}
            </section>

            
        )
    }
}
