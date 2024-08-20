import React from 'react'
import logo from "../assets/logo.png"
import "./Table.css"


const Table = () => {
  return (
    <div className='table-container'> 
         <span>GREATEST IN THE MARKET</span>
    <div className="table-control">
    <div className="table-header">
         <h2>Trending coins</h2>
     </div>
     <div className="table-body">
         <table>
             <thead>
                 <tr>
                     <th>Ranking</th>
                     <th>Coin name</th>
                     <th>Last price</th>
                     <th>24h Change</th>
                     <th>Market cap</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>1.</td>
                     <td><img src={logo} alt="" /> Bitcoin </td>
                     <td>1231</td>
                     <td>12%</td>
                     <td>1111111</td>
                 </tr>
                 <tr>
                     <td>2.</td>
                     <td><img src={logo} alt="" /> Bitcoin </td>
                     <td>1231</td>
                     <td>12%</td>
                     <td>1111111</td>
                 </tr>
                 <tr>
                     <td>3.</td>
                     <td><img src={logo} alt="" /> Bitcoin </td>
                     <td>1231</td>
                     <td>12%</td>
                     <td>1111111</td>
                 </tr>
             </tbody>
         </table>
     </div>
    </div>
    </div>
  )
}

export default Table