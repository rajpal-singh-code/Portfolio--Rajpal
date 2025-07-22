import React from 'react';
import sorting from '../assets/sorting.png';
import cpp from '../assets/cpp.png';

const Blogcard = () => {
  const data = [
    {
      heading: "Sorting: Bubble Sorting, Selection Sorting, Insertion Sorting",
      link: "https://medium.com/@rajpalku2022/understanding-sorting-algorithms-7a2791904227",
      imgs: sorting
    },
    {
      heading: "C++ and React Similarities and Differences",
      link: "https://medium.com/@rajpalku2022/learning-react-as-a-c-programmer-similarities-and-differences-841cfba60106",
      imgs: cpp
    }
  ];

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="bg-gray-900 px-4 py-3 rounded-xl h-auto w-full md:w-90 lg:w-120 mb-4">
          <div className="h-fit w-full overflow-hidden rounded-t-xl">
            <img src={item.imgs} alt="blog" className="object-cover hover:scale-110 transition-all ease-in-out overflow-hidden" />
          </div>
          <div className='text-2xl'>
            <h3>{item.heading}</h3>
            <a
              href={item.link}
              className='text-[17px] font-thin border-b opacity-75'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read full blog...
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogcard;
