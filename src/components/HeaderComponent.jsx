import React from 'react'

export const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='http://localhost:3000' className='navbar-brand'>
                        Task Management Application
                    </a>
                </div>
            </nav>
        </header>
    </div>
  )
}
