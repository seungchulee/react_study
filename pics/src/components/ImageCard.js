import React from 'react';

export default class ImageCard extends React.Component{
    constructor(props){
        super(props);
        
        this.imageRef = React.createRef();
        this.state = {spans : 0};
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10);
        this.setState({ spans }); // ES6의 새로운 기능
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        )
    }    
}