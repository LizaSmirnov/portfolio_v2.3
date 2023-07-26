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
  
  const resumeContent = `253 Cayuga Ave. San Francisco, CA 94112
  650.296.7214  | krasnienkov@gmail.com 
  
  
  LIZA SMIRNOV HANSEN
  
  BIO	
  
  As a highly skilled professional with 5+ years of experience in balancing budgets and managing finances, I have also developed a passion for simple full-stack web development. With a strong background in hiring, training, and coaching, I have consistently demonstrated my ability to effectively handle financial responsibilities while maximizing resources and optimizing financial outcomes. In addition, my proficiency in simple full-stack web development allows me to create dynamic and user-friendly websites that enhance the overall user experience. I enjoy leveraging my technical expertise to bring innovative solutions to the table and contribute to the success of projects.
  
  
  
  EXPERIENCE
  
  2020- May 2022   	Senior Manager, Teams | Wise Sons
        
  Responsible for overseeing, training and assisting Store Manager Teams across seven regional locations (Bay Area and LA) with staffing, recruiting pipelines and project proposals. 
  
  
  Highlights
  
  End-to-end ownership of Wise Sons’ recruiting pipelines across all branches (5+ Upper-Management Positions / 7+ Managerial Positions) 
  
  
  Work collaboratively with the Executive team, Director of Operations and VP of People to foresee and implement infrastructures around organizational goals, continuously optimizing for changes and new business needs as the company grows and evolves. 
  
  Experience in interpreting financial accounts and high understanding of balance sheets and budgets. Updated and organized ordering infrastructures with fast easy programing during monthly and daily inventory. Mac and PC literate. 
  
  
  Lead education and training sessions for Teams across all branches, focusing on interview techniques, selection process, and hiring processes to ensure high-touch, outstanding experiences for every applicant.
  
   2015-2020 	Store Manager & HR Policy Consultant, People Care | Boba Guys 
  Oversaw and led the Potrero-location branch that brought in over $1.5 million in revenue a year. With an openness and interest in learning about and incorporating new recruiting strategies and processes for my team, I quickly turned into the Executive Team’s HR & Policy consultant across all branches in a high-growth and transformative company (covering two stores to seventeen in less than 3 years).
  
   
  Highlights
  
  Retention rate of 80% year-over-year within my branch
  
  
  Recruited qualified candidates through sourcing on multiple platforms, reviewing incoming applicants while maintaining successful offer acceptance rates (92% acceptance rates, with 20% turning into the company’s top company performers).
  
  
  Identified process improvement areas and collaborated with People Ops and Executive teams to implement and adhere to policies that bettered the work-environment for employees.
  
  
  Oversaw general day-to-day operations for my branch (responsible for COGS and revenue, upkeep of profit laws, employee training and cross-department daily communication). 
  
  
  Developed ground-up infrastructure and policies for the company ranging from P&L to PTO and PSL for exempt and nonexempt employees, while ensuring a diverse and equitable pipeline when hiring. 
  
  
  EDUCATION
  2009 - 2012 			Skyline College,  Associates Degree in Social and Natural Sciences 
  2012 - 2015 			San Francisco State University, B.S. Biology 
  2023				Full-Stack Web Development from UC Berkeley `;
  
  

const Resume = () => {
    return (
      <div class="card" >
      <div class="card card-item h-full card-side bg-base-100 justify-center" id="Resume">
          <a class="card-title text-accent justify-center text-3xl" style={{padding: '10px'}}>My Resume</a>

        </div>
        <div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-5 text-xs flex justify-ceneter" style={{ whiteSpace: 'pre-line', fontSize: '12px', lineHeight: '12px', height: '800px', overflowY: 'auto' }}>{resumeContent}</div>
  </div>
</div>

<div class="card" style={{padding: '10px'}}>
          <div class="card-actions justify-center">
          
            <DownloadButton />
          </div>
        </div>
      </div>
        )   
        };

export default Resume;