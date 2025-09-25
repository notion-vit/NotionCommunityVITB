import { useState, useEffect } from 'react';
import { X } from 'lucide-react';


interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  registrationUrl: string;
}

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  registrationUrl,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ marginTop: '4rem' }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative bg-black border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md transform transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors z-10"
          style={{ top: '0.75rem', right: '0.75rem' }}
        >
          <X size={20} className="text-gray-300" />
        </button>

        <div className="p-3 sm:p-5">
          <div className="aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden rounded-xl mb-4 sm:mb-6">
            <img
              src="https://raw.githubusercontent.com/notion-vit/NotionCommunityVITB/refs/heads/main/images/recruitment_poster.png"
              alt="Event Poster"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              ✨Notion Community Recruitment Drive✨
            </h2>
            <p className="text-sm sm:text-base text-gray-300 line-clamp-2">
              🚀 We Have a Spot For You! 🚀
            </p>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p className="text-gray-300">
                <span className="font-semibold text-white">💻 Tech & Corporate Teams</span> 
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">🎨 Creative & Media Teams</span> 
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">✍️ Content & Anchoring Teams</span>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">📢 Outreach & Operations Teams</span> 
              </p>
            </div>
            {
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 sm:py-3 px-4 sm:px-6 text-center bg-white text-black text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              JOIN NOW
            </a>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal; 