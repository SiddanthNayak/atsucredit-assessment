import React, { useState } from "react";
import Sidenav from "../Sidenav/Sidenav";
import style from "./Panel.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

const Panel = () => {
  const [coworkerList, setCoworkerList] = useState([
    {
      id: "1",
      email: "akshay@cashwise.in",
      role: "Owner",
      verified: "true",
    },
    {
      id: "2",
      email: "shivanju@cashwise.in",
      role: "Admin",
      verified: "true",
    },
    {
      id: "3",
      email: "siddhant@cashwise.in",
      role: "Admin",
      verified: "false",
    },
  ]);
  const [noOfInvites, setNoOfInvites] = useState(2);

  let invite = [];

  for (let i = 1; i <= noOfInvites; i++) {
    invite.push(i);
  }

  const handleAdd = () => {
    invite.push(noOfInvites + 1);
    setNoOfInvites(noOfInvites + 1);
  };

  const handleDelete = (id) => {
    setCoworkerList(coworkerList.filter((item) => item.id !== id));
  };

  return (
    <Sidenav>
      <div className={style.panelContainer}>
        <div className={style.navigation}>
          <ChevronLeftIcon className={style.navButton} />
          Co-Workers
        </div>
        <div className={style.container}>
          <div className={style.box}>
            <p>Invite your co-workers to collaborate on Cashwise.</p>
            <Tooltip
              sx={{ maxWidth: "200px" }}
              title="Invited co-workers would have all the permissions except the option to delete the company"
            >
              <InfoOutlinedIcon sx={{ color: "#B5BBC5" }} />
            </Tooltip>
          </div>
          {invite
            ? invite.map((item) => {
                return (
                  <div key={item} className={style.inputBox}>
                    <input type="email" placeholder="Email" />
                    <select name="role">
                      <option value="none" selected disabled hidden>
                        Select
                      </option>
                      <option value="Admin">Admin</option>
                      <option value="Member">Member</option>
                    </select>
                  </div>
                );
              })
            : null}
          <div className={style.box}>
            <p onClick={handleAdd} className={style.add}>
              + Add More
            </p>
            <button type="button">Send Invite</button>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.tableContainer}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Co-workers Email</th>
                  <th>Role</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {coworkerList
                  ? coworkerList.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          className={` ${
                            item.role === "Owner"
                              ? style.ownerRow
                              : style.userRow
                          }`}
                        >
                          <td>{item.email}</td>
                          {item.role === "Owner" ? (
                            <td> {item.role}</td>
                          ) : (
                            <td>
                              <select name="role">
                                <option
                                  value={item.role}
                                  selected
                                  disabled
                                  hidden
                                >
                                  {item.role}
                                </option>
                                <option value="Admin">Admin</option>
                                <option value="Member">Member</option>
                              </select>
                            </td>
                          )}

                          {item.role !== "Owner" ? (
                            <>
                              <td>
                                <Tooltip title="Delete this role">
                                  <IconButton
                                    onClick={() => handleDelete(item.id)}
                                  >
                                    <DeleteOutlinedIcon color="primary" />
                                  </IconButton>
                                </Tooltip>
                              </td>
                              {item.verified === "true" ? null : (
                                <td>
                                  <Tooltip title="Resend Invite">
                                    <IconButton>
                                      <RefreshOutlinedIcon color="primary" />
                                    </IconButton>
                                  </Tooltip>
                                </td>
                              )}
                            </>
                          ) : null}
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
          {/* <div className={style.roleTitleBox}>
            <p>Co-workers Email</p>
            <p>Roles</p>
          </div>
          {coworkerList
            ? coworkerList.map((item) => {
                return (
                  <div
                    className={` ${
                      item.role === "Owner" ? style.ownerRow : style.userRow
                    }`}
                  >
                    <p>{item.email}</p>
                    <p>{item.role}</p>
                    {item.role !== "Owner" ? (
                      <>
                        <Tooltip title="Delete this role">
                          <IconButton>
                            <DeleteOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                        {item.status ? null : (
                          <Tooltip title="Resend Invite">
                            <IconButton>
                              <RefreshOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </>
                    ) : null}
                  </div>
                );
              })
            : null} */}
        </div>
      </div>
    </Sidenav>
  );
};

export default Panel;
