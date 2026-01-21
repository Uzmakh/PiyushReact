//* For Example-1
export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return await response.json();
};


//* For Example-2
export const getRandomUser = async () => {
  const response = await fetch('https://randomuser.me/api/', {
    method: 'GET',
  })
  return await response.json();
}