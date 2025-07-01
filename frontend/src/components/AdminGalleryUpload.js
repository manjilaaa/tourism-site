import { useState } from 'react';

export default function AdminGalleryUpload() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    const res = await fetch('/api/gallery/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <input type="text" placeholder="Title (optional)" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Upload Image</button>
    </form>
  );
}
