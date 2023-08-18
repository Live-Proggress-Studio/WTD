const udata = localStorage.getItem("userdata");
const userData = JSON.parse(udata);

export const data = userData;
export const userModel = {
  id: data?.ID,
  name: data?.name,
  email: data?.email,
  password: data?.password,
  createdAt: data?.CreatedAt,
};
