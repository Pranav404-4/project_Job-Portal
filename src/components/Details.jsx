import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const jobData = [
  {
    jobTitle: 'Software Engineer',
    companyName: 'Tech Corp',
    location: 'New York, NY',
    description: 'Develop and maintain web applications using modern frameworks.',
    responsibilities: [
      'Design and implement scalable software',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Git'],
  },
  {
    jobTitle: 'Data Scientist',
    companyName: 'Data Labs',
    location: 'San Francisco, CA',
    description: 'Analyze large datasets to extract insights and build predictive models.',
    responsibilities: [
      'Build ML models',
      'Data wrangling and preprocessing',
      'Collaborate with data engineers',
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Pandas'],
  },
]

const Details = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const job = jobData[jobId]

  if (!job) return <p className="text-white">Job not found.</p>

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{job.jobTitle}</h1>
      <p className="text-gray-400">{job.companyName} • {job.location}</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="mt-2 text-gray-300">{job.description}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Responsibilities</h2>
        <ul className="list-disc ml-6 text-gray-300 mt-2">
          {job.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Skills Required</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {job.skills.map((skill, i) => (
            <span key={i} className="bg-green-600 px-2 py-1 rounded text-sm">{skill}</span>
          ))}
        </div>
      </section>

      <button
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
        onClick={() => alert('Applied (dummy)')}
      >
        Apply
      </button>
    </div>
  )
}

export default Details
