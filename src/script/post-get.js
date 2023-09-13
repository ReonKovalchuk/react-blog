export const getPostsData = async () => {
  const pageParams = new URLSearchParams(window.location.search);
  const page = pageParams.get('page')
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page === null ? 1 : page}`);
  const result = await response.json();

  for (const post of result.data) {
    post.likes = randomizer(0, 100);
    const comments = await getComments(post.id);
    post.commentsN = comments.length
  }

  return {
    posts: result.data,
    pagination: result.meta.pagination,
  };
}

const randomizer = (m, n) => {
  const range = Math.abs(m - n);
  const numberInRange = Math.round(Math.random() * range);
  const min = Math.min(m, n);

  return min + numberInRange;
}

export const getPostByID = async () => {
  const pageParams = new URLSearchParams(window.location.search);
  const id = pageParams.get('id');
  const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
  const result = await response.json();
  result.data.likes = randomizer(0, 100);

  return result.data;
}

export const getComments = async (id) => {
  if (id === undefined) {
    const pageParams = new URLSearchParams(window.location.search);
    id = pageParams.get('id');
  }
  const response = await fetch(`https://gorest.co.in/public-api/posts/${id}/comments`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 161c84f7626735824ed67b3d40a6b175c70dcfb43598bd9100dfebd43849e1e5',
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();

  return result.data;
}

export const postComment = async ({ username, email, body }) => {
  const pageParams = new URLSearchParams(window.location.search);
  const id = pageParams.get('id');
  const response = await fetch(`https://gorest.co.in/public-api/posts/${id}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      name: username,
      post_id: parseInt(id),
      email: email,
      body: body,
    }),
    headers: {
      Authorization: 'Bearer 161c84f7626735824ed67b3d40a6b175c70dcfb43598bd9100dfebd43849e1e5',
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  return result;
}