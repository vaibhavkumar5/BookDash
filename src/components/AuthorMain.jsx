import React from 'react'
import AuthorTable from './AuthorTable'

const AuthorMain = () => {
  return (
    <>
        <div className="p-4 mt-14 sm:ml-64">
        <div className="p-4 border-2  border-gray-200 rounded-lg">
          <div className="flex items-center justify-center h-full mb-4 rounded bg-gray-50">
            <p className="text-4xl text-red-400">
              Author Data
            </p>
          </div>

          <div className="p-5 mt-5 ">
          <AuthorTable/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default AuthorMain