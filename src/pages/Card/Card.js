import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { id, name, company, address } = data
    // console.log(data)
    return (
        <div className="card w-full bg-base-100 shadow-xl my-6 pr-4">
            <div className='flex items-center'>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <div className='lg:w-8'>
                            <p className='font-semibold'>{company.name}</p>
                        </div>
                        <div className='lg:w-9'>
                            <p className='font-semibold'>Contact:</p>
                            <p>{name}</p>
                        </div>
                        <div className='lg:w-8 hidden lg:block'>
                            <p className='font-semibold'>Street:</p>
                            <p>{address.street}</p>
                        </div>
                        <div className='lg:w-8'>
                            <p className='font-semibold'>City:</p>
                            <p>{address.city}</p>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end lg:ml-14">
                    <button className="btn btn-info rounded-3xl"><Link to={`/details/${id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Card;