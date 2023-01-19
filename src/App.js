
import Profile from './Profile/Profile';
import './App.css';

function App() {
  let fullName="trabelsi mohamed aziz"
  let bio = ""
  let  profession = ""
  (

  
    <div>
      <Profile fullName={fullName} bio={bio} profession={profession}>

      </Profile>
    </div>
  );
}

export default App;
