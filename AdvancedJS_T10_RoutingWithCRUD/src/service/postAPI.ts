import axios from "axios";
import type { IPost } from "../model/post";

export async function getPost() {
  try {
    const response = await axios.get("http://localhost:7070/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(post: IPost) {
  try {
    const response = await axios.post("http://localhost:7070/posts", post);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getPostById(id: number) {
  try {
    const response = await axios.get(`http://localhost:7070/posts/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function deletePostById(id: number) {
  try {
    const response = await axios.delete(`http://localhost:7070/posts/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function editPostById(id: number, content: string) {
  try {
    const response = await axios.put(`http://localhost:7070/posts/${id}`, {
      content,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
