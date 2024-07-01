import './Dashboard.css';
import {
  Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,

} from 'recharts';
import React, { PureComponent } from 'react';


const Dashboard = () => {




  const data1 = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];




  return (


    <>
      <section id="dashboard">

        <div className="head1">
          <h1>Dashboard</h1>

          <div className="se">
            <i className='bx bx-search' id='srh'></i>
            <input type="search" placeholder='Search Blogs...' />
          </div>

          <div className="icons">
            <i className='bx bxs-calendar'></i>
            <i className='bx bxs-bell'></i>
          </div>

        </div>

        <div className="cards">
          <div className="card1">
            <i className='bx bx-user' id='user'></i>

            <div className="internal">
              <p>User's in the system</p>
              <p>25.432</p>
            </div>

            <p>+300</p>

          </div>

          <div className="card2">
          <i className='bx bx-wallet-alt' id='user'></i>

            <div className="internal">
              <p>Average Views</p>
              <p>12.350</p>
            </div>

            <p>+120</p>

          </div>

          <div className="card3">
          <i className='bx bx-money' id='user'></i>

            <div className="internal">
              <p>User's in the system</p>
              <p>25.432</p>
            </div>

            <p>+300</p>

          </div>
        </div>

        <div className="charts">
          <div className="chart1">
            <ResponsiveContainer width="100%" height="85%" >
              <RadarChart cx="50%" cy="45%" outerRadius="80%"  data={data1}>
                <PolarGrid  />
                <PolarAngleAxis dataKey="subject"  />
                <PolarRadiusAxis angle={70} domain={[0, 150]}/>
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#Bf58dc" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#30e2a2" fillOpacity={0.2} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart2">
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#070707" />
                <Bar dataKey="uv" fill="#Bf58dc" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="table">
          <h1>Blogs</h1>

          <div className="se1">
            <i className='bx bx-search' id='srh1'></i>
            <input type="search" placeholder='Search All Blogs' />
          </div>

          <div className="filters">
            <i className='bx bxs-calendar-event'></i>
            <p style={{ fontSize: '10px' }}>March 10-Apirl 20</p>
            <i className='bx bxs-filter-alt'></i>
            <p style={{ fontSize: '10px' }}>March 10-Apirl 20</p>
          </div>




        </div>

      </section>

    </>
  )
}

export default Dashboard