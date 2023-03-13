import { User } from "../models/models";

const appHeaders = new Headers();
appHeaders.append("Content-Type", "application/json");

export class UsersApi {
  async getAll(): Promise<User> {
    const res = await fetch("http://localhost:3000/users", {
      headers: appHeaders,
      method: "GET",
    });
    return await res.json();
  }

  async addOne(user: User): Promise<any> {
    const res = await fetch("http://localhost:3000/users", {
      headers: appHeaders,
      method: "POST",
      body: JSON.stringify(user),
    });
    return await res.json();
  }
}
