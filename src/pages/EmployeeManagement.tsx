"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EmployeeManagement = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Employee Management</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          This is where you'll manage your company's employees.
        </p>
        <Button asChild>
          <Link to="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmployeeManagement;