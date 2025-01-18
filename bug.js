```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is causing the issue */}
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function User() {return <div>User</div>}
export default App; 
```