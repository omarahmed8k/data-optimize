import React from 'react'
import { Fade, Tabs, Tab, Box, } from '@mui/material';

export default function TabsHead({ departments, activeTab, loading, handleDepartmentChange }) {

    return (
        <Fade in={!loading} timeout={1000}>
            <Box>
                <Tabs value={activeTab} onChange={handleDepartmentChange} centered>
                    {departments.map((department, index) => (
                        <Tab key={index} label={`${department.name} : ${department.engineers.length}`} value={department.name} />
                    ))}
                </Tabs>
            </Box>
        </Fade>
    )
}
