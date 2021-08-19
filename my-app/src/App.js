import React from "react";
import PropTypes from 'prop-types';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am ckicked")}} />
//     </React.Fragment>
//   );
// }


const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "satoshi", age: 25},
    {name: "NoName"},
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string
}

export default App;
