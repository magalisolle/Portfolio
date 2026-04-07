/** Encode filenames for `/public/images` assets (handles spaces and special chars). */
export function imagePath(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}
