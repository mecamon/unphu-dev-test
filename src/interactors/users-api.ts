import { User } from "../models/models";

const appHeaders = new Headers();
appHeaders.append("Content-Type", "application/json");

export class UsersApi {
  static async getAll(page: number = 1, limit: number = 5): Promise<Response> {
    return await fetch(
      `http://localhost:3000/users?_page=${page}&_limit=${limit}&_sort=id&_order=desc`,
      {
        headers: appHeaders,
        method: "GET",
      }
    );
  }

  static async addOne(user: User): Promise<Response> {
    return await fetch("http://localhost:3000/users", {
      headers: appHeaders,
      method: "POST",
      body: JSON.stringify(user),
    });
  }
}
