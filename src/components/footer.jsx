import React from 'react'

const Footer = () => {
  return (
   
<footer className="bg-white">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase">ACME</h2>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Ready to get started?</h2>
            <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                    <a className="hover:underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>
                </li>
            </ul>
        </div>
        <div className="flex flex-1">
  <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black opacity-100 "></div>
</div>
        <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase "></h2>
                <p className="text-gray-500 font-medium pt-[170px]">© 2010 — 2020   Privacy — Terms</p>
        </div>
    </div>
    </div>
</footer>

  )
}

export default Footer