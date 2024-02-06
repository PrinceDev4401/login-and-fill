const imageInput = document.getElementById('imageInput');
const selectedImage = document.getElementById('selectedImage');

imageInput.addEventListener('change', function() {
  const file = this.files[0];  

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      selectedImage.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});