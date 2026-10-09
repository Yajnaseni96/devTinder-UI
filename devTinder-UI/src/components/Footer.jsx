import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center bg-base-300 p-4 fixed bottom-0 ">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Yajnaseni Industries Ltd</p>
            </aside>
        </footer>
    </div>
  )
}

export default Footer
