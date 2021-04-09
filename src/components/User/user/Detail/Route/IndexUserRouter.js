import React from "react";
import Bill from '../bill/Bill';
import UserItem from '../userItem/UserItem';
export default function Index() {
  return (
    <>
      <UserItem />
      <div className="container-user-detail-right-layouts">
        <Bill />
      </div>
    </>
  );
}
