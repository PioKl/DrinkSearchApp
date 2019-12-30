import React, { Component } from 'react';
import '../style/App.scss';
import Search from './Search';
import Result from './Result';

class App extends Component {

  state = {
    drink: '',
    drinkName: '',
    drinkInstructions: '',
    drinkGlass: '',
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
    ingredient4: '',
    ingredient5: '',
    ingredient6: '',
    ingredient7: '',
    ingredient8: '',
    ingredient9: '',
    ingredient10: '',
    ingredient11: '',
    ingredient12: '',
    ingredient13: '',
    ingredient14: '',
    ingredient15: '',
    amountOfIngredient1: '',
    amountOfIngredient2: '',
    amountOfIngredient3: '',
    amountOfIngredient4: '',
    amountOfIngredient5: '',
    amountOfIngredient6: '',
    amountOfIngredient7: '',
    amountOfIngredient8: '',
    amountOfIngredient9: '',
    amountOfIngredient10: '',
    amountOfIngredient11: '',
    amountOfIngredient12: '',
    amountOfIngredient13: '',
    amountOfIngredient14: '',
    amountOfIngredient15: '',
    drinkPhoto: '',
    error: false,
    textFromSearch: '',

  }

  search = text => {
    this.setState({
      textFromSearch: text,
    })
  }


  componentDidUpdate(prevProps, prevState) {

    if (prevState.textFromSearch !== this.state.textFromSearch) {
      const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.textFromSearch}`; //według nazwy drinka
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.drinks !== null) { //zeby zapobiec errorowi ze data.null
            this.setState(prevState => ({
              drink: prevState.textFromSearch,
              drinkName: data.drinks[0].strDrink,
              drinkInstructions: data.drinks[0].strInstructions,
              drinkGlass: data.drinks[0].strGlass,
              ingredient1: data.drinks[0].strIngredient1,
              ingredient2: data.drinks[0].strIngredient2,
              ingredient3: data.drinks[0].strIngredient3,
              ingredient4: data.drinks[0].strIngredient4,
              ingredient5: data.drinks[0].strIngredient5,
              ingredient6: data.drinks[0].strIngredient6,
              ingredient7: data.drinks[0].strIngredient7,
              ingredient8: data.drinks[0].strIngredient8,
              ingredient9: data.drinks[0].strIngredient9,
              ingredient10: data.drinks[0].strIngredient10,
              ingredient11: data.drinks[0].strIngredient11,
              ingredient12: data.drinks[0].strIngredient12,
              ingredient13: data.drinks[0].strIngredient13,
              ingredient14: data.drinks[0].strIngredient14,
              ingredient15: data.drinks[0].strIngredient15,
              amountOfIngredient1: data.drinks[0].strMeasure1,
              amountOfIngredient2: data.drinks[0].strMeasure2,
              amountOfIngredient3: data.drinks[0].strMeasure3,
              amountOfIngredient4: data.drinks[0].strMeasure4,
              amountOfIngredient5: data.drinks[0].strMeasure5,
              amountOfIngredient6: data.drinks[0].strMeasure6,
              amountOfIngredient7: data.drinks[0].strMeasure7,
              amountOfIngredient8: data.drinks[0].strMeasure8,
              amountOfIngredient9: data.drinks[0].strMeasure9,
              amountOfIngredient10: data.drinks[0].strMeasure10,
              amountOfIngredient11: data.drinks[0].strMeasure11,
              amountOfIngredient12: data.drinks[0].strMeasure12,
              amountOfIngredient13: data.drinks[0].strMeasure13,
              amountOfIngredient14: data.drinks[0].strMeasure14,
              amountOfIngredient15: data.drinks[0].strMeasure15,
              drinkPhoto: data.drinks[0].strDrinkThumb,
              err: false,
            }))
          }
        })
        .catch(error => {
          console.log(error);
          this.setState({
            error: true,
            drink: this.state.textFromSearch,
          })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <Search search={this.search} />
          <Result drinks={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
