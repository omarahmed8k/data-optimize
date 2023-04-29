import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Fade, Grow, TableContainer, Box, Table, TableBody, TableCell, TableHead, TableRow, } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';

export default function TabsData({ departments, activeTab, engineersOfDepartment, loading }) {
    const navigate = useNavigate();

    return (
        <Grow in={!loading} timeout={1000}>
            <Box>
                <TabContext value={activeTab}>
                    {departments.map((department, index) => (
                        <TabPanel key={index} value={department.name}>
                            <Fade key={index} in={true} timeout={1000}>
                                <TableContainer>
                                    <Table>
                                        <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Username</TableCell>
                                                <TableCell>Location</TableCell>
                                                <TableCell>Phone</TableCell>
                                                <TableCell>Age</TableCell>
                                                <TableCell>Gender</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {engineersOfDepartment.map((engineer, index) => (
                                                <TableRow hover style={{ cursor: "pointer" }} key={index} onClick={() => navigate(`/profile/${engineer.department}/${index + 1}`, { state: engineer })}>
                                                    <TableCell>{engineer.name || "-"}</TableCell>
                                                    <TableCell>{engineer.github.username || "-"}</TableCell>
                                                    <TableCell>{engineer.github.location || "-"}</TableCell>
                                                    <TableCell>{engineer.phone || "-"}</TableCell>
                                                    <TableCell>{engineer.age || "-"}</TableCell>
                                                    <TableCell>{engineer.gender || "-"}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Fade>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </Grow>
    )
}
