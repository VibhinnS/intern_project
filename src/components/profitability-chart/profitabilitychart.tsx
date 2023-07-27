import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

const Profitabilitychart = ({ revenue, expense }) => {
  // Group revenue and expense data by month
  const combinedData = revenue.map((entry) => ({
    ...entry,
    type: "revenue",
    expense: expense.find((e) => e.selectedMonth === entry.selectedMonth)?.expense || 0,
  }));

  combinedData.forEach((entry) => {
    entry.difference = entry.revenue - entry.expense;
  });

  return (
      <div className='chart' style={{ width: '100%', height: '400px' }}>
        {/* Use ResponsiveContainer to make the chart responsive */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={combinedData}>
            <defs>
              {/* ...your existing defs */}
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
            <XAxis dataKey="selectedMonth" tickLine={false} />
            <YAxis dataKey="revenue" axisLine={false} tickLine={false} tickFormatter={number => `$${number}`} />
            <Tooltip />

            {/* Revenue Area */}
            <Area type="monotone" dataKey="revenue" stroke="#8aedba" fill="url(#revenueGradient)" />

            {/* Expense Area */}
            <Area type="monotone" dataKey="expense" stroke="#ffcccb" fill="url(#expenseGradient)" />

            {/* Line chart for plotting the difference */}
            <Line type="monotone" dataKey="difference" stroke="#8884d8" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Profitabilitychart;
