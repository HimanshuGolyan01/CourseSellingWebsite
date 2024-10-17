import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-300 text-black py-10 h-[20rem]">
         <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">X</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping & Delivery Policy</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} SkillUp. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
