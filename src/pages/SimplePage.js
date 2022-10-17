import React from "react";
import ReactMarkdown from "react-markdown";

const SimplePage = () => {
  return (
    <>
      <div className="nav_spacer"></div>
      <section className="container_x_sm simple_container">
        <div className="simple_states">
          <ReactMarkdown>
            [![tenyain's GitHub
            stats](https://github-readme-stats.vercel.app/api?username=T-N9&theme=tokyonight)](https://github.com/T-N9/github-readme-stats)
            [![Top
            Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=T-N9&layout=compact)](https://github.com/anuraghazra/github-readme-stats)
          </ReactMarkdown>
        </div>
        <div>
          <h1>Skills & Tools</h1>
          <div className="simple_skills">
            <ReactMarkdown>
              ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
              ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
              ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
              ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
              ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
              ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
              ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
              ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
              ![React
              Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
              ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
              ![Next
              JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
              ![Microsoft
              Word](https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white)
              ![Microsoft
              PowerPoint](https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=for-the-badge&logo=microsoft-powerpoint&logoColor=white)
              ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
              ![Visual Studio
              Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
              ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
              ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
              ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
              ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
            </ReactMarkdown>
          </div>
        </div>
        <div>
          <h1>Recent Works</h1>
          <div className="simple_projects">
            <ReactMarkdown>
              [![Gui-Transpo](https://raw.githubusercontent.com/T-N9/T-N9/main/Logo-2.png)](https://github.com/tenyain/gui-transposer-2022)
              [![CINE](https://raw.githubusercontent.com/T-N9/T-N9/main/CINE%20logo%201.png)](https://github.com/tenyain/cine-2.0)
              [![enter image description
              here](https://raw.githubusercontent.com/T-N9/T-N9/main/domatio-logo%201.png)](https://github.com/T-N9/domatio-react)
              [![enter image description
              here](https://raw.githubusercontent.com/T-N9/T-N9/main/tn%20logo%201.png)](https://github.com/T-N9/tn-porfolio-frontend)
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimplePage;
