import React ,{useState} from 'react';
import './../styles.scss';
import { Link } from "react-router-dom";

function Search(){
    const [onMenu, setOnMenu] = useState(false);
    const [search,setSearch]=useState("");
    const onClickOpen = () => {
      setOnMenu(!onMenu);
    };
    const onSearch=()=>{
      console.log(search);
    }
    const onSubmit=(e)=>{
      e.preventDefault();
      console.log(search);
    }
    const onChange=(e)=>{
   
      setSearch(e.target.value);
    }
    return (
        <div className="row-column-header-top-right">
                <form onSubmit={onSubmit} className="layout-row-column-header-top-right">
                  <div
                    onClick={onClickOpen}
                    className="button-row-column-header-top"
                  >
                    <i className="material-icons w3-xlarge">menu</i>
                    {onMenu ? (
                      <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="menu-button-header-hover"
                      >
                        <div>
                          <Link to="/user">Danh Muc Menu 1</Link>
                        </div>
                        <div>
                          <Link to="/user">Danh Muc Menu 1</Link>
                        </div>
                        <div>
                          <Link to="/user">Danh Muc Menu 1</Link>
                        </div>
                        <div>
                          <Link to="/user">Danh Muc Menu 1</Link>
                        </div>
                        <div>
                          <Link to="/user">Danh Muc Menu 1</Link>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-row-column-header-top">
                    <input
                      name="search"
                      placeholder="Search..."
                      type="text"
                      className="search-header"
                      onChange={onChange}
                    />
                  </div>
                  <div className="search-row-column-header-top">
                    <i className="fa fa-search" onClick={onSearch} />
                  </div>
                </form>
              </div>
    )
}
export default Search;