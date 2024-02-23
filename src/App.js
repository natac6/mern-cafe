// imports
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import styles from './App.module.css';
// pages
import Auth from './pages/Auth/Auth';
import NewOrder from './pages/NewOrder/NewOrder';
import OrderHistory from './pages/OrderHistory/OrderHistory';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrder user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistory user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <Auth setUser={setUser} />
      }
    </main>
  );
}