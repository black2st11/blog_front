import {
  FaPhoneAlt,
  FaLocationArrow,
  FaCalendar,
  FaUserAlt,
  FaPenAlt,
  FaEnvelope,
} from "react-icons/fa";

import JsLogo from "../../public/images/Javascript.png";
import TsLogo from "../../public/images/Typescript.png";
import ReLogo from "../../public/images/React.png";
import RNLogo from "../../public/images/RN.png";
import NeLogo from "../../public/images/Next.png";
import DjLogo from "../../public/images/Django.png";
import PgLogo from "../../public/images/PostgreSQL.png";
import PyLogo from "../../public/images/Python.png";
import AwLogo from "../../public/images/Aws.png";
import BiLogo from "../../public/images/Bitbucket.png";
import GiLogo from "../../public/images/Git.png";
import GiHubLogo from "../../public/images/Github.png";
import ZeLogo from "../../public/images/Zeplin.png";
import FiLogo from "../../public/images/Figma.png";
import DoLogo from "../../public/images/Docker.png";

const iconStyle = {
  color: "#444",
  size: 40,
};

const data = {
  info: [
    {
      icon: <FaPhoneAlt {...iconStyle} />,
      mainText: "연락처",
      subText: "010-8614-7257",
    },
    {
      icon: <FaCalendar {...iconStyle} />,
      mainText: "생년월일",
      subText: "1995.05.16",
    },
    {
      icon: <FaLocationArrow {...iconStyle} />,
      mainText: "현 거주지",
      subText: "전남 순천시",
    },
    {
      icon: <FaUserAlt {...iconStyle} />,
      mainText: "이름",
      subText: "문정훈",
    },
    {
      icon: <FaPenAlt {...iconStyle} />,
      mainText: "학력",
      subText: "순천대학교 - (컴퓨터공학과)",
    },
    {
      icon: <FaEnvelope {...iconStyle} />,
      mainText: "이메일",
      subText: "black2st11@gmail.com",
    },
  ],
  skill: [
    {
      title: "Backend",
      list: [
        {
          type: "",
          src: PyLogo,
          alt: "Python",
        },
        {
          type: "long",
          src: DjLogo,
          alt: "Django",
        },
        {
          type: "",
          src: PgLogo,
          alt: "PostgreSQL",
        },
      ],
    },
    {
      title: "FrontEnd",
      list: [
        {
          type: "",
          src: JsLogo,
          alt: "Javascript",
        },
        {
          type: "",
          src: TsLogo,
          alt: "Typescript",
        },
        {
          type: "",
          src: ReLogo,
          alt: "React",
        },
        {
          type: "",
          src: RNLogo,
          alt: "ReactNative",
        },
        {
          type: "long",
          src: NeLogo,
          alt: "Next.js",
        },
      ],
    },
    {
      title: "Infra",
      list: [
        {
          type: "long",
          src: AwLogo,
          alt: "Aws",
        },
      ],
    },
    {
      title: "Version Manage",
      list: [
        {
          type: "",
          src: GiLogo,
          alt: "Git",
        },
        {
          type: "",
          src: GiHubLogo,
          alt: "GitHub",
        },
        {
          type: "",
          src: BiLogo,
          alt: "Bitbucket",
        },
      ],
    },
    {
      title: "Ext",
      list: [
        {
          type: "",
          src: FiLogo,
          alt: "Figma",
        },
        {
          type: "",
          src: ZeLogo,
          alt: "Zeplin",
        },
        {
          type: "",
          src: DoLogo,
          alt: "Docker",
        },
      ],
    },
  ],
  archiving: [
    {
      title: "Github",
      list: [
        "현재 버전관리 시스템을 사용하고 있는 저장소입니다.",
        "알고리즘 관련으로 올립니다.",
        "개인적인 프로젝트를 할 시간이 없어서 못 올렸습니다.",
      ],
    },
    {
      title: "Bitbucket",
      list: [
        "현재 버전관리 시스템을 사용하고 있는 저장소입니다.",
        "알고리즘 관련으로 올립니다.",
        "개인적인 프로젝트를 할 시간이 없어서 못 올렸습니다.",
      ],
    },
  ],
};

export default data;
