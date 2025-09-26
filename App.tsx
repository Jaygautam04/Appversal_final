'use client';

import type React from "react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="flex h-screen bg-gray-50 text-gray-800">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </Provider>
  )
}

export default App
