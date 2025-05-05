import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = ({ job, jobId }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
      <p className="text-gray-400">{job.companyName}</p>
      <p className="text-gray-500">{job.location}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {job.tags.map((tag, i) => (
          <span key={i} className="bg-blue-600 px-2 py-1 rounded text-sm">{tag}</span>
        ))}
      </div>

      <Link
         to={`/job-details/${jobId}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  )
}

export default JobCard
