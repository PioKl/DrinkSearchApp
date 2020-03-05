import React from 'react';
import '../style/Result.scss';
import drinkArt from '../images/drinkArt.png';

const Result = (props) => {
    const { drink, drinkName, drinkInstructions, drinkGlass,
        ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15,
        amountOfIngredient1, amountOfIngredient2, amountOfIngredient3, amountOfIngredient4, amountOfIngredient5, amountOfIngredient6, amountOfIngredient7, amountOfIngredient8, amountOfIngredient9, amountOfIngredient10, amountOfIngredient11, amountOfIngredient12, amountOfIngredient13, amountOfIngredient14, amountOfIngredient15,
        drinkPhoto, error } = props.drinks;

    const ingredientList = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15];

    const amountOfIngredientList = [amountOfIngredient1, amountOfIngredient2, amountOfIngredient3, amountOfIngredient4, amountOfIngredient5, amountOfIngredient6, amountOfIngredient7, amountOfIngredient8, amountOfIngredient9, amountOfIngredient10, amountOfIngredient11, amountOfIngredient12, amountOfIngredient13, amountOfIngredient14, amountOfIngredient15];

    let content = null;

    if (!error && drink) { //jesli nie ma bledu i jest wpisany jakis drink
        content = (
            <>
                <div id="mainHeader">
                    <h1 className="mainHeaderHeading">Drink: <span className="drinkNameSpan">{drinkName}</span></h1>
                </div>

                <div id="mainSectionContainer">
                    <div id="mainSectionIngredients">
                        <nav className="vocabularyMenu">
                            <input type="checkbox" id="menuToggle" />
                            <ul className="vocabularyItemsList">
                                <h1 className="vocabularyItemsListHeading">Vocabulary</h1>
                                <li className="vocabularyListItem">ts, tsp - tea spoon</li>
                                <li className="vocabularyListItem">tbsp - table spoon</li>
                                <li className="vocabularyListItem">oz - 30 ml</li>
                                <li className="vocabularyListItem">cl - 10 ml</li>
                            </ul>
                            <label htmlFor="menuToggle">
                                <span className="closeVocabularySpan"><i className="fas fa-arrow-left"></i></span>
                                <span className="vocabularySpan">Vocabulary</span>
                            </label>
                        </nav>
                        <ul className="ingredientList">
                            <h1 className="ingredientListHeading">Ingredients</h1>
                            {/* przechodzi przez tablice i jesli jest składnik to go wyswietl, a jesli nie ma to nie wyswietlaj nic, dzieki temu rozwiazaniu, nie bedzie nie potrzebnych "białych spacji" spowodowanych przez li bo na samym poczatku juz sprawdzam, czy jest skladnik ingredient ? */}
                            {/* mialem ingredient !== null ? itd, ale nie trzeba tego pisac mozna od razu ingredient, czyli jesli ingredient jest to wyswietl, a jak nie ma to nie wyswietlaj */}
                            {ingredientList.map((ingredient, id) => ingredient ? <li key={id} className="ingredientListItem">{/* {id + 1}: */} {ingredient}</li> : null)}
                        </ul>
                        <ul className="amountOfIngredientList">
                            <h1 className="amountOfIngredientListHeading">How Much</h1>
                            {/* dzialanie podobne do powyzszego (ingredientList.map), ale na kazda ilosc zastosowana jest funkcja replace, ktora sprawdza, czy pojawiaja sie tam dane znaki, aby je zamienic */}
                            {amountOfIngredientList.map((amountOfIngredient, id) => amountOfIngredient ?
                                <li key={id} className="amountOfIngredientListItem">{/* {id + 1}: */} {amountOfIngredient/* .replace("oz", "* 30ml(vodka glass)").replace("tsp", "tea spoon").replace("ts", "tea spoon").replace("cl", "* 10ml") */}</li> : null)}
                        </ul>
                    </div>
                    <div className="vocabularyLite">
                        <ul className="vocabularyItemsListLite">
                            <h1>Vocabulary</h1>
                            <li className="vocabularyListItemLite">ts, tsp - tea spoon</li>
                            <li className="vocabularyListItemLite">tbsp - table spoon</li>
                            <li className="vocabularyListItemLite">oz - 30 ml</li>
                            <li className="vocablaryListItemLitem">cl - 10 ml</li>
                        </ul>
                    </div>
                    <div id="mainSectionInformations">
                        <img className="drinkPhoto" src={drinkPhoto} alt="Drink" />
                        <h1 className="instructionsHeading">Instructions</h1>
                        <div className="glassToServeContainer">
                            <h2 className="glassToServeHeading">Glass to serve: </h2><span>{drinkGlass}</span>
                        </div>
                        <div className="howToDoContainer">
                            <h2 className="howToDoHeading">How to Do: </h2><span>{drinkInstructions}</span>
                        </div>

                    </div>

                </div>
            </>
        )
    } else {
        content = (
            <>
                <h1>Drinks Search App</h1>
                <h2>You can find here specific drink and find out how to do it</h2>
                {/* https://www.kissclipart.com/hurricane-drink-cocktail-garnish-juice-orange-drink-ky4cq4/ */}
                <div className="introPhoto">
                    <img className="drinkArt" src={drinkArt} alt="DrinkIntro" />
                </div>

            </>
        )
    }

    return (
        <div id="content">
            {error ? `Nie ma w bazie ${drink} ` : content}
        </div>
    );
}

export default Result;