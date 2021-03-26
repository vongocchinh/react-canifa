import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return (
<div className="row-header-bottom-button">
              <ul>
                <li>
                  <Link to="/" className="active">
                    HOME
                  </Link>
                </li>
                <li className="CROSS-BODY">
                  CROSSBODY
                  <div className="CROSS-BODY-hover-button">
                    <div className="triangle-up" />
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="CROSS-BODY">
                  SATCHEL TOTES
                  <div className="CROSS-BODY-hover-button">
                    <div className="triangle-up" />
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/user">BLOG LIST</Link>
                </li>
                <li>
                  <Link to="/user">CART</Link>
                </li>
                <li>
                  <Link to="/user">CHECKOUT</Link>
                </li>
                <li>
                  <Link to="/user">CONTACT</Link>
                </li>
              </ul>
            </div>
    )
}
export default Menu;