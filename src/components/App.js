import React from 'react';
import data from '../utils/utils';
import Recipe from './Recipe';

class App extends React.Component {
    state = {
        allRecipes: data.recipes,
        filteredRecipes: data.recipes
    };

    // filter the searched recipe
    filterList = (e) => {
        let updatedRecipes = this.state.allRecipes.filter((recipe) => {
            return recipe.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        this.setState({ filteredRecipes: updatedRecipes });
    };

    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <h1 className="header-title">Recipe Application</h1>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '50px' }}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <form>
                                <fieldset className="form-group">
                                    <input type="text"
                                           className="form-control form-control-lg"
                                           placeholder="Search for recipes"
                                           onChange={this.filterList}
                                    />
                                </fieldset>
                            </form>
                            <p>Recipes</p>
                            <ul>
                                {this.state.filteredRecipes.map((recipe) => {
                                    return <li key={recipe.title} ><Recipe recipe={recipe}/></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;