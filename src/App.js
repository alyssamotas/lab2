import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function App() {
  return (
    <div>
      <h1>CSCI 3130 Lab 2</h1>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}


function Layout() {
  const [visits, setCount] = useState(1);

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setCount(visits + 1)}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />

      <p>Home page visited {visits} times</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to Home Page</h2>

      <p>Created by: Alyssa Motas</p>
      <p>Banner ID: B00858853</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Welcome to About Page</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Welcome to Contact Page</h2>
    </div>
  );
}

