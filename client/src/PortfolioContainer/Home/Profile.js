import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href = 'https://www.linkedin.com/in/chris-hrutkay/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href = 'https://github.com/chris6661'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a href = 'https://www.instagram.com/chrutkay/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    {/* <a href = '/#'>
                        <i className='fa fa-facebook.square'></i>
                    </a> */}
                </div>
            </div>
        </div>
    </div>
  )
}
