// 15 questions (banque). Chaque partie en tire 8 au hasard ; la question `last` (ETIC) clôt toujours le quiz. `keyword` = gros mot affiché ; `correctAnswers` = index (0-3) des bonnes réponses.
// Q15 : les 4 réponses sont correctes, mais le joueur n'en choisit qu'une.
export const questions = [
  { id: 1, keyword: 'MVP', question: 'Lorsqu’une startup lance son premier produit, elle peut commencer par un MVP. Mais c’est quoi ?',
    options: ['Most Valuable Player', 'Minimum Viable Product', 'Mario’s Victory Point', 'Market Value Product'], correctAnswers: [1] },
  { id: 2, keyword: 'STAND', question: 'Pour un club, un STAND sert principalement à…',
    options: ['Présenter le club, ses événements et animer des activités', 'Se faire des amis et créer des liens humains', 'Épuiser sa batterie sociale', 'Divertir les visiteurs et les amuser.'], correctAnswers: [0] },
  { id: 3, keyword: 'PITCHER', question: 'Pour convaincre, il faut savoir PITCHER. PITCHER c’est :',
    options: ['Bien vendre son idée', 'Venir stylé et bien habillé', 'Avoir confiance en soi et espérer que ça passe.', 'Bien lire depuis les slides de sa présentation.'], correctAnswers: [0] },
  { id: 4, keyword: 'ENTREPRENEURIAT', question: 'ETIC est un club estudiantin qui vise à rapprocher les étudiants du monde de l’entrepreneuriat. L\'ENTREPRENEURIAT ÉTANT :',
    options: ['Faire le boss toute la journée et faire genre “je suis CEO”', 'Gagner beaucoup d’argent', 'Créer, lancer et gérer une nouvelle activité économique ou une entreprise', 'Etre capable de racheter Mario de chez Nintendo'], correctAnswers: [2] },
  { id: 5, keyword: 'STARTUP', question: 'Facebook, avant de devenir le plus grand réseau social, c’était d’abord une STARTUP ! C’est quoi une STARTUP au juste ?',
    options: ['Une bande d\'étudiants qui lance un projet dans un dortoir d’Harvard', 'une jeune entreprise qui développe une idée innovante avec un bon potentiel de croissance', 'Une petite équipe d’informaticiens qui espère devenir le prochain Facebook.', 'Une équipe qui crée un nouveau “Mario-Bros” et qui espère que Nintendo le rachète.'], correctAnswers: [1] },
  { id: 6, keyword: 'JEE', question: 'ETIC organise des JEE qui ont pour but de faire découvrir aux étudiants l’envers du décor d’une entreprise clé du marché algérien. Mais au fait, JEE signifie :',
    options: ['Journée d’Exploration des Étudiants', 'Journée Étudiante Entrepreneuriale', 'Journée d’Évasion Estudiantine', 'Journée En Entreprise'], correctAnswers: [3] },
  { id: 7, keyword: 'SPONSOR', question: 'Pour garantir le succès de ses événements, un club ou du coup ETIC fait appel à des SPONSORS pour obtenir un soutien financier ou matériel. Un Sponsor est donc :',
    options: ['Une entreprise qui finance l’événement et récupère tous les bénéfices.', 'Une entreprise qui paie pour avoir son logo en xxl sur les affiches', 'Une entreprise qui soutient un projet en échange de visibilité ou de contreparties', 'Une entreprise qui gère tout l\'événement au nom du club et qui prend le mérite.'], correctAnswers: [2] },
  { id: 8, keyword: 'INCUBATEUR', question: 'Le rôle principal d’un INCUBATEUR est de :',
    options: ['Créer des startups à la place des entrepreneurs', 'Accompagner les étudiants ayant des idées pour les transformer en projets viables', 'financer toutes les idées proposées par les étudiants', 'Transformer en CEO chaque étudiant de l’ESI'], correctAnswers: [1] },
  { id: 9, keyword: 'ETIC CONFS', question: 'ETIC CONFS est une initiative assez récurrente durant la saison qui a pour concept :',
    options: ['Permettre aux membres d’ETIC de venir raconter leurs propres expériences', 'Donner la parole aux étudiants de l’ESI pour pitcher leurs idées', 'Offrir des conférences aux étudiants et leur permettre de voler 2-3 nouvelles idées de projet', 'Inviter des professionnels et des entrepreneurs à partager leurs expériences avec les étudiants'], correctAnswers: [3] },
  { id: 10, keyword: 'SÉANCE DE CONTACT', question: 'Au sein de la structure REL, la SÉANCE DE CONTACT est un moment où :',
    options: ['Les membres contactent les entreprises et personnes pertinentes pour les futurs besoins du club', 'Les anciens membres se retrouvent pour faire connaissance avec les nouveaux du club', 'Le même principe qu’un ice breaker, où les membres découvrent leurs respos et échangent leurs contacts', 'Les membres échangent avec les autres clubs pour créer des collaborations'], correctAnswers: [0] },
  { id: 11, keyword: 'NETWORKING', question: 'Dans le monde professionnel, les compétences comptent, mais le NETWORKING aussi. C’est donc :',
    options: ['Connaître quelqu’un qui connaît quelqu’un qui connaît un PDG', 'Créer et développer un réseau utile de relations professionnelles', '500+ de relations sur linkedIn', 'Faire les bons amis avec les bonnes personnes aux bons postes.'], correctAnswers: [1] },
  { id: 12, keyword: 'S2EE', question: 'L\'événement phare et emblématique d’ETIC, c’est le S2EE ( Salon 2 l’Emploi 2 L’Esi) , qui fête ses 18 ans cette année. Mais concrètement le S2EE c’est :',
    options: ['Un événement où les entreprises viennent proposer des formations et des conférences', 'Un forum où les étudiants présentent leurs projets et leurs startups à d’autres étudiants', 'Une journée permettant aux étudiants de rencontrer des entreprises et de découvrir des opportunités de stage, de PFE et d’emploi.', 'Un événement où les entreprises distribuent des Power-Ups pour booster les carrières des étudiants'], correctAnswers: [2] },
  { id: 13, keyword: 'BASE DE DONNÉES', question: 'Dans la Structure REL, une base de données est :',
    options: ['Un fichier rempli de numéros récupérés lors du networking', 'Une liste des membres avec leurs anniversaires et leurs adresses', 'Un système permettant de stocker et gérer des données dans une application', 'Un ensemble organisé d’informations sur les partenaires et contacts utiles au club'], correctAnswers: [3] },
  { id: 14, keyword: 'GPL', question: 'Durant un Événement, le côté GPL est très important pour garantir son bon déroulement. GPL est l’acronyme de :',
    options: ['Gestion, Planning & Logistique', 'Gestion des Participants & Logistique', 'Gestion des Partenariats & Liaison', 'Groupe de Préparation Logistique'], correctAnswers: [1] },
  { id: 15, last: true, keyword: 'ETIC', question: 'Sans intro, ETIC est :',
    options: ['un club estudiantin qui vise à rapprocher les étudiants du monde de l’entrepreneuriat', 'l’un des premier club en algérie (ETIC est là depuis 2009)', 'le premier club à organiser un Salon de l\'emploi fait par des étudiants pour des étudiants', 'Le club que je vais rejoindre cette année (et REL surtout).'], correctAnswers: [0, 1, 2, 3] },
]

export const QUIZ_LENGTH = 8

// 7 questions aléatoires parmi les 14 autres + la question finale ETIC.
export function buildDeck() {
  const pool = questions.filter((q) => !q.last)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return [...pool.slice(0, QUIZ_LENGTH - 1), questions.find((q) => q.last)]
}
