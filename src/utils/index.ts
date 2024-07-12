
const getNextValidAspectRatio = (width: number, height: number, maxHeight: number) => {
  // Maximum height constraint

  // Define the target aspect ratio (16:9)
  const targetAspectRatio = 16 / 9;

  // Ensure the height does not exceed maxHeight
  if (height > maxHeight) {
    height = maxHeight;
  }

  // Calculate the new width and height based on the aspect ratio
  let newWidth = Math.min(width, Math.round(height * targetAspectRatio));
  let newHeight = Math.min(height, Math.round(width / targetAspectRatio));

  // Adjust if the height calculated from width exceeds the original height
  if (newHeight > height) {
    newHeight = height;
    newWidth = Math.round(newHeight * targetAspectRatio);
  }

  // Adjust if the width calculated from height exceeds the original width
  if (newWidth > width) {
    newWidth = width;
    newHeight = Math.round(newWidth / targetAspectRatio);
  }

  return { width: newWidth, height: newHeight };
};

export { getNextValidAspectRatio };
