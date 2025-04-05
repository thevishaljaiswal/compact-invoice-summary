
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { InvoiceSummary } from '../data/invoiceData';

interface CollapsibleCardProps {
  data: InvoiceSummary;
  allDescriptions: string[];
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({ data, allDescriptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Function to find the amount for a specific description
  const getValueForDescription = (description: string) => {
    // If it's the total row
    if (description === "Total") {
      return formatCurrency(data.total);
    }
    
    // Find the detail with the matching title
    const detail = data.details.find(d => d.title === description);
    return detail ? formatCurrency(detail.total) : "-";
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      {/* Card Header */}
      <div 
        className={`${data.color} p-3 cursor-pointer flex justify-between items-center`}
        onClick={toggleOpen}
      >
        <h3 className="font-semibold text-sm">{data.title}</h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-sm">{formatCurrency(data.total)}</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </div>

      {/* Collapsible Content */}
      <div 
        className={`animate-collapse overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-white p-3">
          {allDescriptions.map((description, index) => (
            <div 
              key={index} 
              className={`py-2 text-right text-xs ${
                index === allDescriptions.length - 1 ? 'mt-2 border-t border-gray-200 pt-3 font-semibold' : ''
              }`}
            >
              {getValueForDescription(description)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
