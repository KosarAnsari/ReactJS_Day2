React JS – Day 2

📚 What I Learned Today

✅ 1. Import and Export in React

Learned how to export a component from one file and import it into another.

Created UserComponent.jsx and exported the component:

// UserComponent.jsx
function UserComponent() {
  return <h2>Hello, I am a User Component!</h2>;
}

export default UserComponent;

Imported UserComponent into the main App.jsx file:

// App.jsx
import UserComponent from "./UserComponent";

function App() {
  return (
    <div>
      <UserComponent />
    </div>
  );
}

export default App;



---

✅ 2. Exercise in ExerciseComp.jsx

Created a new file ExerciseComp.jsx.

Implemented:

A function called callFunction.

Returned a <div> containing an unordered list (<ul>) with multiple <li> elements.


export default ExerciseComp;

Then imported ExerciseComp into App.jsx and rendered it:

import ExerciseComp from "./ExerciseComp";
function App() {
  return (
    <div>
      <ExerciseComp />
    </div>
  );
}

export default App;


🔗 Key Takeaways

Default Export: Only one default export per file, imported without {}.

Named Export: Multiple named exports possible, imported with {}.

Created interactive UI elements (button + list).



---

✅ Day 2 Completed! 🚀

Next, I’ll learn how to handle functions with parameters , without parameters , and manage React versions.
