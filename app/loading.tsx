import { Spinner } from '@heroui/react'
import React from 'react'

const loading = () => {
  return (
    <div className='h-[80dvh] d-center'>
      <Spinner size="md"/>
    </div>
  )
}

export default loading
