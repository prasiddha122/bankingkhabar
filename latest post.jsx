import React, { useEffect, useState } from 'react';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://bankingkhabar.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Latest Posts from Banking Khabar</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      )}
    </div>
  );
};
//nepal//
export default AllPosts;
