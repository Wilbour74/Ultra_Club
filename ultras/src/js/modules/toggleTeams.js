// imports images pour chaque équipe
import psg1 from '../../../public/images/psg1.webp';
import psg2 from '../../../public/images/psg2.webp';
import psg3 from '../../../public/images/psg3.webp';

import om1 from '../../../public/images/om1.webp';
import om2 from '../../../public/images/om2.webp';
import om3 from '../../../public/images/om3.webp';

import st1 from '../../../public/images/st1.webp';
import st2 from '../../../public/images/st2.webp';
import st3 from '../../../public/images/st3.webp';

import fcn1 from '../../../public/images/fcn1.webp';
import fcn2 from '../../../public/images/fcn2.webp';
import fcn3 from '../../../public/images/fcn3.webp';



// objet équipes avec images, noms, joueurs, stades...
const teams = {
  psg: {
    displayName: "PSG",
    prefix: "du PSG",
    deter: "le PSG",
    fullName: "le Paris Saint-Germain",
    stadium: "Parc des Princes",
    player: "Bradley Barcola",
    images: [psg1, psg2, psg3],
    banner: '../../../public/images/psg.webp',
    logo: '../../../public/images/psglogo.webp',
  },
  om: {
    displayName: "OM",
    prefix: "de l'OM",
    deter: "l'OM",
    fullName: "l'Olympique de Marseille",
    stadium: "Vélodrome",
    player: "Adrien Rabiot",
    images: [om1, om2, om3],
    banner: '../../../public/images/om.webp',
    logo: '../../../public/images/omlogo.webp'
  },
  "saint-etienne": {
    displayName: "ASSE",
    prefix: "de l'ASSE",
    deter: "l'ASSE",
    fullName: "l'AS Saint-Etienne",
    stadium: "Geoffroy Guichard",
    player: "Gauthier Larsonneur",
    images: [st1,st2,st3],
    banner: '../../../public/images/sainté.webp',
    logo: '../../../public/images/asselogo.webp'
  },
  nantes:{
    displayName: "FCN",
    prefix: "du FCN",
    deter: "le FCN",
    fullName: "le FC-Nantes",
    stadium: "le stade de la beaujoire",
    player:"Moses Simon",
    images: [fcn1, fcn2, fcn3],
    banner: '../../../public/images/nantes.webp',
    logo: '../../../public/images/nanteslogo.webp'
  }
};

export function setupToggleTeams(buttonId = "toggleTeamBtn") {
  const button = document.getElementById(buttonId);
  if (!button) {
    console.warn(`Bouton avec id "${buttonId}" introuvable.`);
    return;
  }

  const teamKeys = Object.keys(teams);
  let currentIndex = 0;

  function replaceText(element, from, to) {
    for (const node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.split(from).join(to);
      } else {
        replaceText(node, from, to);
      }
    }
  }

  function replaceClass(from, to) {
    const elems = document.querySelectorAll(`[class*='${from}']`);
    elems.forEach(el => {
      const newClasses = Array.from(el.classList).map(cls => cls.split(from).join(to));
      el.className = newClasses.join(" ");
    });
  }

  function applyTeam(oldTeamKey, newTeamKey) {
    const oldTeam = teams[oldTeamKey];
    const newTeam = teams[newTeamKey];

    replaceText(document.body, oldTeam.fullName, newTeam.fullName);
    replaceText(document.body, oldTeam.prefix, newTeam.prefix);
    replaceText(document.body, oldTeam.deter, newTeam.deter);
    replaceText(document.body, oldTeam.displayName, newTeam.displayName);
    replaceText(document.body, oldTeam.stadium, newTeam.stadium);
    replaceText(document.body, oldTeam.player, newTeam.player);
    replaceClass(oldTeamKey, newTeamKey);

    const imageElements = document.querySelectorAll(".grid-images img");
    imageElements.forEach((img, i) => {
      if (newTeam.images[i]) {
        img.src = newTeam.images[i];
      }
    });

    const banner = document.querySelector(".banner");
    if (banner && newTeam.banner) {
      banner.style.backgroundImage = `url(${newTeam.banner})`;
    }

    const logo = document.querySelector(".navbar-logo");
    if (logo && newTeam.logo) {
    logo.src = newTeam.logo;
    }
  }

  function toggleTeam() {
    const oldTeamKey = teamKeys[currentIndex];
    currentIndex = (currentIndex + 1) % teamKeys.length;
    const newTeamKey = teamKeys[currentIndex];

    applyTeam(oldTeamKey, newTeamKey);

    button.textContent = `Passer à ${teams[teamKeys[(currentIndex + 1) % teamKeys.length]].displayName}`;
  }

  button.addEventListener("click", toggleTeam);
}
