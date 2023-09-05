import React, { useEffect, useState } from 'react';
import './monthly-profitability.scss';

interface RevenueItem {
  revenue: number;
}

interface CombinedDataItem extends RevenueItem {
  type: string;
  prevMonthProfitability: number;
}

interface MonthlyProfitabilityProps {
  revenue: RevenueItem[];
}

const MonthlyProfitability: React.FC<MonthlyProfitabilityProps> = ({ revenue }) => {
  const [combinedData, setCombinedData] = useState<CombinedDataItem[]>([]);

  useEffect(() => {
    const updatedData: CombinedDataItem[] = revenue.map((entry, index) => {
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
