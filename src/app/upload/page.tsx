import React from 'react'
import { Input } from "@/components/ui/input"


const page = () => {
    return (
        <div>

            <h1 className='text-[32px] text-center font-bold'>Upload Your Poem</h1>

            <div className='flex flex-row p-8'>
                <div className='w-1/2 flex flex-col gap-8'>
                    <Input placeholder='Poen name' />
                    <Input placeholder='Auhthor name' />
                    <Input placeholder='Poem description' />
                    <Input placeholder='Estimated poem read time' />
                </div>

                <div className='w-1/2'>

                </div>
            </div>
        </div>
    )
}

export default page