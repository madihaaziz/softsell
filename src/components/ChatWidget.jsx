// components/ChatWidget.jsx
import { useState } from 'react';
import { FaComment, FaPaperPlane } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Chat content */}
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="p-4 bg-indigo-600 text-white rounded-full shadow-lg">
          <FaComment size={24} />
        </button>
      )}
    </div>
  );
}