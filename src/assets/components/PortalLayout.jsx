import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const PortalLayout = ({ children, title, onBack }) => {
    return (
        <div className="portal">
          <Sidebar />
          <Topbar title={title} onBack={onBack} />
          <main className="main">
          {children}
          </main>

        </div>

    )

}

export default PortalLayout