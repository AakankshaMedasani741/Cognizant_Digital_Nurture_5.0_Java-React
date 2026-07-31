/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { useState } from 'react';

// Book Details Sub-component
export function BookDetails() {
  const books = [
    { title: 'The Pragmatic Programmer', author: 'Andy Hunt & Dave Thomas', genre: 'Software Engineering', year: 1999 },
    { title: 'Clean Code', author: 'Robert C. Martin', genre: 'Best Practices', year: 2008 },
    { title: 'Introduction to Algorithms', author: 'CLRS', genre: 'Computer Science', year: 1990 }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>📚 Book Details</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ background: '#f1f2f6', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Author</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Genre</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{b.title}</td>
              <td style={{ padding: '10px' }}>{b.author}</td>
              <td style={{ padding: '10px' }}>{b.genre}</td>
              <td style={{ padding: '10px' }}>{b.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Blog Details Sub-component
export function BlogDetails() {
  const blogs = [
    { title: 'Mastering React State', author: 'Aakanksha Medasani', date: '2026-07-29', summary: 'A comprehensive guide to managing local state in React components.' },
    { title: 'Vite vs Webpack in 2026', author: 'Tech Analyst', date: '2026-07-15', summary: 'Understanding the speed benefits of Vite compared to Webpack bundling.' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>✍️ Blog Details</h3>
      {blogs.map((b, i) => (
        <div key={i} style={{ background: '#fafbfc', padding: '15px', borderRadius: '6px', border: '1px solid #e1e4e8', marginBottom: '15px' }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#0366d6' }}>{b.title}</h4>
          <span style={{ fontSize: '0.85rem', color: '#586069' }}>By {b.author} on {b.date}</span>
          <p style={{ margin: '8px 0 0 0', color: '#24292e', fontSize: '0.95rem' }}>{b.summary}</p>
        </div>
      ))}
    </div>
  );
}

// Course Details Sub-component
export function CourseDetails() {
  const courses = [
    { title: 'Java FSE Deepskilling', instructor: 'Cognizant Academy', duration: '7 Weeks', rating: '4.8 ⭐' },
    { title: 'Modern React & Redux', instructor: 'Dan Abramov', duration: '40 Hours', rating: '4.9 ⭐' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>🎓 Course Details</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        {courses.map((c, i) => (
          <div key={i} style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '15px', background: '#f9fafb' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#111827' }}>{c.title}</h4>
            <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#4b5563' }}>Instructor: {c.instructor}</p>
            <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#4b5563' }}>Duration: {c.duration}</p>
            <p style={{ margin: '5px 0', fontSize: '0.9rem', fontWeight: 'bold', color: '#059669' }}>Rating: {c.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BloggerApp() {
  const [tab, setTab] = useState('book');
  const [renderMethod, setRenderMethod] = useState('switch'); // switch, logical, ternary, variable

  // 1. Switch-Case Block method
  const renderWithSwitch = () => {
    switch (tab) {
      case 'book': return <BookDetails />;
      case 'blog': return <BlogDetails />;
      case 'course': return <CourseDetails />;
      default: return null;
    }
  };

  // 2. Element Variable method
  let contentVariable;
  if (tab === 'book') {
    contentVariable = <BookDetails />;
  } else if (tab === 'blog') {
    contentVariable = <BlogDetails />;
  } else if (tab === 'course') {
    contentVariable = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Blogger Application</h2>
      
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '25px' }}>
          {['book', 'blog', 'course'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '10px 20px',
                background: tab === t ? '#3498db' : '#f1f2f6',
                color: tab === t ? '#fff' : '#333',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'capitalize'
              }}
            >
              {t} Details
            </button>
          ))}
        </div>

        {/* Render Method Switcher */}
        <div style={{ marginBottom: '20px', padding: '10px', background: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
          <strong>Conditional Rendering Syntax Method:</strong>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
            <label>
              <input type="radio" name="method" checked={renderMethod === 'switch'} onChange={() => setRenderMethod('switch')} />
              Switch Case
            </label>
            <label>
              <input type="radio" name="method" checked={renderMethod === 'variable'} onChange={() => setRenderMethod('variable')} />
              Element Variable
            </label>
            <label>
              <input type="radio" name="method" checked={renderMethod === 'logical'} onChange={() => setRenderMethod('logical')} />
              Logical && Operator
            </label>
            <label>
              <input type="radio" name="method" checked={renderMethod === 'ternary'} onChange={() => setRenderMethod('ternary')} />
              Ternary Operator
            </label>
          </div>
        </div>

        {/* Conditional Rendering Output area */}
        <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '6px', minHeight: '150px' }}>
          {/* Method 1: Switch-case */}
          {renderMethod === 'switch' && renderWithSwitch()}

          {/* Method 2: Element Variable */}
          {renderMethod === 'variable' && contentVariable}

          {/* Method 3: Logical && */}
          {renderMethod === 'logical' && tab === 'book' && <BookDetails />}
          {renderMethod === 'logical' && tab === 'blog' && <BlogDetails />}
          {renderMethod === 'logical' && tab === 'course' && <CourseDetails />}

          {/* Method 4: Ternary operator */}
          {renderMethod === 'ternary' && (
            tab === 'book' ? <BookDetails /> : (tab === 'blog' ? <BlogDetails /> : <CourseDetails />)
          )}
        </div>

      </div>
    </div>
  );
}
