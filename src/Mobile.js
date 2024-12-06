import React from 'react'
import './Mobile.css'

export default function Mobile(props) {
  return (
    <>
    <div className='container'>
        <div className='image'>
            <img src={props.src} alt="mob1"></img>
        </div>
        <div className='details'>
            <h3 className='name'>{props.name}</h3>
            <ul>
                <li>
                    {props.RAM} GB | {props.ROM} GB
                </li>
                <li>
                    {props.size}cm | {props.display} display
                </li>
                <li>
                    {props.cam1}Mp + {props.cam2}Mp | {props.frontcam}Mp front Camera
                </li>
                <li>
                    {props.battery}mAh Batter
                </li>
                <li>
                    {props.warranty} Warranty
                </li>
            </ul>
            <button className='cart'>Add to Cart</button>
        </div>
        <div className='price'>
            <h3>Rs.{props.price}</h3>
        </div>
    </div>
    </>
  )
}
