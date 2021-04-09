import React from "react";
import "./styles.scss";
export default function EditUser() {
  return (
    <>
      <div className="container">
        <div className="container-layout-edit-user">
          <div className="container-layout-form-user">
            <div className="layout-edit-user-left">
              <div className="layout-left-form-img">
                <form>
                  <div className="img-user-edit">
                    <img src="https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-19.jpg" alt="###" />
                  </div>
                  <div className="file-user-edit">
                      <input type="file"  />
                  </div>
                  <div className="button-user-edit">
                      <input type="submit" value="Lưu Hình Ảnh" />
                  </div>
                </form>
              </div>
            </div>
            <div className="layout-edit-user-right">
                <form>
                <div className="input-layout-edit-user-right">
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <div className="button-user-edit">
                      <input type="submit" value="LƯU THÔNG TIN" />
                     </div>
                </div>
                <div className="input-layout-edit-user-right">
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                    <span>UserName</span>
                    <input className="input-layout-edit-user-right-text" placeholder="text..."  />
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
