import React from 'react'

export default function About(props) {
  return (
    <>
    <div className={`my-4 form-check-label text-${props.mode==='dark'?'light':'dark'}`}>
        <h2>About Us</h2>
        <p>---&#62; PlayWithTxt &#60;---</p>
        <p>This is a <strong>Single Page Application</strong> which is created & developed in <strong>REACT</strong> js </p>
        <p><strong>Developer</strong> - Sahil Kumar.</p>
        <img src='favicon.ico' alt="PlayWithText.icon" />
    </div>
    </>
  )
}
