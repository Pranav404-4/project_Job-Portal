import React from 'react'
import JobCard from './JobCard'

const jobs = [
  {
    jobTitle: 'Software Engineer',
    companyName: 'Tech Corp',
    location: 'New York, NY',
    tags: ['JavaScript', 'React', 'Node.js'],
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
    tags: ['Python', 'Machine Learning', 'SQL'],
    description: 'Analyze large datasets to extract insights and build predictive models.',
    responsibilities: [
      'Build ML models',
      'Data wrangling and preprocessing',
      'Collaborate with data engineers',
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Pandas'],
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'Creative Tech',
    location: 'Los Angeles, CA',
    tags: ['HTML', 'CSS', 'React'],
    description: 'Create stunning UI components and ensure responsive design.',
    responsibilities: [
      'Develop UI components',
      'Ensure cross-browser compatibility',
      'Work closely with designers',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    jobTitle: 'DevOps Engineer',
    companyName: 'CloudSync',
    location: 'Seattle, WA',
    tags: ['AWS', 'Docker', 'CI/CD'],
    description: 'Maintain infrastructure, automate deployments, and monitor systems.',
    responsibilities: [
      'Set up CI/CD pipelines',
      'Manage cloud infrastructure',
      'Monitor application performance',
    ],
    skills: ['AWS', 'Docker', 'Jenkins', 'Linux'],
  },
  {
    jobTitle: 'UI/UX Designer',
    companyName: 'PixelWorks',
    location: 'Austin, TX',
    tags: ['Figma', 'Adobe XD', 'Design'],
    description: 'Design user interfaces that are both visually appealing and user-friendly.',
    responsibilities: [
      'Create wireframes and prototypes',
      'Conduct user research',
      'Collaborate with product teams',
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
  },
]

const JobList = ({ searchQuery, filters }) => {
  // Normalize the search query
  const query = searchQuery.toLowerCase()

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.jobTitle.toLowerCase().includes(query)

    const matchesLocation = filters.location
      ? job.location === filters.location
      : true

    const matchesSkills =
      filters.skills.length === 0 ||
      filters.skills.every((skill) => job.skills.includes(skill))

    return matchesSearch && matchesLocation && matchesSkills
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.length === 0 ? (
        <p className="text-white col-span-full">No jobs match your filters.</p>
      ) : (
        filteredJobs.map((job, index) => <JobCard key={index} job={job} jobId={index} />)
      )}
    </div>
  )
}

export default JobList
