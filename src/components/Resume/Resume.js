const DownloadButton = () => {
    const handleDownload = () => {
      // Replace "link-to-your-google-docs-file" with the actual Google Docs link
      const fileUrl = "https://docs.google.com/document/d/1_3V0JTNbR5g7-JvYwKB0iVuq9R8twpjxU7L1fG0c2pI/export?format=pdf";
    
      // Create a temporary anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = fileUrl;
      downloadLink.download = "document.pdf"; // Set the desired file name with extension
    
      // Programmatically click the anchor element to trigger the download
      downloadLink.click();
    };
  
  
    return (
      <button class="btn btn-outline btn-primary max-w-xs" onClick={handleDownload}>
        Download 
      </button>
    );
  };
  
  const ViewButton = () => {
  const handleView = () => {
    const fileUrl = "https://docs.google.com/document/d/1_3V0JTNbR5g7-JvYwKB0iVuq9R8twpjxU7L1fG0c2pI/edit?usp=sharing";
    window.open(fileUrl, "_blank");
  };
    return (
      <button class="btn btn-outline btn-primary max-w-xs" onClick={handleView}>
        View
      </button>
    );
  };

const Resume = () => {
    return (
      <div class="card card-item h-full card-side bg-base-100 justify-center" id="Resume">
          <a class="card-title text-accent justify-center text-3xl"  style={{padding:'10px'}}>My Resume</a>
        <div class="card">
          <div class="card-actions justify-center">
            <ViewButton />
            <DownloadButton />
          </div>
        </div>
        </div>
        )   
        };

export default Resume;