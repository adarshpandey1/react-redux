import React from 'react'
import {buyCake} from '../redux/index';
import {connect} from 'react-redux';

const CakeContainer = (props) => {
    //console.log(props)
    return (        
        <div>
            <h2>Number of cakes:{props.noOfCakes}</h2>
            <button onClick= {props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes : state.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer)
