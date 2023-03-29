const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    //   console.log(response);
    const data = await response.json();
    //   console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchFollowers;
