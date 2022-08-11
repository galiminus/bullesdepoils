export default function Home() {
  return (
    <>
        <div className="bg-gray-50">
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 w-full h-full" aria-hidden="true">
              <div className="relative h-full">
                <svg className="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
                  <defs>
                    <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
                </svg>
                <svg className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
                  <defs>
                    <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
                </svg>
              </div>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24">
              <div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6">
                  <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                      <div className="items-center justify-center hidden w-full md:w-auto md:justify-center md:flex">
                        <a href="#">
                          <img className="w-auto rounded-full h-14 sm:h-14" src="/icon.png" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden md:flex md:space-x-10">
                      <a className="font-medium text-gray-500 hover:text-gray-900" href="#la-communaute">
                        La communauté
                      </a>
                      <a className="font-medium text-gray-500 hover:text-gray-900" href="#les-membres">
                        Les membres
                      </a>
                    </div>
                  </nav>
                </div>
                <div className="flex justify-center md:hidden">
                  <a href="#">
                    <img className="w-auto h-32 rounded-full sm:h-32" src="/icon.png" />
                  </a>
                </div>
              </div>
              <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-16 sm:px-6">
                <div className="text-center">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Nous sommes les</span>
                    <span className="block text-pink-600 underline">Bulles de poils</span>
                  </h1>
                  <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        L'association de la communauté Furry de Reims et de la Marne.
                      </p>
                  <div className="flex justify-center gap-6 mt-4">
                    <a href="https://www.facebook.com/lesbullesdepoils/">
                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 hover:text-gray-900" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                        <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/bullesdepoils">
                      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 hover:text-gray-900" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                        <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                  {/* <div className="flex justify-center w-full pb-16 mt-16 ">
                    <a href="/bubblefur-5" className="inline-flex items-center px-6 py-3 text-base font-medium text-pink-700 bg-white border border-pink-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700">
                      Bientôt la Bubblefur 5 !
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex flex-col" aria-hidden="true">
                <div className="flex-1"></div>
                <div className="flex-1 w-full bg-gray-800"></div>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <img className="relative w-full rounded-lg shadow-lg" src="/welcome.jpg" />
              </div>
            </div>
          </div>
          <div className="px-4 bg-gray-800 md:px-2 sm:px-6" id="la-communaute">
            <div className="pt-8 overflow-hidde xl:pt-16">
              <div className="mx-auto max-w-7xl">
                <div className="overflow-hidden">
                  <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-8 mb-8 md:mb-2 md:px-6 ">
                      <div className="text-base max-w-prose lg:max-w-none">
                        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-100 sm:text-4xl">
                          Les furries : une communauté diverse et mondiale.
                        </p>
                      </div>
                    </div>
                    <div className="relative md:p-6">
                      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                        <div className="prose prose-lg text-gray-100 prose-pink lg:max-w-none">
                          <p>
                            Apparu aux États-Unis dans les années 80, le mouvement furry est défini comme l'intérêt pour les animaux anthropomorphes, c'est à dire possédant des caractéristiques humaines. Popularisée par Internet, la communauté compte aujourd'hui des centaines de milliers de membres de tout milieux et origines sur tous les continents.
                         </p>
                          <p>
                            Les artistes de la communauté furry produisent chaque année une quantité remarquable d'œuvres. Les furries aiment se représenter eux-mêmes sous la forme d'un avatar animal de leur création, généralement anthropomorphe, appelé fursona.
                          </p>
                        </div>
                        <div className="mt-6 prose prose-lg text-gray-100 prose-pink lg:mt-0">
                            <p>
            Afin de donner vie à leurs personnages, les furries font appel à des artistes de la communauté pour, par exemple : les dessiner, écrire des histoires ou créer des costumes appelé fursuits.              
                              </p>
                            <p>
                                Créée en 2018, l’association 
                              <b>Les bulles de poils</b> compte aujourd’hui une vingtaine de membres. Nous participons régulièrement aux événements et
                                festivités de la ville de Reims dans nos costumes ou non, pour le plaisir de tous. Nous organisons des sorties thématiques lors des fêtes Johanniques,
                                du marché de Noël de Reims ou des sorties au parc de Champagne. Nous serions heureux et heureuses de vous y retrouver !
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 pt-8 mb-8 md:mb-2 md:px-6 ">
                    <div className="text-base max-w-prose lg:max-w-none">
                      <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-100 sm:text-4xl">
                  Mais pourquoi les furries ?
                </p>
                    </div>
                  </div>
                  <div className="relative md:p-6">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                      <div className="prose prose-lg text-gray-100 prose-pink lg:max-w-none">
                        <p>
                            S'identifier à un personnage imaginaire – un animal qui plus est – peut sembler étrange à première vue. Mais ce n'est pas très différent de votre avatar dans un jeu en ligne : il est la projection que vous avez de vous-même, un personnage auquel vous vous identifiez parce qu'il vous ressemble ou qu'il ressemble à votre idéal.
                          </p>
                        <p>
                            Vous pouvez expérimenter à travers ce personnage, lui donner une vie, un sens. Il peut refléter une partie de votre identité, expérimenter avec vos rêves et vos craintes en toute sécurité. Il ou elle sera vous à votre place dans les situations où vous n'avez pas envie d'être vous.
                          </p>
                        <p>
                              D’une certaine manière on ne choisit pas d’être furry, ça vous tombe dessus sans prévenir et quelques années après vous y êtes encore (et vous vous y êtes fait plein d’ami⋅es.)
                          </p>
                      </div>
                      <div className="mt-6 prose prose-lg text-gray-100 prose-pink lg:mt-0">
                        <p>
                            La communauté furry se veut accueillante et ouverte d’esprit, remplie d'êtres humains qui ne se seraient jamais rencontrés autrement : étudiants, ingénieurs, artisans, chômeurs, militaires, ouvriers, médecins, etc. Toutes et tous unis par la camaraderie de cette communauté.
                          </p>
                        <p>
                            Pour nous rejoindre il suffit juste de secouer la patte et dire « Hello, je crois que je suis un⋅e furry ! » Vous pouvez aussi vous inscrire sur des sites comme FurAffinity ou installer des applications comme Barq, faites par des furries pour les furries.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8 overflow-hidde xl:py-8">
                <div className="mx-auto max-w-7xl">
                  <div className="relative z-10 pt-8 mb-8 md:mb-2 md:px-6 ">
                    <div className="text-base max-w-prose lg:max-w-none">
                      <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-100 sm:text-4xl">
                  Glossaire
                </p>
                    </div>
                  </div>
                  <div className="relative md:p-6">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-6">
                      <div className="pt-6 prose prose-lg text-gray-100 lg:max-w-none md:pt-0 first:pt-0">
                        <h3 className="font-semibold leading-6 tracking-wide text-gray-100 underline uppercase">
                Fursona (n.m.) :
              </h3>
                        <p>
                Personnage d’un membre de la communauté furry, la plupart en ont un et s’y identifie. Beaucoup payent des artistes pour les dessiner ou en faire des fursuits.
              </p>
                      </div>
                      <div className="pt-6 prose prose-lg text-gray-100 lg:max-w-none md:pt-0 first:pt-0">
                        <h3 className="font-semibold leading-6 tracking-wide text-gray-100 underline uppercase">
                Fursuit (n.f.) :
              </h3>
                        <p>
                Une fursuit est un costume d’animal, complet ou partiel, que portent certains furries pour s’amuser et qui représente généralement leurs fursonas.
              </p>
                      </div>
                      <div className="pt-6 prose prose-lg text-gray-100 lg:max-w-none md:pt-0 first:pt-0">
                        <h3 className="font-semibold leading-6 tracking-wide text-gray-100 underline uppercase">
                Commission (n.f.) :
              </h3>
                        <p>
                Une commission est une commande prise à un⋅e artiste, chez les furries il s’agit généralement de dessiner le fursona de la personne qui commissionne.
              </p>
                      </div>
                      <div className="pt-6 prose prose-lg text-gray-100 lg:max-w-none md:pt-0 first:pt-0">
                        <h3 className="font-semibold leading-6 tracking-wide text-gray-100 underline uppercase">
                Furmeet (n.f.) :
              </h3>
                        <p>
                Rencontre organisée entre furries dans un bar, un restaurant, etc. Certaines furmeets, appelées conventions, peuvent dépasser les milliers de participants.
              </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-6 lg:pt-24" id="les-membres">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Les membres
                  </h2>
                <p className="text-xl text-gray-500">
                    Volontaires, bénévoles, artistes, fursuiters ou non          
                  </p>
              </div>
              <ul role="list" className="pb-16 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/hotep.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Hotep
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / her / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/habaxin.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Habaxin
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/elena.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Éléna
                    </h3>
                        <p className="text-sm text-gray-500">
                      her / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/tshorni.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Tshorni
                    </h3>
                        <p className="text-sm text-gray-500">
                      him
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/coontail.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Coontail
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/cesar.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      César
                    </h3>
                        <p className="text-sm text-gray-500">
                      him
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/anemio.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Anémio
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/doug.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Doug
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/elyx.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Elyx
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/kisa.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Kisa
                    </h3>
                        <p className="text-sm text-gray-500">
                      him
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/kuda.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Kuda
                    </h3>
                        <p className="text-sm text-gray-500">
                      him
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/lupusuit.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Lupusuit
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/luthar.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Luthar
                    </h3>
                        <p className="text-sm text-gray-500">
                      him / them
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/ravy.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Ravy
                    </h3>
                        <p className="text-sm text-gray-500">
                      her
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/silver.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Silver
                    </h3>
                        <p className="text-sm text-gray-500">
                      him
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover rounded-lg shadow-lg" src="/members/seco.jpg" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-pink-600">
                      Séco
                    </h3>
                        <p className="text-sm text-gray-500">
                      him
                    </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}
