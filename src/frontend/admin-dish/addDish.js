import React from 'react'
import {v4} from 'uuid'

class AddDish extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            smallDescription: '',
            fullDescription: '',
            recipesLength: '',
            recipes: [],
            urlOfImage: ''
        }

        this.submit = this.submit.bind(this)
        this.simpleInputChange = this.simpleInputChange.bind(this)
        this.recipesLengthInputChange = this.recipesLengthInputChange.bind(this)
        this.recipeInputChange = this.recipeInputChange.bind(this)
    }


    submit(event) {
        const {name, smallDescription, fullDescription, recipes, urlOfImage} = this.state
        const {addDish} = this.props

        event.preventDefault()
        window.alert('Новое блюдо успешно добавлено')
        addDish(name, smallDescription, fullDescription, recipes, urlOfImage)

        this.setState(
            {
                name: '',
                smallDescription: '',
                fullDescription: '',
                recipesLength: '',
                recipes: [],
                urlOfImage: ''
            }
        )
    }

    simpleInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState(
            {
                [name]: value
            }
        )
    }

    recipesLengthInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        var recipes = []

        for (let i = 0; i < value; i++) {
            recipes.push(
                {
                    _id: v4(),
                    ingredient: '',
                    amount: '',
                    unit: ''
                }
            )
        }

        this.setState({
            [name]: value,
            recipes
        })
    }

    recipeInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        const idSelector = id => obj => obj._id === id

        if (~name.indexOf('ingredient')) {
            const _id = name.substring('ingredient'.length)
            const index = this.state.recipes.findIndex(idSelector(_id))
            const newRecipes = this.state.recipes.map(
                (recipe, i) => {
                    if (i === index) {
                        return {
                            _id: recipe._id,
                            ingredient: value,
                            amount: recipe.amount,
                            unit: recipe.unit
                        }
                    } else {
                        return recipe
                    }
                }
            )

            this.setState({recipes: newRecipes})
        }

        if (~name.indexOf('amount')) {
            const _id = name.substring('amount'.length)
            const index = this.state.recipes.findIndex(idSelector(_id))
            const newRecipes = this.state.recipes.map(
                (recipe, i) => {
                    if (i === index) {
                        return {
                            _id: recipe._id,
                            ingredient: recipe.ingredient,
                            amount: value,
                            unit: recipe.unit
                        }
                    } else {
                        return recipe
                    }
                }
            )

            this.setState({recipes: newRecipes})
        }

        if (~name.indexOf('unit')) {
            const _id = name.substring('unit'.length)
            const index = this.state.recipes.findIndex(idSelector(_id))
            const newRecipes = this.state.recipes.map(
                (recipe, i) => {
                    if (i === index) {
                        return {
                            _id: recipe._id,
                            ingredient: recipe.ingredient,
                            amount: recipe.amount,
                            unit: value
                        }
                    } else {
                        return recipe
                    }
                }
            )

            this.setState({recipes: newRecipes})
        }

    }


    render() {
        return (
            <section>
                <h1>Добавте новое блюдо в меню</h1>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <legend>Задайте параметры блюда</legend>

                        <p>
                            <label>
                                Название блюда:
                                <input
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.simpleInputChange}
                                    required
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Краткое описание:
                                <input
                                    name="smallDescription"
                                    type="text"
                                    value={this.state.smallDescription}
                                    onChange={this.simpleInputChange}
                                    required
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Полное описание:
                                <textarea
                                    name="fullDescription"
                                    type="text"
                                    value={this.state.fullDescription}
                                    onChange={this.simpleInputChange}
                                    required
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Url изображения блюда:
                                <input
                                    name="urlOfImage"
                                    type="text"
                                    value={this.state.urlOfImage}
                                    onChange={this.simpleInputChange}
                                    required
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Количество ингредиентов в рецепте:
                                <input
                                    name="recipesLength"
                                    type="text"
                                    value={this.state.recipesLength}
                                    onChange={this.recipesLengthInputChange}
                                    required
                                />
                            </label>
                        </p>


                        <table className="recipe">
                            <caption>Рецепт</caption>
                            <thead>
                            <tr>
                                <th>Ингредиент</th>
                                <th>Количество</th>
                                <th>Еденица измерения</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                this.state.recipes.map(
                                    (recipe, index) => {
                                        return (
                                            <tr key={recipe._id}>
                                                <td>
                                                    <input
                                                        name={'ingredient' + recipe._id}
                                                        type="text"
                                                        value={this.state.recipes[index].ingredient}
                                                        onChange={this.recipeInputChange}
                                                        required
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        name={'amount' + recipe._id}
                                                        type="text"
                                                        value={this.state.recipes[index].amount}
                                                        onChange={this.recipeInputChange}
                                                        required
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        name={'unit' + recipe._id}
                                                        type="text"
                                                        value={this.state.recipes[index].unit}
                                                        onChange={this.recipeInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            </tbody>
                        </table>

                        <button>Сохранить</button>


                    </fieldset>
                </form>
            </section>
        )
    }
}

export default AddDish