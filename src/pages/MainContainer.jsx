import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './ComponentsPages/Dashboard';
import Reports from './ComponentsPages/Reports';
import Orders from './ComponentsPages/Orders';
import Analytics from './ComponentsPages/Analytics';
import Messages from './ComponentsPages/Messages';
import Settings from './ComponentsPages/Settings';

const MainContainer = () => {
    return (
        <div>

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>

        </div>
    )
}

export default MainContainer