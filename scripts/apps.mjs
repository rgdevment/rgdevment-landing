// Where each app keeps what the site shows of it: a rename or a move in the app's repo is fixed here.
export const APPS = [
  {
    product: "tisty",
    repo: "Tisty",
    help: "docs/help",
    terms: true,
    assets: {
      "tisty-social.png": "assets/store/en-01-record.png",
      "tisty-social-es.png": "assets/store/es-01-registro.png",
      "tisty-head.svg": "assets/mascot/tisty-head.svg",
      "icons/tisty.ico": "app/src-tauri/icons/icon.ico",
    },
  },
  {
    product: "linkunbound",
    repo: "LinkUnbound",
    assets: {
      "linkunbound-social.png": "resources/assets/store/screenshots/en/01-picker.png",
      "linkunbound-social-es.png": "resources/assets/store/screenshots/es/01-selector.png",
      "linkunbound-head.svg": "resources/mascot/linkunbound-head.svg",
      "icons/linkunbound.ico": "app/src-tauri/icons/icon.ico",
    },
  },
  {
    product: "copanda",
    repo: "CopyPaste",
    assets: {
      "copanda-social.png": "resources/screens/3.2/en-1-hero.png",
      "copanda-social-es.png": "resources/screens/3.2/es-1-hero.png",
      "copanda-head.svg": "resources/brand/copanda-head.svg",
      "icons/copanda.ico": "app/src-tauri/icons/icon.ico",
    },
  },
];
