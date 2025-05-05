import React from 'react'

const FilterSidebar = ({ filters, setFilters }) => {
  const handleLocationChange = (e) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }))
  }

  const handleSkillChange = (e) => {
    const value = e.target.value
    setFilters((prev) => ({
      ...prev,
      skills: prev.skills.includes(value)
        ? prev.skills.filter((s) => s !== value)
        : [...prev.skills, value],
    }))
  }

  const skills = ['React', 'Node.js', 'Python', 'SQL', 'CSS', 'Machine Learning', 'Adobe XD']

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>

      {/* Location Dropdown */}
      <div className="mb-4">
        <label className="block mb-1 text-gray-300">Location</label>
        <select
          value={filters.location}
          onChange={handleLocationChange}
          className="w-full px-3 py-2 bg-gray-700 text-white rounded"
        >
          <option value="">All</option>
          <option value="New York, NY">New York</option>
          <option value="San Francisco, CA">San Francisco</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* Skills Multi-Select */}
      <div>
        <label className="block mb-1 text-gray-300">Skills</label>
        {skills.map((skill) => (
          <div key={skill} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={skill}
              checked={filters.skills.includes(skill)}
              onChange={handleSkillChange}
              className="mr-2"
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterSidebar
