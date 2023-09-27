import React, {Component} from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'


export default class BurgerStacker extends Component {
    state = {
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
          ],
          burgerIngredients: []
    }
    ingredientsJsx = this.state.ingredients.map(ing => {
        return <p>{ing.name}</p>
    })

    addToStack = (e) => {
        const ingName = e.target.innerText 
        const ingColor = e.target.style.backgroundcolor 
        this.setState({
            burgerIngredients: [
                {name: ingName, color:ingColor},
                ...this.state.burgerIngredients
                
            ]
        })

    }
        ///clear burger ingredients
    clearBurger = () => {
        this.setState({
            burgerIngredients:[]
        })
    }    

    removeFromStack = (e) => {
        const clickIndex = e.target.id 
        console.log(clickIndex)

        const currBurger = this.state.burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)

        this.setState ({
            burgerIngredients: currBurger
        })
        
        
    }
    render(){
        return (
            <>
            <h1>Burger Stacker</h1>
            <div className='panes'>
            <IngList ingredients={this.state.ingredients}
              add = {this.addToStack}
            />
            <BurgerPane ingredients={this.state.burgerIngredients} 
                        clear={this.clearBurger}
                        remove={this.removeFromStack}
                        />
            </div>
            </>

        )
    }
}