import React from 'react'
import UserRoutes from '../routes/UserRoutes'
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material'

export default function MasterLayout() {
    return (
        <Container fixed>
            <UserRoutes />
            <Navbar />
        </Container>
    )
}
