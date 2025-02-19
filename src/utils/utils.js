import DOMPurify from 'dompurify';

export function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
}

export function getSafeValue(str) {
  if (str !== '') {
    const words = str.split(/\s+/);
    const sanitizedWords = words.map(word => DOMPurify.sanitize(word.trim()));
    const sanitizedStr = sanitizedWords.join(' ');
    return sanitizedStr;
  }
  return '';
}



export const isImage = (filename, fileSize) => {
  const validExtensions = /\.(jpeg|jpg|png)$/i
  const minFileSizeKB = 20000;
  const maxFileSizeKB = 50000;

  // Check if the filename has a valid image extension
  const hasValidExtension = validExtensions.test(filename)

  const isFileSizeValid = fileSize >= minFileSizeKB && fileSize <= maxFileSizeKB

  // Return true if both conditions are met
  return hasValidExtension && isFileSizeValid
}



// react query feature

export const reactQueryFeature = { staleTime: 3600000 }
