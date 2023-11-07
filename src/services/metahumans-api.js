import api from "./api";

export async function getMetahumans() {
  const response = await api.get(`${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/metahumans`)
  return response.data
}
