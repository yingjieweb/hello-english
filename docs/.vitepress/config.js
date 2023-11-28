import juejin from "../public/images/juejin.txt";

module.exports = {
  lang: "en-US",
  title: "Hello English",
  description: "A repository for recording English knowledge.",
  head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
  base: "/", // 1.Pages: /hello-english/ 2.Vercel: /
  themeConfig: {
    home: "/",
    logo: "/images/logo.png",
    nav: [{ text: "Author", link: "https://github.com/yingjieweb" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/yingjieweb/hello-english" },
      {
        icon: { svg: juejin },
        link: "https://juejin.cn/user/2576910988098888",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction/",
      },
      {
        text: "Grammer",
        collapsed: false,
        items: [
          { text: "SVP(主系表)", link: "/grammar/svp" },
          { text: "SVO(主谓宾)", link: "/grammar/svo" },
          { text: "There be", link: "/grammar/thereBe" },
          { text: "Modal Verbs(情态动词)", link: "/grammar/modalVerbs" },
          { text: "Spoken Verbs(口语动词)", link: "/grammar/spokenVerbs" },
          { text: "SOC/SPC(主宾表从句)", link: "/grammar/soc&spc" },
          {
            text: "Direct Questions(直接疑问句)",
            link: "/grammar/directQuestions",
          },
        ],
      },
    ],
    footer: {
      message: `Made with ❤️ by 
                <a href="https://github.com/yingjieweb" target="_black" style="color: #315efb;">yingjieweb</a>`,
      copyright: `Copyright © 2023 
                  <a href="https://github.com/yingjieweb" target="_black" style="color: #315efb;">yingjieweb</a>`,
    },
  },
};
