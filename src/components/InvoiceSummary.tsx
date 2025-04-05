
import React from 'react';
import { invoiceData } from '../data/invoiceData';
import CollapsibleCard from './CollapsibleCard';

const InvoiceSummary: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Invoice Summary</h2>
      <CollapsibleCard data={invoiceData} />
    </div>
  );
};

export default InvoiceSummary;
