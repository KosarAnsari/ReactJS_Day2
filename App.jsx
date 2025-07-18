import Login from './UserComponent';
import { Profile, Setting, UserKey } from './UserComponent';
import Exercise from './ExerciseComp';

function App() {
  const UserName = 'Achlys';
  let x = 10;
  let y = 2;

  return (
    <>
      <h1>importing and exporting Components.</h1>
      <Login />
      <Profile />
      <Setting />
      <h2>{UserKey}</h2> // Way of exporting a variable
      <h2>{UserName}</h2>
      <h3>{x + y}</h3>
      <p>{10 + 20 + 30}</p>
      <button onClick={() => alert('Welcome to ReactJS Day 2')}>
        Click here!
      </button>
      <Exercise />
    </>
  );
}

export default App;

