import React from 'react'
import { useParams } from 'react-router-dom'
import jobData from '../components/JobData' 
import { Navbar } from '../Components/navbar'

const JobDetails = () => {
  const { jobId } = useParams()
  const job = jobData[jobId] 

  if (!job) return <p className="text-white">Job not found</p>

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <Navbar/>
      <div className="px-4 sm:px-6 lg:px-20 py-8">
      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-blue-400">
        {job.jobTitle}
      </h1>
      <p className="text-lg sm:text-xl mb-1">{job.companyName}</p>
      <p className="text-gray-400 mb-6 text-sm sm:text-base">{job.location}</p>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-400">Description</h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">{job.description}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-400">Responsibilities</h2>
        <ul className="list-disc ml-5 sm:ml-6 text-gray-300 mt-2 space-y-1 text-sm sm:text-base">
          {job.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-400">Skills Required</h2>
        <div className="flex flex-wrap gap-2 mt-2">
        {job.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-green-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow"
          >
          {skill}
          </span>
          ))}
        </div>
      </section>

        <button
         className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 shadow-lg"
         onClick={() => alert('Applied (dummy)')}
        >
         Apply Now
        </button>
    </div>
  </div>
  )
}

export default JobDetails
