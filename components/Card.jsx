import Link from "next/link";

const Card = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto h-[calc(100vh-12rem)] items-center">
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <ul className="flex flex-col text-center gap-5">
              <img
                className="rounded-full mx-auto"
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <li>
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
              </li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
