import Navbar from '../components/Navbar';
import SheetViewer from '../components/SheetViewer';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const XLSX = await import('xlsx');
      const workbook = XLSX.read(evt.target.result, { type: 'binary' });
      const sheetNames = workbook.SheetNames;
      const allData = [];

      sheetNames.forEach(name => {
        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[name], { defval: '' });
        allData.push(...sheet);
      });

      setData(allData);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="bg-red-900 min-h-screen p-4">
      <Navbar />
      <div className="mt-4">
        <input type="file" accept=".xlsx, .xls" onChange={handleFile} className="mb-4" />
        <SheetViewer data={data} />
      </div>
    </div>
  );
}
