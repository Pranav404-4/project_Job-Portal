import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';  
import JobList from '../components/JobList';    
import FilterSidebar from '../components/FilterSidebar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const isAuthenticated = localStorage.getItem('isAuth') === 'true';
  const [filters, setFilters] = useState({ location: '', skills: [] })

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <Navbar setSearchQuery={setSearchQuery} />
      <h1 className="text-3xl font-bold">Welcome to the Job</h1>
      <p className="mt-2 text-gray-300 text-lg font-medium tracking-wide">
        Explore top job opportunities tailored for you and take the next step in your career journey.
      </p>

        <div className="mt-8 flex flex-col-reverse lg:grid lg:grid-cols-4 gap-8">

  <div className="lg:col-span-3">
    <JobList searchQuery={searchQuery} filters={filters} />
  </div>

  <div className="lg:col-span-1">
    <FilterSidebar filters={filters} setFilters={setFilters} />
  </div>
</div>
    </div>
  );
}
