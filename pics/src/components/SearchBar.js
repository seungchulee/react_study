import React from 'react';

class SearchBar extends React.Component {
    // 1st solution : use this.XXX.bind(this);
    // constructor() {
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }
    state = {
        term: ''
    }

    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }
    // only this gives error!! -> use with 1st solution or 3rd solution

    // 2nd solution : use arrow function!
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment"> 
            {/* ui segment : 겉에 감싸는 거 */}
                <form 
                    className="ui form" 
                    onSubmit={this.onFormSubmit}
                    // 3rd solution : use arrow func in {}
                    // onSubmit={(e) => this.onFormSubmit(e)}
                >
                    {/* ui form : input이 들어가는 곳 */}
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value})}
                            placeholder="Enter Value!"
                        />
                        {/* 
                        input type : 
                         https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input 
                         */}
                    </div>
                </form>      
            </div>
        );
    }
}

export default SearchBar;