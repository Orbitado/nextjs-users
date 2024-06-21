import Card from "./Card";
import getUsers from "@/app/utils/getUsers.js";

const Users = async () => {
  const users = await getUsers();

  return <Card users={users} />;
};

export default Users;
