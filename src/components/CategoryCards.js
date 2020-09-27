import React from 'react';
class CategoryCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesInState: this.props.categoryName,
        }
    }
    componentDidMount(props) {
        if (this.state.categoriesInState !== this.props.categoryName) {
            this.setState({ categoriesInState: this.props.categoryName })
        }
    }
    render() {
        return (

            <div className="card text-black bg-warning">
                {/* <img className="card-img-top" src="..." alt="loading..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{this.state.categoriesInState}</h5>
                    {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <p className="card-link"><small className="text-muted">Explore More</small></p>
                </div>
            </div>
        )
    }
}

export default CategoryCards