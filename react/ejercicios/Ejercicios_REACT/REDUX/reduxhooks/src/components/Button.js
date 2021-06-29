import { connect, useDispatch } from "react-redux";

function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </div>
  );
}

// function mapDispatchToProps(dispatch) {
//   return {
//     handleIncrement: (e) => dispatch({ type: "increment" }),
//   };
// }

export default Button;
