import juejin from "../images/juejin.txt";

module.exports = {
  title: "Hello English",
  description: "A repository for recording English knowledge.",
  head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
  base: "/hello-english/",
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
        text: "Grammer",
        items: [{ text: "Grammer", link: "/grammer/" }],
      },
    ],
  },
};
