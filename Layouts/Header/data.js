export const dataProps = {
  title: "Moon Blog",
  menus: [
    {
      name: "스탯",
      link: "hunter",
    },
    {
      name: "던전",
      link: "dungeon",
    },
    {
      name: "길드",
      link: "guild",
    },
    {
      name: "업적",
      link: "achievement",
    },
    {
      name: "공략",
      link: "posts",
    },
    {
      name: "메시지",
      link: "question",
    },
  ],
  typeAnimation: {
    sequence: [
      `이름: 문정훈`,
      1000,
      `이름: 문정훈\n생년월일: 1995.05.16`,
      1000,
      `이름: 문정훈\n생년월일: 1995.05.16\nEmail: black2st11@gmail.com`,
      1000,
      `이름: 문정훈\n생년월일: 1995.05.16\nEmail: black2st11@gmail.com\n포지션: Backend Developer(Python)`,
    ],
    speed: 50,
    style: {
      fontSize: "2rem",
      whiteSpace: "pre-line",
      display: "block",
      lineHeight: "5rem",
      fontWeight: "bold",
      color: "white",
    },
  },
};
