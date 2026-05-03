import type { UserFormValues } from "../schema/formValidation";

const API_URL = import.meta.env.VITE_LOCALSERVER_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const addUser = async (user: UserFormValues) => {
  //simulating backend id and createdAt auto generation
  const generateId = Math.floor(Date.now() * 1000);
  const createdAt = new Date().toISOString().split('T')[0];
  try {
    const newData = { ...user, id: generateId, createdAt };
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newData),
    });
    if (!res.ok) {
      throw new Error("Failed to create user");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateUser = async (user: UserFormValues) => {
  try {
    const res = await fetch(`${API_URL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error("Failed to update user");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    })
    if (!res.ok) {
      throw new Error("Failed to delete user");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return { data: error };
  }
}