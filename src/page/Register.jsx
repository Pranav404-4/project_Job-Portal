import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!name) newErrors.name = "Name is required"
    else if (/\d/.test(name)) newErrors.name = "Name should not contain numbers"

    if (!email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format"

    if (!contact) newErrors.contact = "Phone No. is required"
    else if (!/^\d{10}$/.test(contact)) newErrors.contact = "Phone No. must be exactly 10 digits"

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    if (!password) newErrors.password = "Password is required"
    else if (!strongPasswordRegex.test(password)) {
      newErrors.password = "Password must be 8+ characters, include uppercase, lowercase, number, and special character"
    }

    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password"
    else if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})

      // Simulate successful registration
      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('username', name)

      // Redirect to home
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 text-white border-b-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md placeholder-gray-400"
              placeholder="Full Name"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 text-white border-b-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md placeholder-gray-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

            <input
              id="contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="bg-gray-700 text-white border-b-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md placeholder-gray-400"
              placeholder="Enter your Phone No."
            />
            {errors.contact && <p className="text-red-400 text-sm">{errors.contact}</p>}

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 text-white border-b-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md placeholder-gray-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-700 text-white border-b-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md placeholder-gray-400"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <p className="text-sm text-gray-300 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 underline">Login</Link>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
