import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile/Profile'
import Departments from '../pages/Departments/Departments'

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/departments" />} />
            <Route path="/" element={<Navigate to="/departments" />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/profile/:department/:id" element={<Profile />} />
        </Routes>
    )
}
