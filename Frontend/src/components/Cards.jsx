import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <a
                href={item.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
