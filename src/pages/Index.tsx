import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PhotoGallery from "@/components/PhotoGallery"; // Import the new PhotoGallery component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full max-w-6xl">
        {/* Left Column: Photo Gallery */}
        <div className="w-full lg:w-1/2">
          <PhotoGallery />
        </div>

        {/* Right Column: Welcome Message */}
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to Your Company's Dashboard</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Start building your amazing project here!
          </p>
          <Button asChild className="mt-4">
            <Link to="/employees">Go to Employee Management</Link>
          </Button>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;