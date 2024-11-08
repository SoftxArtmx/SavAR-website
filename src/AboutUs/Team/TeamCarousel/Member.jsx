import './Member.css';
import { useMediaQuery } from '@mantine/hooks';

import imgGitWhite from '../../../assets/svgsIcons/githubWhite.png';
import imgLinkWhite from '../../../assets/svgsIcons/linkedinWhite.png';
import imgIgWhite from '../../../assets/svgsIcons/igWhite.png';

import imgGitBlack from '../../../assets/svgsIcons/githubBlack.png';
import imgLinkBlack from '../../../assets/svgsIcons/linkedinBlack.png';
import imgIgBlack from '../../../assets/svgsIcons/igBlack.png';

function Member(props) {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');

  // Declara las variables fuera del bloque if-else
  let gitImg, linkImg, igImg;

  // Asigna los valores según el tema
  if (isDark) {
    gitImg = imgGitWhite;
    linkImg = imgLinkWhite;
    igImg = imgIgWhite;
  } else {
    gitImg = imgGitBlack;
    linkImg = imgLinkBlack;
    igImg = imgIgBlack;
  }

  return (
    <div className="memberContainer">
      <img src={props.imgSrc} className="memberImg" alt="Member" />
      <div className='memberInfoContainer'>
        <h1>{props.title}</h1>
        <h3>{props.puesto}</h3>
        <p>{props.description}</p>
        <div className="redesMemberContainer">
          <img onClick={() => window.location.href = props.linkGit} src={gitImg} alt="GitHub" />
          <img onClick={() => window.location.href = props.linkLkdn}src={linkImg} alt="LinkedIn" />
          <img onClick={() => window.location.href = props.linkIg}src={igImg} alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Member;
