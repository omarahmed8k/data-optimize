import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Grow, TableContainer } from '@mui/material';
import userSvg from '../../assets/svgs/profile.svg';
import Loader from '../../components/Loader/Loader';
import NoData from '../../components/NoData/NoData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ReactApexChart from 'react-apexcharts'
import './Profile.scss'

export default function Profile() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (location.state) {
            setUser(location.state);
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [location])


    const projectsChart = {
        options: {
            chart: { type: 'pie', },
            labels: user?.projects?.map((item) => item.name) || ["-"],
        },
        series: user?.projects?.map((item) => item.rank) || [0],
    }

    const timelineChart = {
        options: {
            chart: { type: 'bar', },
            tooltip: { y: { title: { formatter: function () { return "KPI:" } } } },
            xaxis: { categories: user?.timeline?.map((item) => item.data) || ["-"], },
        },
        series: [{ data: user.timeline?.map((item) => item.kpi) || [0], }],
    }

    const githubChart = {
        options: {
            chart: { type: 'donut' },
            labels: ["followers", "following"],
        },
        series: [user?.github?.followers || 0, user?.github?.following || 0],
    }

    return (
        <>
            {loading && <Loader />}
            {!loading ? (
                <Grow in={!loading} timeout={1000}>
                    <div className='profile-page'>
                        <img src={userSvg} alt="user" />
                        <h1 className='title'>{user?.name || "-"}</h1>
                        <Grid container spacing={5}>
                            <Grid item xs={12} lg={6}>
                                <h1 className='title'>Main Info</h1>
                                {/* Main Info */}
                                <TableContainer>
                                    <Table>
                                        <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Value</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow hover>
                                                <TableCell>Name</TableCell>
                                                <TableCell>{user?.name || "-"}</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell>Department</TableCell>
                                                <TableCell>{user?.department || "-"}</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell>Phone</TableCell>
                                                <TableCell>{user?.phone || "-"}</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell>age</TableCell>
                                                <TableCell>{user?.age || "-"}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <h1 className="title">Github</h1>
                                {/* Github Info */}
                                <TableContainer>
                                    <Table>
                                        <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Value</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow hover>
                                                <TableCell>Username</TableCell>
                                                <TableCell>{user?.github?.username || "-"}</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell>Location</TableCell>
                                                <TableCell>{user?.github?.location || "-"}</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell>Last Contributions</TableCell>
                                                <TableCell>{user?.github?.lastcontributions || "-"}</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell>URL</TableCell>
                                                <TableCell>
                                                    <a href={user?.github?.url || "#"} target="_blank" rel="noreferrer">{user?.github?.url || "-"}</a>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                        {/* Statistics */}
                        <Grid container spacing={5}>
                            <Grid item xs={12} lg={4}>
                                <h1 className="title">Project Ranks</h1>
                                {/* Projects Info */}
                                <ReactApexChart options={projectsChart.options} series={projectsChart.series} type="pie" />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <h1 className="title">Timeline KPI</h1>
                                {/* Timeline Info */}
                                <ReactApexChart options={timelineChart.options} series={timelineChart.series} type="bar" />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <h1 className="title">Github Account</h1>
                                {/* Github Info */}
                                <ReactApexChart options={githubChart.options} series={githubChart.series} type={'donut'} />
                            </Grid>
                        </Grid>
                    </div>
                </Grow >
            ) : <NoData />}
        </>
    )
}
