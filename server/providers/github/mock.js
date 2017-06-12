const data = {
  "google/googletest": { 'C++': 3383896,
  Python: 451787,
  CMake: 29893,
  Shell: 26543,
  Makefile: 25787,
  M4: 25387,
  C: 14199,
  'Objective-C': 3226 },
"lafikl/consistent": { Go: 7448 },
"amark/gun": { JavaScript: 1069645, HTML: 6902, CSS: 3572, Shell: 468 },
"heera/requent": { PHP: 40512 },
"selahattinunlu/laravel-api-query-builder": { PHP: 16517 },
"indrajithi/mgc-django": { CSS: 134663, JavaScript: 38174, Python: 36601, HTML: 24596 },
"SlapBot/sounder": { Python: 7831 },
"Roll20/roll20-character-sheets": { HTML: 68341679, CSS: 6814037, JavaScript: 618652, Makefile: 50 },
"AdiChat/Repository-Hunter": { Ruby: 90643, JavaScript: 37779, CSS: 8643, CoffeeScript: 211 },
"jondot/awesome-react-native": { Ruby: 2181, Makefile: 442, Shell: 117, CSS: 113 },
"open-source-society/computer-science": {},
"wavebox/waveboxapp": { JavaScript: 1107145, HTML: 41176, CSS: 9498 },
"apl-devs/AppIntro": { Java: 159381, FreeMarker: 21436 },
"YOURLS/YOURLS": { PHP: 434055, C: 32631, JavaScript: 31347, CSS: 14588, HTML: 864 },
"onlyliuxin/coding2017": { Java: 129085 },
"racaljk/hosts": {},
"DeepSpace2/StyleFrame": { Python: 53706 },
"airbnb/javascript": { JavaScript: 49305 },
"Dobiasd/FunctionalPlus": { 'C++': 584399,
  Elm: 31108,
  CMake: 4663,
  Shell: 2777,
  CSS: 1970,
  HTML: 894,
  JavaScript: 118 },
"googlesamples/android-architecture": {}
};

export function getLanguages({owner, repo}) {
  return data[`${owner}/${repo}`];
}
