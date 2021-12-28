import React from 'react'
import {buyicecream} from '../redux/index';
import {connect} from 'react-redux';

const IceCreamContainer = (props) => {
    return (        
        <div>
            <h2>Number of icecreams:{props.noOfIcecreams}</h2>
            <button onClick= {props.buyCake}>Buy Icecreams</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfIcecreams : state.noOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyicecream: () => dispatch(buyicecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer)
