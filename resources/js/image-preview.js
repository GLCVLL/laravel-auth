const placeholder = 'https://marcolanci.it/utils/placeholder.jpg';
const imageField = document.getElementById('cover_image');
const previewField = document.getElementById('image-preview');

imageField.addEventListener('input', () => {
    previewField.src = imageField.value || placeholder;
});