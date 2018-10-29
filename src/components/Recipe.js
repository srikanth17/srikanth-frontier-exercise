import React from 'react';
import Modal from 'react-modal';

// binds modal to the appElement
Modal.setAppElement('#app');

// react-modal is used to show modal box
class Recipe extends React.Component {
    state = {
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    };

    render() {
        let method = <div dangerouslySetInnerHTML={{__html: this.props.recipe.method}}/>;
        return (
            <div>
                <a onClick={this.openModal} style={{ cursor: 'pointer' }}>{this.props.recipe.title}</a>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                contentLabel="Recipe"
                            >

                                <h1 className="text-center">{this.props.recipe.title}</h1>
                                <div className="row" style={{ marginTop: '20px' }}>
                                    <div className="col-md-6">
                                        <p>Ingredients</p>
                                        <ul>
                                            {this.props.recipe.ingredients.map((ingredient) => {
                                                return <li key={ingredient.name}>
                                                    {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                                                </li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid d-none d-sm-block" src={this.props.recipe.image}/>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: '10px' }}>
                                        <h3>Directions:</h3>
                                        {method}
                                        </div>
                                </div>
                                <button onClick={this.closeModal} className="btn btn-primary btn-lg">close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;