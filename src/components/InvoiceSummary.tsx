
import React from 'react';
import { invoiceData } from '../data/invoiceData';
import CollapsibleCard from './CollapsibleCard';

const InvoiceSummary: React.FC = () => {
  // Create an array of all unique description titles from all invoice details
  const allDescriptions = invoiceData.reduce((descriptions, item) => {
    item.details.forEach(detail => {
      if (!descriptions.includes(detail.title)) {
        descriptions.push(detail.title);
      }
    });
    return descriptions;
  }, [] as string[]);

  // Add a "Total" row
  allDescriptions.push("Total");

  return (
    <div className="w-full mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Invoice Summary</h2>
      <div className="flex flex-col md:flex-row">
        {/* Description Column */}
        <div className="w-full md:w-1/5 md:pr-4">
          <div className="p-3 font-semibold text-sm bg-gray-100 rounded-tl-lg rounded-tr-lg md:rounded-tr-none">
            Description
          </div>
          <div className="mt-1">
            {allDescriptions.map((description, index) => (
              <div 
                key={index} 
                className={`py-2 pl-3 text-xs font-medium text-gray-800 ${
                  index === allDescriptions.length - 1 ? 'mt-2 border-t border-gray-200 pt-3 font-semibold' : ''
                }`}
              >
                {description}
              </div>
            ))}
          </div>
        </div>
        
        {/* Cards Column */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
          {invoiceData.map((item, index) => (
            <CollapsibleCard 
              key={index} 
              data={item} 
              allDescriptions={allDescriptions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
