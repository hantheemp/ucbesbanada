import Link from "next/link";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import DeleteDropDown from "./DeleteDropDown";
import { getUser } from "../actions/users";

export default async function UserTable() {
  const users = await getUser();

  return (
    <div className="text-center justify-center items-center">
      <Link className="btn btn-ghost" href="/home/user/new">
        Add New User
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Telephone Number</th>
            <th>Role Filter</th>
            <th>Coupon Code</th>
            <th>Points Gained</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.telephone}</td>
              <td>{user.roleFilter}</td>
              <td>{user.couponCode}</td>
              <td>{user.pointsGained}</td>
              <td>
                <div className="dropdown dropdown-left">
                  <div tabIndex={0} role="button" className="btn m-1">
                    <PiDotsThreeOutlineVerticalBold />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <Link href={`user/${user.id}/edit/`}>
                        Edit
                        <PiNotePencilBold />
                      </Link>
                      <DeleteDropDown id={user.id} />
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
