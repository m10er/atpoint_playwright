interface Resources {
    jobsUrl: string;
  }
  
  // Base URL
  const BASE_URL = 'https://atpoint.ch';
  
  // Ortak path sabitleri
  const PATHS = {
    JOBS: '/jobs',
  };
  
  // Dillerin kendi URL'leri
  const BASE_URLS = {
    DE: BASE_URL,
    EN: `${BASE_URL}/en`,
  };
  
  // Resources nesneleri
  export const ResourcesDE: Resources = {
    jobsUrl: `${BASE_URLS.DE}${PATHS.JOBS}`,
  };
  
  export const ResourcesENG: Resources = {
    jobsUrl: `${BASE_URLS.EN}${PATHS.JOBS}`,
  };
  