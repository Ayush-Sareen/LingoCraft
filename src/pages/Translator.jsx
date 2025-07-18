import { useState } from 'react';
import axios from 'axios';

const Translator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [lang, setLang] = useState('es');

  const translateText = async () => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `en|${lang}`,
        },
      });
      setTranslated(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Translation failed', error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-tr from-purple-100 via-pink-100 to-blue-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">🌐 Text Translator</h1>

        <textarea
          className="w-full p-4 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg resize-none"
          rows="5"
          placeholder="Type your English sentence here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex items-center mt-4 gap-4">
          <label className="font-semibold text-gray-700">Translate to:</label>
          <select
            className="p-2 rounded-lg border-2 border-purple-300 focus:ring-purple-500"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="de">German</option>
          </select>
        </div>

        <button
          onClick={translateText}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Translate
        </button>

        {translated && (
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-4 rounded-xl text-purple-900">
            <h2 className="font-bold mb-2">Translated Text:</h2>
            <p className="text-lg">{translated}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
