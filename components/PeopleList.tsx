import { Data } from '@/lib/types'
import React from 'react'
import { Person } from './Person'

export const PeopleList = ({data} : {
    data : Data[]
}) => {
  return (
    <div className='grid gap-4 md:grid-cols-3 grid-cols-2'>
      {data.map((person) => {
        const {id, name, profession} = person;

        return <Person key={id} id={id} name={name} profession={profession}/>
      })}
    </div>
  )
}
