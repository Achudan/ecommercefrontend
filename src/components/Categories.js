import React from 'react';
import axios from 'axios';
import CategoryCards from './CategoryCards';
class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesInState: null,
        }
    }
    componentDidMount() {
        axios.get(
            "http://localhost:5000/getCategories"
        ).then(
            (res) => {
                this.setState({ categoriesInState: res.data })
            }
        )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    render() {
        let categoriesCards
        if (this.state.categoriesInState) {
            categoriesCards = this.state.categoriesInState.map((items, key) => {
                return (
                        <CategoryCards categoryName={items.category} categoryid={items._id} key={key}/>
                )
            })

        }

        return (
            <div>
                <div className="card-columns">
                    {categoriesCards}
                </div>                
            </div>
        )

    }
}

export default Categories