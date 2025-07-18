import { useState, useEffect, useCallback } from 'react';

const RandomString = () => {
  const [randomStr, setRandomStr] = useState('');

  const generateRandomString = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomStr(result);
  }, []);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="p-8 bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">🔐 Random String Generator</h1>

        <div className="text-center mb-6">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl text-xl font-mono text-green-800 shadow-inner">
            {randomStr}
          </div>
        </div>

        <button
          onClick={generateRandomString}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Generate New String
        </button>
      </div>
    </div>
  );
};

export default RandomString;
