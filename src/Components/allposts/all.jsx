import "./all.css"
import uyy from "../../Assets/img/uy.png"

import React from 'react'

export const All = () => {
  return <div className="All">
    
    <div className="all container">

        <div className="all__div">
            <h2 className="all__text">Featured Post</h2>
            <img src={uyy} alt="newuy" width="669" height="352" />
            <p className="all__textp">By John Doe   l   May 23, 2022</p>
            <h3 className="all__textp2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
            <p className="all__textp3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a className="all__link" href="#">Read More</a>
        </div>

        <div className="all__div2">
            <h2 className="all__texth">All Posts</h2>

            <ul className="all__list">
                <li>
                    <p className="all__p">By  <span className="all__span">John Deo</span>  l   Aug 23, 2021 </p>
                    <h4 className="all__h">8 Figma design systems that you can download for free today.</h4>
                </li>

                <li>

                </li>

                <li>

                </li>

                <li>

                </li>

            </ul>
        </div>
    </div>

  </div>
}

export default All