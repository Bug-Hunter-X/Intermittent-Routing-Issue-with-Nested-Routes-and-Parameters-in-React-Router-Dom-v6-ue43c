```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Routes>
          <Route path=":id" element={<User />} />
      </Routes>
    </div>
  );
}

function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>User {id}</h2>
    </div>
  );
}
export default App;
```