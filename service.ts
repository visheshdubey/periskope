interface RequestOptions {
  method: string;
  body?: string | FormData;
}
const BASE_URL = "http://localhost:3000/api";
const fetchData = async (
  url: string,
  options: RequestOptions,
  contentType: string | undefined = "application/json"
) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": contentType,
    },
    ...options,
  });

  // if (response.status === 401) {
  //    throw new Error('Unauthorized');
  // }
  if (response.status === 400) {
    throw new Error((await response.json()).message);
  } else if (response.status === 500) {
    throw new Error("Something went wrong!");
  }
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const user = {
  getGroups: async () => {
    const url = `${BASE_URL}/group`;
    return fetchData(url, {
      method: "GET",
    });
  },
};
