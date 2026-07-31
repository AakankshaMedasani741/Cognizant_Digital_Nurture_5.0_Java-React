/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { Component } from 'react';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Limit to 10 posts for layout aesthetics
        this.setState({ posts: data.slice(0, 10) });
      })
      .catch(error => {
        this.setState({ error: error.message });
        alert("Error loading posts: " + error.message);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Component caught an error: ", error, info);
    this.setState({ error: error.toString() });
    alert("An error occurred: " + error.toString());
  }

  render() {
    const { posts, error } = this.state;
    if (error) {
      return (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          <h3>Error loading posts: {error}</h3>
        </div>
      );
    }

    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>Blog Posts</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          {posts.map(post => (
            <div 
              key={post.id} 
              style={{ 
                background: '#fff', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #dee2e6', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
              }}
            >
              <h3 style={{ marginTop: 0, textTransform: 'capitalize', color: '#2c3e50' }}>
                {post.title}
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                {post.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default function BlogAppDemo() {
  return (
    <div>
      <Posts />
    </div>
  );
}
