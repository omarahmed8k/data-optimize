import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { engineers } from '../../helpers/task.js';
import { getDepartments, getEngineersOfDepartment } from '../../store/departments-slice';
import Loader from '../../components/Loader/Loader.jsx';
import NoData from '../../components/NoData/NoData.jsx';
import TabsHead from './TabsHead/TabsHead.jsx';
import TabsData from './TabsData/TabsData.jsx';
import './Departments.scss'

export default function Departments() {
    const dispatch = useDispatch();

    //* get departments from store
    const departments = useSelector(state => state.allDepartments.departments);

    //* get engineers of active department from store
    const engineersOfDepartment = useSelector(state => state.allDepartments.engineers);

    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(departments[0]?.name || "Umbra");

    const handleDepartmentChange = (e, department) => {
        //* set value of active tab
        setActiveTab(department);
        //* dispatch engineers of active department to store
        dispatch(getEngineersOfDepartment(department));
    };

    function prepareDepartmentsData(engineers) {
        //* filter departments and engineers by department
        //* set every department by it's engineers array
        const filterDepartments = engineers.reduce((acc, engineer) => {
            const department = acc.find(department => department.name === engineer.department);
            if (department) {
                department.engineers.push(engineer);
            } else {
                acc.push({ name: engineer.department, engineers: [engineer] })
            }
            return acc;
        }, [])
        //* final shape: [{name: "Umbra", engineers: [{...}, {...}, ...]}, {...}, ...]
        //* dispatch departments to store
        dispatch(getDepartments(filterDepartments));
        //* change value of active tab by first department name
        handleDepartmentChange(null, filterDepartments[0]?.name);
    }

    useEffect(() => {
        //* prepare departments data
        prepareDepartmentsData(engineers)

        //* set loading for 1 second to show loader
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [departments[0]?.name])

    return (
        <>
            {loading && <Loader />}
            {!loading ? (
                <>
                    <h1 className="title">Departments</h1>
                    {/* Tabs Buttons */}
                    <TabsHead departments={departments} activeTab={activeTab} loading={loading} handleDepartmentChange={handleDepartmentChange} />
                    {/* Tabs Data (Tables) */}
                    <TabsData departments={departments} activeTab={activeTab} loading={loading} engineersOfDepartment={engineersOfDepartment} />
                </>
            ) : <NoData />}
        </>
    )
}
