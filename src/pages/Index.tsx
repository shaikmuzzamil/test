import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to Your Company's Dashboard</h1> {/* Changed text here */}
        <Button asChild className="mt-4">
          <Link to="/employees">Go to Employee Management</Link>
        </Button>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;