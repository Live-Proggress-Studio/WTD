const udata = localStorage.getItem("userdata");
const userData = udata !== null ? JSON.parse(udata) : null;

export const data = userData;
export const userModel = {
  id: data?.ID,
  name: data?.name,
  email: data?.email,
  password: data?.password,
  createdAt: data?.CreatedAt,
};
