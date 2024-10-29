import React from 'react';

const Card2 = () => {
  return (
    <div className="block max-w-[18rem] rounded-lg border border-gray-800 m-10 bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
          alt="Nature"
        />
      </div>
      <div className="p-6">
        <p className="text-base">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card2;
