/**
 * A utility class for common image & file operations in the browser:
 * 1) Convert File -> base64
 * 2) Convert base64 -> File
 * 3) Compress a base64 image (reduce dimensions & quality)
 */

export default class ImageHelper {
  /**
   * Converts a File (e.g. from <input type="file">) to a base64 data URL.
   * @param {File} file - The file to convert.
   * @returns {Promise<string>} base64 data URL (e.g. "data:image/png;base64,iVBORw0K...")
   */
  static fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  }

  static base64ToBlobUrl(base64, mimeType = "image/png") {
    // If there's a data URL prefix, remove it
    const rawBase64 = base64.replace(/^data:.*;base64,/, "");

    // Decode base64 to binary
    const byteChars = atob(rawBase64);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Make a Blob from the binary data
    const blob = new Blob([byteArray], { type: mimeType });

    // Turn the Blob into an object URL
    return URL.createObjectURL(blob);
  }

  /**
   * Compress a base64 image by resizing to fit within maxWidth x maxHeight
   * and converting to JPEG at a given quality.
   * @param {string} base64 - Original base64 data URL.
   * @param {number} maxWidth - Max width in pixels.
   * @param {number} maxHeight - Max height in pixels.
   * @param {number} [quality=0.8] - JPEG quality (0..1).
   * @returns {Promise<string>} A new base64 data URL (image/jpeg).
   */
  static compressBase64(base64, maxWidth, maxHeight, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        // Maintain aspect ratio while respecting maxWidth & maxHeight
        if (width > maxWidth) {
          height = Math.round(height * (maxWidth / width));
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round(width * (maxHeight / height));
          height = maxHeight;
        }

        // Draw to an off-screen canvas
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Convert canvas to a JPEG data URL at the desired quality
        const compressed = canvas.toDataURL("image/jpeg", quality);
        resolve(compressed);
      };
      img.onerror = (err) => reject(err);
      img.src = base64;
    });
  }

  /**
   * Iteratively compress a base64 image until it's under maxBytes.
   * Uses a binary search on the JPEG quality from 0..1.
   * @param {string} base64 - The original base64 data URL.
   * @param {number} maxBytes - The maximum size in bytes.
   * @param {number} [iterations=7] - How many times to refine the quality (binary search).
   * @returns {Promise<string>} The final compressed base64 data URL (image/jpeg).
   */
  static async compressBase64ToLimit(base64, maxBytes, iterations = 7) {
    // First, see if it's already under the limit:
    if (ImageHelper._base64Size(base64) <= maxBytes) {
      return base64;
    }

    let low = 0.0;
    let high = 1.0;
    let bestBase64 = base64;
    let bestSize = ImageHelper._base64Size(base64);

    for (let i = 0; i < iterations; i++) {
      const mid = (low + high) / 2;
      const compressed = await ImageHelper._compressBase64Quality(base64, mid);
      const size = ImageHelper._base64Size(compressed);

      if (size <= maxBytes) {
        // record best so far
        bestBase64 = compressed;
        bestSize = size;
        // try higher quality
        low = mid;
      } else {
        // too big, lower quality
        high = mid;
      }
    }
    return bestBase64;
  }

  // Helper: compress base64 to a certain JPEG quality
  static _compressBase64Quality(base64, quality) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext("2d").drawImage(img, 0, 0);
        const compressed = canvas.toDataURL("image/jpeg", quality);
        resolve(compressed);
      };
      img.onerror = (err) => reject(err);
      img.src = base64;
    });
  }

  // Helper: approximate size of a base64 data URL in bytes
  static _base64Size(base64) {
    const prefixIndex = base64.indexOf("base64,") + 7;
    const raw = base64.slice(prefixIndex);
    // base64 length * (3/4), ignoring padding
    return Math.floor(raw.length * 0.75);
  }
}
