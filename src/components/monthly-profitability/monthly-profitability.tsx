import { useEffect, useState } from 'react';
import './monthly-profitability.scss';

const MonthlyProfitability = ({ revenue }) => {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const updatedData = revenue.map((entry, index) => {
      const prevMonthRevenue = index > 0 ? revenue[index - 1].revenue : 0;
      const prevMonthProfitability = entry.revenue - prevMonthRevenue;

      return {
        ...entry,
        type: "revenue",
        prevMonthProfitability,
      };
    });

    setCombinedData(updatedData);
  }, [revenue]);

  return (
    <div>
      {combinedData.map((entry, index) => (
        <div key={index}>
          <span>Prev Month Profitability: </span>
          {entry.prevMonthProfitability}
        </div>
      ))}
    </div>
  );
};

export default MonthlyProfitability;
