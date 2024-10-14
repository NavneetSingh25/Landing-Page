import { useState, useEffect } from 'react';

// Array of space-related quotes/facts
const spaceQuotes = [
  "“To confine our attention to terrestrial matters would be to limit the human spirit.” – Stephen Hawking",
  "“The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.” – Konstantin Tsiolkovsky",
  "“Space exploration is a force of nature unto itself that no other force in society can rival.” – Neil deGrasse Tyson",
  "“Houston, we have a problem.” – Jim Lovell, Apollo 13",
  "“That's one small step for a man, one giant leap for mankind.” – Neil Armstrong",
  "“Across the sea of space, the stars are other suns.” – Carl Sagan",
  "“Space, the final frontier.” – Star Trek"
];

function SpaceQuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(spaceQuotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Change the quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % spaceQuotes.length);
      setCurrentQuote(spaceQuotes[quoteIndex]);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [quoteIndex]);

  return (
    <div className="text-center py-12 bg-neutral-800 text-white transition duration-700 ease-in-out">
      <h3 className="text-2xl font-bold mb-6">Popular Space Quotes</h3>
      <p className="text-xl italic font-medium px-6">{currentQuote}</p>
    </div>
  );
}

export default SpaceQuotesSection;
