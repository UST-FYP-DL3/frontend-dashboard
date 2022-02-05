
import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import postImage from '../assets/images/post2.jfif'

const chartOptions = {
    series: [{
        name: 'Portfolio 1',
        data: [2900,3000,3100,2900,2850,3050,3200,3300,3150]
    }
    , {
        name: 'Portfolio 2',
        data: [3000,3200,3100,2950,2800,3000,3100,3250,3200]
    }
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Stock',
        'Unit',
        'Price',
        'Capital'
    ],
    body: [
        {
            "stockname": "MSFT",
            "unit": 10,
            "price": "$323.45",
            "capital": "$3234.5"
        },
        {
            "stockname": "MSFT",
            "unit": 10,
            "price": "$323.45",
            "capital": "$3234.5"
        },
        {
            "stockname": "MSFT",
            "unit": 10,
            "price": "$323.45",
            "capital": "$3234.5"
        },
        {
            "stockname": "MSFT",
            "unit": 10,
            "price": "$323.45",
            "capital": "$3234.5"
        },
        {
            "stockname": "MSFT",
            "unit": 10,
            "price": "$323.45",
            "capital": "$3234.5"
        },
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.stockname}</td>
        <td>{item.unit}</td>
        <td>{item.price}</td>
        <td>{item.capital}</td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-7">
                    <div className='card'>
                        <div className='card__header'>
                            <h3>Watchlist</h3>
                        </div>
                        <div className='card__body'>
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className='card__footer'>
                            <Link to='/'>View all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="card">
                        <div className="card__header">
                            <h3>Post</h3>
                        </div>
                        <div className="card__body">
                            <div className='row'>
                                <div className="col-12">
                                <img className="photo" src={postImage} alt={"post image"} /> 
                                </div>
                                <div className="col-12">
                                    content content content content content content content 
                                </div>
                                <div className="col-12">
                                    <Badge type="danger" content="Like"/>
                                </div>
                            </div>
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
