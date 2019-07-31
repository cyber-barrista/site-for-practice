import React from 'react'
import SmallDish from './smallDish'
import FullDish from './fullDish'


class Dish extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSmall: true,
            isFull: false,
        }

        this.onFull = this.onFull.bind(this)
        this.onSmall = this.onSmall.bind(this)

    }

    onFull() {
        this.setState(
            {
                isSmall: false,
                isFull: true,
                isEdit: false
            }
        )
    }


    onSmall() {
        this.setState(
            {
                isSmall: true,
                isFull: false,
                isEdit: false
            }
        )
    }

    render() {
        if (this.state.isSmall) {
            return (
                <SmallDish
                    dish={this.props.dish}
                    onFull={this.onFull}
                />
            )
        } else if (this.state.isFull) {
            return (
                <FullDish
                    dish={this.props.dish}
                    onSmall={this.onSmall}
                />
            )
        }  else {
            return (
                <h6>Something wrong</h6>
            )
        }
    }
}

export default Dish