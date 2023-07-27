import {AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line} from 'recharts';

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
              {/* Revenue Gradient */}
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8aedba" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8aedba" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="descriptionRevenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8aedba" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#8aedba" stopOpacity={0.1} />
              </linearGradient>

              {/* Expense Gradient */}
              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffcccb" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#ffcccb" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="descriptionExpenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffcccb" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ffcccb" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
            <XAxis dataKey="selectedMonth" tickLine={false} />
            <YAxis dataKey="revenue" axisLine={false} tickLine={false} tickFormatter={number => `$${number}`} />

            <Area type="monotone" dataKey="revenue" stroke="#8aedba" fill="url(#revenueGradient)" />
            <Area type="monotone" dataKey="expense" stroke="#ffcccb" fill="url(#expenseGradient)" />
            <LineChart data={combinedData}>
              <Line
                  type="monotone"
                  dataKey="difference"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={false} />
            </LineChart>

          </AreaChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Profitabilitychart;
