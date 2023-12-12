import React from 'react';

const Share = ({ url, title }) => {
  const handleShare = async () => {
    try {
      if (navigator.canShare) {
        await navigator.share({
          title,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Url Copied to clipboard');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button className="p-2 rounded bg-orange text-white" onClick={handleShare}>
      Share
    </button>
  );
};

export default Share;