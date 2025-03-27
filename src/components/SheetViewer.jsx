import React from 'react'

const SheetViewer = ({ data }) => {
  if (!data || data.length === 0) return <div>No data available</div>

  return (
    <table className="w-full mt-4 border border-gray-300">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, idx) => (
            <th key={idx} className="border p-2 bg-gray-100 text-left">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell, j) => (
              <td key={j} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SheetViewer
