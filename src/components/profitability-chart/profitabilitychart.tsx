import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Profitabilitychart = ({ data }) => {
  // Use the 'data' prop to plot the graph
  return (
    <div className='chart' style={{ width: '100%', height: '400px'}}>
      {/* Use ResponsiveContainer to make the chart responsive */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="currency" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="description" stroke="#8aedba" fill="#8aedba" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Profitabilitychart;
