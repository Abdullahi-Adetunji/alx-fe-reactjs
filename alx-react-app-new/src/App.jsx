import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      <UserProfile 
        name="Josh" 
        age="30" 
        bio="Software developer and coffee enthusiast" 
      />
    </div>
  );
}

export default App;