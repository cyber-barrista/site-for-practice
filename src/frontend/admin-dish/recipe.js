import React from 'react'

const Recipe = (props) => {
    const {recipes} = props

    return (
        <section>
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
                    recipes.map(
                        (recipe) => {
                            return (
                                <tr  key={recipe._id}>
                                    <td>{recipe.ingredient}</td>
                                    <td>{recipe.amount}</td>
                                    <td>{recipe.unit}</td>
                                    </tr>
                            )
                        }

                    )
                }
                </tbody>
            </table>
        </section>
    )
}


export default Recipe