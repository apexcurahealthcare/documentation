import { Spinner } from '@heroui/react'
import React from 'react'

const loading = () => {
  return (
    <div className='min-h-[80vh] d-center'>
      <Spinner size="md" />
    </div>
  )
}

export default loading
