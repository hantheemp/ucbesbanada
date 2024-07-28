import Link from "next/link";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import DeleteDropDown from "./DeleteDropDown";
import { getUser } from "@/actions/users";
import { getTranslations } from "next-intl/server";

export default async function UserTable() {
  const users = await getUser();
  const translations = await getTranslations("User");

  return (
    <div className="text-center justify-center items-center">
      <Link className="btn btn-ghost" href="user/new">
        {translations("user-add")}
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>{translations("user-table-name")}</th>
            <th>{translations("user-table-surname")}</th>
            <th>{translations("user-table-email")}</th>
            <th>{translations("user-table-telephoneNumber")}</th>
            <th>{translations("user-table-roleFilter")}</th>
            <th>{translations("user-table-couponCode")}</th>
            <th>{translations("user-table-pointsGained")}</th>
            <th>{translations("user-table-actions")}</th>
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
                        {translations("user-table-edit")}
                        <PiNotePencilBold />
                      </Link>
                      <DeleteDropDown id={user.id} type="USER" />
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
