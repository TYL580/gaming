script
  const likeBtn = document.getElementById('like-btn');
  const likeCount = document.getElementById('like-count');

  // Завантажити попередню кількість з localStorage
  let likes = localStorage.getItem('likes') || 0;
  likeCount.textContent = likes;

  likeBtn.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes;
    localStorage.setItem('likes', likes);
  });
script