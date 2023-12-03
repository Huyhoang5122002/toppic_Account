export const serverBaseUrl = "http://localhost:8080";

export const buildImageUrl = (imagePath) => {
  return `${serverBaseUrl}/api/projects/images?imagePath=${encodeURIComponent(imagePath)}`;
};