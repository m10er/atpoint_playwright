/**
 * Interface defining the application's resource URLs
 */
interface Resources {
  /** The base URL of the application */
  readonly BASE_URL: string;
  
  /** The URL for the contact page */
  readonly KONTAKT_URL: string;
}

/**
* Base URL for the application
* @private
*/
const baseURL = "https://www.infometis.ch/";

/**
* Application resource URLs
* Contains all the necessary URLs for the application
* @constant
*/
export const Resources: Resources = {
  BASE_URL: baseURL,
  KONTAKT_URL: `${baseURL}kontakt/`
} as const;

/**
* Gets the complete URL for a given path
* @param path - The path to append to the base URL
* @returns The complete URL
*/
export function getUrl(path: string): string {
  return `${baseURL}${path}`;
}



