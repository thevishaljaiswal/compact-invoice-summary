
import InvoiceSummary from "../components/InvoiceSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Invoice Dashboard</h1>
        <p className="text-gray-600 mb-6 text-center text-sm">View your financial summary below</p>
        <InvoiceSummary />
      </div>
    </div>
  );
};

export default Index;
