const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 62;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello />
    </div>
  );
};

export default App;

/* TODO: 
Solve the last 3 exercises to better understand props:

https://react.dev/learn/passing-props-to-a-component

Brush up on fragments:

https://react.dev/reference/react/Fragment
*/
