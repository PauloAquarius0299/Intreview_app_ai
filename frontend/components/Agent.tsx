import { AgentProps } from '@/types'
import React from 'react'
import clsx from 'clsx'

enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

const Agent = ({ username }: AgentProps) => {
  const callStatus = CallStatus.ACTIVE
  const isSpeaking = true

  const messages = [
    'Qual o seu nome?',
    'Meu nome é Joao Doe, prazer em conhecer você!'
  ]
  const lastMessage = messages[messages.length - 1]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      
      {/* Cards row */}
      <div className="flex flex-row gap-6">
        
        {/* Agent Card */}
        <div className="bg-gray-700 rounded-2xl shadow-lg p-6 w-80 h-96 flex flex-col items-center justify-center text-white relative border-4 border-white">
          {/* Avatar */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold shadow-md overflow-hidden">
            {isSpeaking && (
              <span className="absolute inset-0 animate-ping rounded-full bg-purple-400 opacity-75"></span>
            )}
            <span className="relative z-10">AG</span>
          </div>

          {/* Username */}
          <h3 className="mt-4 text-lg font-semibold">{username}</h3>

          {/* Call button */}
          <div className="w-full flex justify-center">
            {callStatus === CallStatus.CONNECTING ? (
              <button className="bg-yellow-500 text-white rounded-full py-2 px-6 mt-4 flex items-center space-x-2 cursor-pointer relative">
                <span className="absolute left-2 w-3 h-3 rounded-full animate-ping opacity-75 bg-yellow-400" />
                <span>Connecting...</span>
              </button>
            ) : callStatus === CallStatus.ACTIVE ? (
              <button className="bg-green-500 text-white rounded-full py-2 px-6 mt-4 flex items-center space-x-2 cursor-pointer relative">
                <span className="absolute left-2 w-3 h-3 rounded-full animate-ping opacity-75 bg-green-400" />
                <span>Call Active</span>
              </button>
            ) : (
              <button className="bg-red-500 text-white rounded-full py-2 px-4 mt-4 flex items-center space-x-2 cursor-pointer">
                End
              </button>
            )}
          </div>
        </div>

        {/* User Card */}
        <div className="bg-gray-700 rounded-2xl shadow-lg p-6 w-80 h-96 flex flex-col items-center justify-center text-white relative border-4 border-white">
          {/* Avatar */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-2xl font-bold shadow-md overflow-hidden">
            <span className="relative z-10">VC</span>
          </div>

          {/* Username */}
          <h3 className="mt-4 text-lg font-semibold">Usuário</h3>

          {/* Status */}
          <div className="mt-4">
            <p className="text-sm text-gray-300">Participando da chamada</p>
          </div>
        </div>
      </div>

      {/* Transcript */}
      {messages.length > 0 && (
        <div className="transcript mt-6 text-sm text-gray-200 text-center bg-gray-800 rounded-lg p-3 border border-white w-[42rem] shadow-md">
          <p
            key={lastMessage}
            className={clsx(
              'transition-opacity duration-500 opacity-0',
              'animate-fadeIn opacity-100'
            )}
          >
            {lastMessage}
          </p>
        </div>
      )}
    </div>
  )
}

export default Agent
