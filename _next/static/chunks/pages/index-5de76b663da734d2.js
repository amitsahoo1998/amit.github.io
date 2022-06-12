(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (i, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5075);
        },
      ]);
    },
    5075: function (i, e, n) {
      "use strict";
      n.r(e);
      var t = n(5893),
        r = [
          {
            title: "Twitter",
            url: "https://twitter.com/amitsahoo1998",
            icon: "ri-twitter-line",
          },
          {
            title: "Instagram",
            url: "https://instagram.com/iam_amit4",
            icon: "ri-instagram-line",
          },
          {
            title: "GitHub",
            url: "https://github.com/amitsahoo1998",
            icon: "ri-github-line",
          },
          {
            title: "Youtube",
            url: "https://www.youtube.com/channel/UChDhWtWRCf9S22O03m4vMOQ",
            icon: "ri-youtube-line",
          },
          {
            title: "linkedin",
            url: "https://www.linkedin.com/in/amitsahoo0284/",
            icon: "ri-linkedin-line",
          },
        ];
      e.default = function () {
        return (0, t.jsx)("main", {
          className: "flex flex-center",
          children: (0, t.jsxs)("section", {
            className: "content flex",
            children: [
              (0, t.jsx)("span", {
                className: "heading",
                children: "Amit Sahoo",
              }),
              (0, t.jsx)("span", {
                className: "bio",
                children:
                  "I like building things. Currently build Android apps @ISERVEU and also exploring the Jetpack Compose on the side.",
              }),
              (0, t.jsx)("div", {
                className: "footer",
                children: r.map(function (i, e) {
                  return (0,
                  t.jsxs)("a", { href: i.url, target: "_blank", rel: "noreferrer", children: [(0, t.jsx)("span", { children: i.title }), (0, t.jsx)("i", { className: i.icon })] }, e);
                }),
              }),
            ],
          }),
        });
      };
    },
  },
  function (i) {
    i.O(0, [774, 888, 179], function () {
      return (e = 5301), i((i.s = e));
      var e;
    });
    var e = i.O();
    _N_E = e;
  },
]);
