
import React from 'react';
import { invoiceData } from '../data/invoiceData';
import CollapsibleCard from './CollapsibleCard';

const InvoiceSummary: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Invoice Summary</h2>
      <div className="grid grid-cols-1 gap-3">
        {invoiceData.map((item, index) => (
          <CollapsibleCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceSummary;
