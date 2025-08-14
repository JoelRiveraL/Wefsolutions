import React, { useState } from 'react'
import { ESETService } from '../components/services/ESETService'
import { AdobeService } from '../components/services/AdobeService'
import { MicrosoftService } from '../components/services/MicrosoftService'
import { AutodeskService } from '../components/services/AutodeskService'
import { WindowsService } from '../components/services/WindowsService'

export const Servicios = () => {
  const [activeTab, setActiveTab] = useState('ESET')

  const tabs = [
    { 
      id: 'ESET', 
      name: 'ESET', 
      icon: '🛡️', 
      color: 'from-cyan-500 to-blue-600',
      activeColor: 'bg-cyan-500'
    },
    { 
      id: 'Adobe', 
      name: 'Adobe', 
      icon: '🎨', 
      color: 'from-red-500 to-orange-500',
      activeColor: 'bg-red-500'
    },
    { 
      id: 'Microsoft', 
      name: 'Microsoft', 
      icon: '💼', 
      color: 'from-blue-600 to-blue-800',
      activeColor: 'bg-blue-600'
    },
    { 
      id: 'Autodesk', 
      name: 'Autodesk', 
      icon: '📐', 
      color: 'from-green-500 to-teal-600',
      activeColor: 'bg-green-500'
    },
    { 
      id: 'Windows', 
      name: 'Windows', 
      icon: '🪟', 
      color: 'from-indigo-600 to-purple-700',
      activeColor: 'bg-indigo-600'
    }
  ]

  const renderActiveService = () => {
    switch(activeTab) {
      case 'ESET':
        return <ESETService />
      case 'Adobe':
        return <AdobeService />
      case 'Microsoft':
        return <MicrosoftService />
      case 'Autodesk':
        return <AutodeskService />
      case 'Windows':
        return <WindowsService />
      default:
        return <ESETService />
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Licencias de Software
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Licencias originales de las mejores marcas tecnológicas para impulsar tu productividad
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105
                ${activeTab === tab.id 
                  ? `${tab.activeColor} text-white shadow-lg` 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="transition-all duration-300">
          {renderActiveService()}
        </div>
      </div>
    </div>
  )
}