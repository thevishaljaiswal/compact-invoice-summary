
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { InvoiceSummary } from '../data/invoiceData';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from './ui/table';

interface CollapsibleCardProps {
  data: InvoiceSummary;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden w-full md:w-64 flex-shrink-0">
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
      {isOpen && (
        <div className="bg-white p-3">
          <table className="w-full text-xs">
            <tbody>
              {data.details.map((detail, index) => (
                <tr key={index} className={index < data.details.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="py-2 text-gray-800">{detail.title}</td>
                  <td className="py-2 text-right text-gray-800">{formatCurrency(detail.amount)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t border-gray-200">
              <tr>
                <td className="py-2 font-semibold text-gray-800">Total</td>
                <td className="py-2 text-right font-semibold text-gray-800">
                  {formatCurrency(data.total)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
