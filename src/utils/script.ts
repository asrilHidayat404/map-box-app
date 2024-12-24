export const UrlFormatting = (path: string) => {
    if (!path) return ""; // Handle undefined or empty paths
    return path.startsWith("/") ? path.slice(1) : path; // Remove leading slash
  };


export const generateBreadcrumbs = (path: string) => {
    if (!path) return [];
    const segments = path.split("/").filter(Boolean); // Remove empty segments
    let breadcrumbPath = "";
    
    return segments.map((segment, index) => {
      breadcrumbPath += `/${segment}`; // Accumulate path
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize
        href: breadcrumbPath, // Generate link
      };
    });
  };