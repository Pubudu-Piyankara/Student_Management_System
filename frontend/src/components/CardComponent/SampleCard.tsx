import React from 'react'
import { MdAnnouncement } from 'react-icons/md';

type Props = {title: string, description: string, id: number}

const SampleCard = ({title, description,id}: Props) => {
    return (
        <div>
          <div className=" px-3 py-5 w-80 bg-white border border-gray-200 rounded-lg shadow  ">
            <div className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
              aria-hidden="true"
            >
            <MdAnnouncement className='w-10 h-10' />
            </div>
            
            <a href={`msgDetail/${id}`}>
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-500 hover:underline ">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 ">{description}</p>
            <a
              href={`msgDetail/${id}`}
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              see more details
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      );
}

export default SampleCard