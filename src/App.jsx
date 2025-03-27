import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/user')
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="p-10 text-center">Loading...</div>

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Walsh Secure Viewer</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            {data.length > 0 && data[0].map((col, idx) => (
              <th key={idx} className="border p-2 bg-gray-100">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App