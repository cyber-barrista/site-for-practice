import React from 'react'
import SmallDish from './smallDish'
import FullDish from './fullDish'
import EditDish from './editDish'


class Dish extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSmall: true,
            isFull: false,
            isEdit: false
        }

        this.onFull = this.onFull.bind(this)
        this.onEdit = this.onEdit.bind(this)
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

    onEdit() {
        this.setState(
            {
                isSmall: false,
                isFull: false,
                isEdit: true
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
                    onEdit={this.onEdit}
                    onSmall={this.onSmall}
                />
            )
        } else if (this.state.isEdit) {
            return (
                <EditDish
                    dish={this.props.dish}
                    onReverse={this.onFull}
                    rateDish={this.props.rateDish}
                />
            )
        } else {
            return (
                <h6>Something wrong</h6>
            )
        }
    }
}

export default Dish