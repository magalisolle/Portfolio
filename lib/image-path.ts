/** Return the path for a `/public/images` asset. Next.js Image and quoted CSS url() handle spaces natively. */
export function imagePath(filename: string): string {
  return `/images/${filename}`;
}
