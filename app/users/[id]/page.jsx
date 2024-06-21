import getUsersById from "@/app/utils/getUsersById";
import ButtonId from "@/components/ButtonId";
const UsersById = async ({ params: { id } }) => {
  const user = await getUsersById(id);

  return (
    <div className="flex flex-col gap-2 h-[calc(100vh-12rem)] items-center justify-center">
      <img
        className="rounded-2xl size-96 mx-auto"
        src={user.avatar}
        alt={user.first_name}
      />
      <h1 className="text-2xl font-bold">
        {user.first_name} {user.last_name}
      </h1>
      <p>Email: {user.email}</p>
      <ButtonId id={user.id} />
    </div>
  );
};

export default UsersById;
