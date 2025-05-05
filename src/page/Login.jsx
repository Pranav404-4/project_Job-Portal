import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format"

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

    if (!password) newErrors.password = "Password is required"
    else if (!strongPasswordRegex.test(password)) {
      newErrors.password = "Password must be 8+ characters, include uppercase, lowercase, number, and special character"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      
      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('username', email.split('@')[0]) 
      
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
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
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 text-white border-b-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md placeholder-gray-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
          </div>

          <div className="flex flex-wrap justify-between items-center text-sm text-gray-300 gap-2">
            <p className="whitespace-nowrap">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-400 underline">Register</Link>
            </p>
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="whitespace-nowrap">Remember me</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
