
import React from 'react';
import { invoiceData } from '../data/invoiceData';
import CollapsibleCard from './CollapsibleCard';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';

const InvoiceSummary: React.FC = () => {
  return (
    <div className="w-full mx-auto overflow-x-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Invoice Summary</h2>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col md:flex-row gap-3 min-w-max">
          {invoiceData.map((item, index) => (
            <CollapsibleCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
