import React,{useState} from 'react'
import {buyCake} from '../redux/index';
import {connect} from 'react-redux';

const NewCakeContainer = (props) => {
  const[number,setNumber] = useState(1)
    return (        
        <div>
            <h2>Number of cakes:{props.noOfCakes}</h2>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick= {()=>props.buyCake(number)}>Buy {number}Cake</button>
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
        buyCake:number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer)
