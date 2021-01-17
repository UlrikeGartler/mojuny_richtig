import React from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";

export function MainCategoryScreen(props) {


  return (
    <div className="screen">
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <br></br>
      <Link to="/subCategory">
        <Button text={props.numOfCakes}></Button>
      </Link>
     

    </div>
  );
}


/* <Link to="/next">
   <button onClick={props.buyCake}>next</button>
 </Link>
 <button onClick={props.buyCake}>Buy Cake</button>*/



const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

export default connect(mapStateToProps,)(MainCategoryScreen);
