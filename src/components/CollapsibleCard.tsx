
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { InvoiceSummary } from '../data/invoiceData';

interface CollapsibleCardProps {
  data: InvoiceSummary[];
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Calculate the grand totals
  const grandTotal = data.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      {/* Card Header */}
      <div 
        className="bg-primary text-white p-3 cursor-pointer flex justify-between items-center"
        onClick={toggleOpen}
      >
        <h3 className="font-semibold text-sm">Invoice Summary</h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-sm">{formatCurrency(grandTotal)}</span>
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
          isOpen ? 'max-h-[800px]' : 'max-h-0'
        }`}
      >
        <div className="bg-white p-3">
          <table className="w-full text-xs">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left font-medium text-gray-600 py-2">Description</th>
                <th className="text-right font-medium text-gray-600 py-2">Amount</th>
                <th className="text-right font-medium text-gray-600 py-2">GST</th>
                <th className="text-right font-medium text-gray-600 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-2 px-2 font-semibold text-sm text-gray-800">
                      {category.title} - {formatCurrency(category.total)}
                    </td>
                  </tr>
                  {category.details.map((detail, detailIndex) => (
                    <tr key={`${categoryIndex}-${detailIndex}`} className="border-b border-gray-100">
                      <td className="py-2 pl-4 text-gray-800">{detail.title}</td>
                      <td className="py-2 text-right text-gray-800">{formatCurrency(detail.amount)}</td>
                      <td className="py-2 text-right text-gray-800">{formatCurrency(detail.gst)}</td>
                      <td className="py-2 text-right font-medium text-gray-800">{formatCurrency(detail.total)}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-2 pl-4 font-semibold text-gray-800">Subtotal</td>
                    <td className="py-2 text-right font-semibold text-gray-800">
                      {formatCurrency(category.details.reduce((sum, detail) => sum + detail.amount, 0))}
                    </td>
                    <td className="py-2 text-right font-semibold text-gray-800">
                      {formatCurrency(category.details.reduce((sum, detail) => sum + detail.gst, 0))}
                    </td>
                    <td className="py-2 text-right font-semibold text-gray-800">
                      {formatCurrency(category.total)}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
            <tfoot className="border-t border-gray-200 bg-gray-100">
              <tr>
                <td className="py-3 pl-2 font-bold text-gray-800">Grand Total</td>
                <td className="py-3 text-right font-bold text-gray-800">
                  {formatCurrency(data.reduce((sum, category) => 
                    sum + category.details.reduce((detailSum, detail) => detailSum + detail.amount, 0), 0))}
                </td>
                <td className="py-3 text-right font-bold text-gray-800">
                  {formatCurrency(data.reduce((sum, category) => 
                    sum + category.details.reduce((detailSum, detail) => detailSum + detail.gst, 0), 0))}
                </td>
                <td className="py-3 text-right font-bold text-gray-800">
                  {formatCurrency(grandTotal)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
