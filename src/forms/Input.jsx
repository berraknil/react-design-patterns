import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target }) {
        console.log(target.value);
    }
    render() {
      return(
        <form>
            <input 
            type="text"
            onCHange={this.handleChange}
            />
            <button>Submit</button>
        </form> 
    );
    }
}

export default Input;