import React from 'react'
import { Card } from './card'

const allDetails = [
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    },
    {
        author: "Sample Author",
        readTime: "2 min read",
        title: "kavya Pankti",
        description: "This is just a sample description. No need to woory",
        image: "/image5.jpg"
    }
]

const Featured = () => {

    return (
        <div>
            <h1 className='text-[52px] font-bold text-center m-8'>Featured poems</h1>

            {/* Featured */}
            <div className='flex flex-row flex-wrap gap-4 justify-around my-8'>
                {
                    allDetails.map((card, index) => (
                        <Card key={index} details={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default Featured