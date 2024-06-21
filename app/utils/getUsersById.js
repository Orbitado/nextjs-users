const getUsersById = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

export default getUsersById;
