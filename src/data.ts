export type PageData = {
  slug: string
  title: string
  category: 'langai' | 'zaliuzes' | 'tinkleliai' | 'paslaugos' | 'kita'
  eyebrow: string
  intro: string
  description: string
  benefits: string[]
  image?: 'hero' | 'blinds' | 'install'
  children?: string[]
  specs?: string[]
}

export const pages: PageData[] = [
  {
    slug: 'langai-ir-durys-alytuje', title: 'Langai ir durys', category: 'langai', eyebrow: 'Sprendimai namams ir verslui',
    intro: 'Langai ir durys, kuriuos parenkame pagal jūsų namą, poreikius ir biudžetą.',
    description: 'Konsultuojame, išmatuojame, pagaminame ir profesionaliai sumontuojame. Rinkitės plastikines ar aliuminio konstrukcijas, medines arba šarvuotas duris — padėsime rasti praktišką ir ilgaamžį sprendimą.',
    benefits: ['Individuali gamyba pagal angos matmenis', 'Platus spalvų, profilių ir stiklo paketų pasirinkimas', 'Montavimo ir apdailos darbų garantija'], image: 'hero',
    children: ['plastikiniai-langai-ir-durys-alytuje', 'aliuminio-langai-ir-durys-alytuje', 'medines-durys-alytuje', 'sarvuotos-durys-alytuje']
  },
  {
    slug: 'plastikiniai-langai-ir-durys-alytuje', title: 'Plastikiniai langai ir durys', category: 'langai', eyebrow: 'Šiluma, tyla ir paprasta priežiūra',
    intro: 'Patikimas pasirinkimas, padedantis namuose išlaikyti šilumą ir komfortą.',
    description: 'Plastikinius langus ir duris gaminame pagal individualius matmenis. Galite rinktis profilio sistemą, spalvą, stiklo paketą, furnitūrą ir atidarymo būdą — nuo ekonomiško renovacijos sprendimo iki ypač šilto pasyviam namui.',
    benefits: ['Gera šilumos ir garso izoliacija', 'Daug spalvų, formų ir atidarymo variantų', 'Nereikli kasdienė priežiūra'], image: 'hero',
    children: ['salamander-5-kameru-73mm-alytuje', 'salamander-6kameru-82mm-alytuje', 'kommerling-7kameru-88mm-alytuje', 'kommerling-6kameru-76mm-alytuje']
  },
  {
    slug: 'aliuminio-langai-ir-durys-alytuje', title: 'Aliuminio langai ir durys', category: 'langai', eyebrow: 'Didelėms angoms ir moderniai architektūrai',
    intro: 'Tvirtos, stabilios ir ilgaamžės konstrukcijos, kai svarbus minimalus dizainas.',
    description: 'Aliuminis ypač tinka didelių matmenų langams, vitrinoms, durims ir stiklinėms pertvaroms. Konstrukcijos atsparios drėgmei, saulei ir šalčiui, o plati spalvų bei furnitūros paletė leidžia jas pritaikyti privačiam ar komerciniam projektui.',
    benefits: ['Tinka dideliems matmenims', 'Atsparumas oro sąlygoms', 'Minimalistinė išvaizda ir ilgas tarnavimo laikas'], image: 'hero'
  },
  {
    slug: 'medines-durys-alytuje', title: 'Medinės durys', category: 'langai', eyebrow: 'Natūrali šiluma ir charakteris',
    intro: 'Individualiai pritaikomos durys klasikiniam ar šiuolaikiniam interjerui.',
    description: 'Siūlome įsprūdines, faneruotas ir skydines medines duris. Galimi skirtingi medienos raštai, apdaila, stiklo intarpai ir frezuoti ornamentai. Padėsime pasirinkti konstrukciją pagal patalpos paskirtį bei norimą estetiką.',
    benefits: ['Natūralios medienos tekstūra', 'Platus apdailos ir stiklo pasirinkimas', 'Gaminama pagal individualų užsakymą'], image: 'hero'
  },
  {
    slug: 'sarvuotos-durys-alytuje', title: 'Šarvuotos durys', category: 'langai', eyebrow: 'Daugiau saugumo kasdien',
    intro: 'Tvirtos durys butui, namui ar komercinėms patalpoms.',
    description: 'Šarvuotų durų konstrukcija padeda užtikrinti saugumą, patogų naudojimą bei gerą garso ir šilumos izoliaciją. Parinksime vidaus arba lauko sąlygoms pritaikytą apdailą, spynas ir furnitūrą.',
    benefits: ['Tvirta plieno konstrukcija', 'Mineralinės vatos užpildas', 'Apdaila ir spalva pagal poreikį'], image: 'hero',
    children: ['sarvuotos-vidaus-durys-alytuje', 'sarvuotos-lauko-durys-alytuje']
  },
  {
    slug: 'sarvuotos-vidaus-durys-alytuje', title: 'Šarvuotos vidaus durys', category: 'langai', eyebrow: 'Butams ir biurams',
    intro: 'Saugumą, tylą ir tvarkingą interjero vaizdą derinantis sprendimas.',
    description: 'Vidaus šarvuotos durys skirtos daugiabučių butams ir biurams. Plieno karkasas suteikia tvirtumo, mineralinės vatos užpildas gerina garso bei šilumos izoliaciją, o medžio imitacijos apdaila lengvai derinama prie interjero.',
    benefits: ['Plieninis karkasas ir apsauginis lakštas', 'Gera garso izoliacija', 'Patogiai veikiantys vyriai su guoliais'], image: 'hero'
  },
  {
    slug: 'sarvuotos-lauko-durys-alytuje', title: 'Šarvuotos lauko durys', category: 'langai', eyebrow: 'Atsparios Lietuvos orams',
    intro: 'Lauko sąlygoms pritaikytos tvirtos durys namams ir komercinėms patalpoms.',
    description: 'Durys gaminamos iš uždaro plieno profilio, užpildomos mineraline vata ir padengiamos drėgmei bei atmosferos poveikiui atsparia apdaila. Galima pasirinkti spalvą, spynas, telefonspynę ir kitus priedus.',
    benefits: ['Atspari lauko apdaila', 'Šilumos ir garso izoliacija', 'Individualus spalvos bei furnitūros pasirinkimas'], image: 'hero'
  },
  {
    slug: 'salamander-5-kameru-73mm-alytuje', title: 'Salamander 73 mm', category: 'langai', eyebrow: 'Praktiškas standartas',
    intro: '5 kamerų sistema renovacijai ir racionaliam naujų langų pasirinkimui.',
    description: '73 mm pločio profilis komplektuojamas su dviejų stiklų paketu, argono užpildu, tvirtinamu plienu ir patikimais apkaustais. Galimi papildomi stiklo, furnitūros bei rėmo apsaugos sprendimai.',
    benefits: ['5 kamerų, 73 mm profilis', 'Uw iki 1,2 W/m²K', '24 mm stiklo paketas'], image: 'hero',
    specs: ['Dvejos sandarinimo tarpinės', '1,5–2,0 mm cinkuoto plieno armuotė', 'Mikroventiliacijos funkcija']
  },
  {
    slug: 'salamander-6kameru-82mm-alytuje', title: 'Salamander 82 mm', category: 'langai', eyebrow: 'Daugiau energinio efektyvumo',
    intro: 'Šilta 6 kamerų sistema naujai statybai ir aukštų reikalavimų renovacijai.',
    description: 'Salamander bluevolution 82 sistema komplektuojama su trijų stiklų paketu, šiltu rėmeliu ir trimis sandarinimo lygiais. Tai pasirinkimas, kai svarbu mažesni šilumos nuostoliai ir didesnis komfortas.',
    benefits: ['6 kamerų, 82 mm profilis', 'Uw iki 0,7 W/m²K', 'Trijų stiklų paketas'], image: 'hero',
    specs: ['2 mm cinkuoto plieno armuotė', 'Papildoma vidurinė tarpinė', 'Galima dvipusė spalvota apdaila']
  },
  {
    slug: 'kommerling-7kameru-88mm-alytuje', title: 'Kömmerling 88 mm', category: 'langai', eyebrow: 'Maksimaliam komfortui',
    intro: '7 kamerų premium sistema energiškai efektyviems ir pasyviems namams.',
    description: 'Gili 88 mm sistema ir papildomas vidurinis sandarinimas padeda pasiekti aukštą šilumos izoliaciją. Tvirti profiliai, šiltas stiklo paketas ir ilgaamžės tarpinės sukuria patikimą sprendimą daugeliui metų.',
    benefits: ['7 kamerų, 88 mm profilis', 'Uw iki 0,73 W/m²K', 'MD vidurinio sandarinimo sistema'], image: 'hero',
    specs: ['Iki 58 mm storio stiklo paketas', 'Aukšta apsauga nuo oro poveikio', 'Platus laminuotų spalvų pasirinkimas']
  },
  {
    slug: 'kommerling-6kameru-76mm-alytuje', title: 'Kömmerling 76 mm', category: 'langai', eyebrow: 'Universalus ir šiltas',
    intro: '6 kamerų sistema, tinkama tiek renovacijai, tiek naujiems pastatams.',
    description: '76 mm montavimo gylis suderina gerą šilumos izoliaciją ir universalias pritaikymo galimybes. Sistema komplektuojama su kokybiškais apkaustais, iki 48 mm stiklo paketu bei pasirinkta spalvine apdaila.',
    benefits: ['6 kamerų, 76 mm profilis', 'U iki 1,0 W/m²K', 'Garso izoliacija iki 47 dB'], image: 'hero',
    specs: ['Iki 48 mm stiklo paketas', 'Bešvinė profilio sudėtis', 'Apsaugą sustiprinantys apkaustai']
  },

  {
    slug: 'zaliuzes-ir-roletai-alytuje', title: 'Žaliuzės ir roletai', category: 'zaliuzes', eyebrow: 'Šviesai, privatumui ir jaukumui',
    intro: 'Langų uždangos, parinktos pagal jūsų erdvę ir kasdienius įpročius.',
    description: 'Nuo audinio ir mechanizmo pasirinkimo iki tikslaus sumontavimo. Turime sprendimų standartiniams, dideliems bei nestandartinės formos langams, namams, biurams ir komercinėms erdvėms.',
    benefits: ['Platus audinių, spalvų ir tekstūrų pasirinkimas', 'Rankinis arba automatinis valdymas', 'Matavimas ir montavimas vienose rankose'], image: 'blinds',
    children: ['roletai-alytuje', 'horizontalios-zaliuzes-alytuje', 'vertikalios-zaliuzes-alytuje', 'plisuotos-zaliuzes-alytuje', 'medines-zaliuzes-alytuje', 'apsaugines-zaliuzes-alytuje', 'romanetes-alytuje']
  },
  {
    slug: 'roletai-alytuje', title: 'Roletai', category: 'zaliuzes', eyebrow: 'Kontroliuokite šviesą paprastai',
    intro: 'Nuo subtilaus šviesos filtravimo iki visiško kambario užtemdymo.',
    description: 'Siūlome įvairių spalvų, raštų ir tankio roletų audinius. Sistema gali būti kasetinė, laisvai kabanti ar automatinė, montuojama prie lango, sienos arba lubų.',
    benefits: ['Tinka skirtingiems langų tipams', 'Šimtai audinių variantų', 'Paprasta priežiūra ir patogus valdymas'], image: 'blinds',
    children: ['klasikiniai-roletai-alytuje', 'kasetiniai-roletai-plastikiniams-langams-alytuje', 'roletai-diena-naktis-alytuje', 'blackout-roletai-alytuje', 'automatiniai-roletai-alytuje']
  },
  {
    slug: 'klasikiniai-roletai-alytuje', title: 'Klasikiniai roletai', category: 'zaliuzes', eyebrow: 'Laiko patikrintas sprendimas',
    intro: 'Tvarkingas lango uždengimas, derantis tiek namuose, tiek biure.',
    description: 'Klasikiniai roletai lengvai montuojami, padeda valdyti natūralią šviesą ir suteikia privatumo. Galite rinktis kasetinę arba atvirą sistemą, audinio tankį, tekstūrą, spalvą ir mechanizmo apdailą.',
    benefits: ['Kasetinė arba atvira sistema', 'Didelis audinių pasirinkimas', 'Tinka langams, sienai ar luboms'], image: 'blinds'
  },
  {
    slug: 'kasetiniai-roletai-plastikiniams-langams-alytuje', title: 'Kasetiniai roletai', category: 'zaliuzes', eyebrow: 'Prigludę prie lango',
    intro: 'Kompaktiškas ir praktiškas sprendimas plastikiniams langams.',
    description: 'Audinys susukamas į tvarkingą kasetę, o kreipiančiosios padeda jam išlikti arti stiklo net varstant langą. Platus spalvų ir audinių pasirinkimas leidžia roletą priderinti prie rėmo bei interjero.',
    benefits: ['Netrukdo varstyti lango', 'Tvarkinga uždara kasetė', 'Audinys išlieka prigludęs prie stiklo'], image: 'blinds'
  },
  {
    slug: 'roletai-diena-naktis-alytuje', title: 'Roletai diena–naktis', category: 'zaliuzes', eyebrow: 'Šviesa pagal jūsų ritmą',
    intro: 'Dvigubas audinys leidžia greitai pereiti nuo šviesos prie privatumo.',
    description: 'Persidengiančios skaidrios ir tankios juostos padeda tiksliai reguliuoti į patalpą patenkančią šviesą. Tai funkcionalus ir išraiškingas pasirinkimas svetainei, miegamajam ar darbo erdvei.',
    benefits: ['Tikslus šviesos reguliavimas', 'Modernus dekoratyvus vaizdas', 'Plati audinių ir spalvų paletė'], image: 'blinds'
  },
  {
    slug: 'blackout-roletai-alytuje', title: 'Blackout roletai', category: 'zaliuzes', eyebrow: 'Kai reikia tikros tamsos',
    intro: 'Šviesai nepralaidus audinys miegui, ekranams ir maksimaliam privatumui.',
    description: 'Speciali daugiasluoksnė danga padeda visiškai užtamsinti langą ir apsaugo nuo intensyvių saulės spindulių. Tinka miegamiesiems, vaikų kambariams, biurams, studijoms bei konferencijų salėms.',
    benefits: ['Maksimalus užtemdymas', 'Padeda saugoti nuo perkaitimo', 'Tinka namams ir komercinėms erdvėms'], image: 'blinds'
  },
  {
    slug: 'automatiniai-roletai-alytuje', title: 'Automatiniai roletai', category: 'zaliuzes', eyebrow: 'Komfortas vienu paspaudimu',
    intro: 'Valdykite roletus pulteliu, jungikliu arba išmaniuoju telefonu.',
    description: 'Tyliai ir sklandžiai veikianti automatika tinka namams, biurams ar konferencijų erdvėms. Galima programuoti dienos scenarijus ir integruoti valdymą į išmaniųjų namų sistemą.',
    benefits: ['Tylus elektrinis valdymas', 'Dienos scenarijai', 'Galima išmaniųjų namų integracija'], image: 'blinds'
  },
  {
    slug: 'horizontalios-zaliuzes-alytuje', title: 'Horizontalios žaliuzės', category: 'zaliuzes', eyebrow: 'Tiksliai valdomai šviesai',
    intro: 'Funkcionalios, tvirtos ir ypač patogios darbo bei gyvenamosioms erdvėms.',
    description: 'Keisdami lamelių kampą lengvai reguliuosite šviesą ir privatumą. Aliuminines juosteles galima rinktis iš daugybės atspalvių, todėl žaliuzės lengvai priderinamos prie lango ir interjero.',
    benefits: ['Tikslus šviesos srauto valdymas', 'Didelė spalvų paletė', 'Lengvai prižiūrimos medžiagos'], image: 'blinds'
  },
  {
    slug: 'vertikalios-zaliuzes-alytuje', title: 'Vertikalios žaliuzės', category: 'zaliuzes', eyebrow: 'Dideliems langams ir vitrinoms',
    intro: 'Klasikinis sprendimas plačioms stiklo plokštumoms ir erdvių atskyrimui.',
    description: 'Vertikalios žaliuzės tinka stumdomoms durims, vitrinoms, trikampiams langams ir patalpų pertvaroms. Gausus audinių pasirinkimas padeda kontroliuoti šviesą, sumažinti atspindžius ir papildyti interjerą.',
    benefits: ['Tinka dideliems ir nestandartiniams langams', 'Patogus šviesos valdymas', 'Gausus audinių asortimentas'], image: 'blinds'
  },
  {
    slug: 'plisuotos-zaliuzes-alytuje', title: 'Plisuotos žaliuzės', category: 'zaliuzes', eyebrow: 'Nestandartinėms formoms',
    intro: 'Lengvas klostuotas audinys švelniai filtruoja šviesą ir taupo erdvę.',
    description: 'Plisuotos žaliuzės tinka varstomiems langams bei durims, taip pat apvaliems, trikampiams, arkos ar trapecijos formos langams. Galimi lengvai valomi ir drėgnesnėms patalpoms pritaikyti audiniai.',
    benefits: ['Tinka nestandartinėms langų formoms', 'Kompaktiška konstrukcija', 'Platus specialių audinių pasirinkimas'], image: 'blinds'
  },
  {
    slug: 'medines-zaliuzes-alytuje', title: 'Medinės žaliuzės', category: 'zaliuzes', eyebrow: 'Natūrali tekstūra interjerui',
    intro: 'Jaukios horizontalios žaliuzės iš medienos arba atsparios jos imitacijos.',
    description: 'Medinės žaliuzės suteikia erdvei natūralumo ir leidžia tiksliai valdyti šviesą. Taip pat siūlome drėgmei ir saulei atsparias „Faux wood“ žaliuzes, tinkamas virtuvei, voniai ar pirčiai.',
    benefits: ['Natūralus, jaukus vaizdas', 'Patogus lamelių valdymas', 'Galimi drėgmei atsparūs variantai'], image: 'blinds'
  },
  {
    slug: 'apsaugines-zaliuzes-alytuje', title: 'Apsauginės žaliuzės', category: 'zaliuzes', eyebrow: 'Saugumui, tylai ir šešėliui',
    intro: 'Išorinis sprendimas, padedantis apsaugoti langus ir kontroliuoti patalpų klimatą.',
    description: 'Apsauginės žaliuzės visiškai užtemdo patalpą, didina privatumą, padeda sumažinti triukšmą ir saugo langus nuo oro poveikio. Galimas rankinis arba automatinis valdymas.',
    benefits: ['Papildoma apsauga nuo įsilaužimo', 'Visiškas užtemdymas ir privatumas', 'Padeda sulaikyti karštį bei šaltį'], image: 'blinds'
  },
  {
    slug: 'romanetes-alytuje', title: 'Romanetės', category: 'zaliuzes', eyebrow: 'Minkštas audinys, tvarkinga forma',
    intro: 'Puošnesnė už roletą ir praktiškesnė už tradicinę užuolaidą.',
    description: 'Romanetės siuvamos iš įvairių audinių, gali būti dieninės, naktinės arba dvigubos. Jos puikiai tinka miegamajam, virtuvei ar svetainei, neužima daug vietos ir yra lengvai prižiūrimos.',
    benefits: ['Dieniniai ir naktiniai audiniai', 'Kompaktiška užuolaidų alternatyva', 'Lengva derinti prie interjero'], image: 'blinds'
  },

  {
    slug: 'tinkleliai-nuo-vabzdziu-alytuje', title: 'Tinkleliai nuo vabzdžių', category: 'tinkleliai', eyebrow: 'Grynas oras be vabzdžių',
    intro: 'Praktiški tinkleliai langams, durims, terasoms ir didelėms angoms.',
    description: 'Aliuminio konstrukcija atspari korozijai ir ilgaamžė, o pilkas ar juodas tinklelio audinys beveik nemažina šviesos. Galimi standartiniai ir antialerginiai audiniai, sulaikantys dalį žiedadulkių.',
    benefits: ['Rėmeliai, durų, roletiniai ir plisuoti modeliai', 'Netrukdo vėdinti patalpų', 'Galimas antialerginis tinklelis'], image: 'blinds',
    children: ['tinkleliai-remeliai-alytuje', 'tinkleliai-durims-alytuje', 'tinkleliai-roletai-alytuje', 'plisuoti-tinkleliai-alytuje']
  },
  {
    slug: 'tinkleliai-remeliai-alytuje', title: 'Tinkleliai–rėmeliai', category: 'tinkleliai', eyebrow: 'Paprasta ir nepastebima',
    intro: 'Populiarus sprendimas, kurį lengva įdėti, išimti ir prižiūrėti.',
    description: 'Plonas aliuminio rėmelis pritaikomas konkrečiam langui nepažeidžiant jo rėmo. Galite rinktis įprastą arba tankesnį antialerginį audinį, o tinklelis patogiai nuimamas valymui ar žiemos sezonui.',
    benefits: ['Lengvai nuimamas', 'Nepažeidžia lango rėmo', 'Įprastas arba antialerginis audinys'], image: 'blinds'
  },
  {
    slug: 'tinkleliai-durims-alytuje', title: 'Tinkleliai durims', category: 'tinkleliai', eyebrow: 'Atverkite terasą vasarai',
    intro: 'Patogus sprendimas balkono ar terasos durims, valdomas iš abiejų pusių.',
    description: 'Tvirta aliuminio konstrukcija ir patogi rankena leidžia lengvai atidaryti bei uždaryti tinklelį. Jis išlaiko estetišką vaizdą, praleidžia orą ir saugo nuo nepageidaujamų vabzdžių.',
    benefits: ['Valdymas iš vidaus ir lauko', 'Tvirta aliuminio konstrukcija', 'Tinka balkono ir terasos durims'], image: 'blinds'
  },
  {
    slug: 'tinkleliai-roletai-alytuje', title: 'Tinkleliai roletai', category: 'tinkleliai', eyebrow: 'Susukami, kai nereikalingi',
    intro: 'Universalus tinklelis langui, balkono durims ar stoglangiui.',
    description: 'Tinklelis susukamas į kasetę viršuje arba šone, todėl nenaudojamas lieka apsaugotas. Aliuminio konstrukcija montuojama prie rėmo arba nišoje, o specialūs šepetėliai padeda nepraleisti net smulkių vabzdžių.',
    benefits: ['Susukamas į apsauginę kasetę', 'Tinka langams, durims ir stoglangiams', 'Atspari aliuminio konstrukcija'], image: 'blinds'
  },
  {
    slug: 'plisuoti-tinkleliai-alytuje', title: 'Plisuoti tinkleliai', category: 'tinkleliai', eyebrow: 'Didelėms angoms',
    intro: 'Estetiškas, lengvai suskleidžiamas sprendimas durims ir vitrinoms.',
    description: 'Klostuotas audinys susiskleidžia akordeono principu ir gali būti sustabdytas bet kurioje vietoje. Tinka langams, durims, slankiojančioms sistemoms ir didelių matmenų nišoms.',
    benefits: ['Patogus valdymas be spyruoklių', 'Tinka dideliems matmenims', 'Kompaktiškai susiskleidžia'], image: 'blinds'
  },

  {
    slug: 'balkonu-stiklinimas-alytuje', title: 'Balkonų stiklinimas', category: 'kita', eyebrow: 'Daugiau komforto visais metų laikais',
    intro: 'Apsaugokite balkoną nuo lietaus, vėjo, šalčio ir miesto dulkių.',
    description: 'Balkonus stikliname plastikinėmis arba stumdomomis aliuminio konstrukcijomis. Sprendimą parenkame pagal norimą šilumą, naudojimo būdą ir balkono konstrukciją, kruopščiai atliekame matavimą bei montavimą.',
    benefits: ['Plastikinės arba aliuminio konstrukcijos', 'Daugiau šilumos ir apsaugos', '5 metų garantija'], image: 'hero'
  },
  {
    slug: 'garazo-vartai-alytuje', title: 'Garažo vartai', category: 'kita', eyebrow: 'Patogus įvažiavimas kasdien',
    intro: 'Segmentiniai arba susukami vartai, gaminami pagal individualią angą.',
    description: 'Segmentiniai vartai kyla vertikaliai ir taupo vietą, o susukami kompaktiškai susivynioja ant veleno. Galimas rankinis arba automatinis valdymas, papildomi langai, durys bei apsaugos sprendimai.',
    benefits: ['Gaminami pagal individualų užsakymą', 'Rankinis arba automatinis valdymas', 'Sandari ir tvirta konstrukcija'], image: 'hero'
  },
  {
    slug: 'paslaugos-alytuje', title: 'Paslaugos', category: 'paslaugos', eyebrow: 'Nuo matavimo iki paskutinės detalės',
    intro: 'Profesionalus montavimas, apdaila ir remontas vienose rankose.',
    description: 'Kokybiškas gaminys veikia taip gerai, kaip yra sumontuotas. Mūsų specialistai pasirūpina matavimu, montavimu, apdaila, reguliavimu ir pogarantiniu remontu.',
    benefits: ['Patyrę specialistai', 'Aiški darbų eiga', 'Garantinis ir pogarantinis aptarnavimas'], image: 'install',
    children: ['montavimo-darbai-alytuje', 'apdailos-darbai-alytuje', 'remonto-darbai-alytuje']
  },
  {
    slug: 'montavimo-darbai-alytuje', title: 'Montavimo darbai', category: 'paslaugos', eyebrow: 'Kokybė prasideda nuo montavimo',
    intro: 'Langus, duris ir garažo vartus sumontuojame tiksliai, sandariai ir atsakingai.',
    description: 'Specialistas įvertina angą, sienos konstrukciją ir darbų sudėtingumą, išmontuoja senus gaminius, paruošia angą, pritvirtina naują konstrukciją ir užtikrina sandarumą. Taip išsaugomos gaminio šilumos bei garso izoliacinės savybės.',
    benefits: ['Profesionalus matavimas', 'Senų gaminių išmontavimas', 'Sandarus montavimas ir patikra'], image: 'install'
  },
  {
    slug: 'apdailos-darbai-alytuje', title: 'Apdailos darbai', category: 'paslaugos', eyebrow: 'Tvarkingas rezultatas',
    intro: 'Po montavimo sutvarkome angokraščius viduje ir išorėje.',
    description: 'Priklausomai nuo angos ir jūsų remonto planų atliekame dalinę arba pilną apdailą. Galime naudoti apdailos juosteles, tinkuoti, glaistyti ir dažyti, kad langas ar durys atrodytų užbaigtai.',
    benefits: ['Dalinė arba pilna apdaila', 'Vidaus ir lauko angokraščiai', 'Tinkavimas, glaistymas ir dažymas'], image: 'install'
  },
  {
    slug: 'remonto-darbai-alytuje', title: 'Langų ir durų remontas', category: 'paslaugos', eyebrow: 'Sugrąžiname sklandų veikimą',
    intro: 'Remontuojame langus ir duris nepriklausomai nuo to, kas juos sumontavo.',
    description: 'Reguliuojame apkaustus, keičiame stiklo paketus, spynas, tarpines, rankenas ir palanges. Po apžiūros tiksliai įvertiname gedimą, reikalingas medžiagas ir darbų kainą.',
    benefits: ['Langų ir durų reguliavimas', 'Stiklo paketų bei furnitūros keitimas', 'Sandarumo ir judančių dalių patikra'], image: 'install'
  }
]

export const pageBySlug = (slug: string) => pages.find((page) => page.slug === slug)

export const productGroups = [
  { title: 'Langai ir durys', text: 'Šilti, saugūs ir ilgaamžiai sprendimai namams.', href: '/langai-ir-durys-alytuje/', image: 'hero' },
  { title: 'Žaliuzės ir roletai', text: 'Šviesos kontrolė ir privatumas pagal jūsų stilių.', href: '/zaliuzes-ir-roletai-alytuje/', image: 'blinds' },
  { title: 'Balkonų stiklinimas', text: 'Daugiau šilumos ir naudojamos erdvės visais sezonais.', href: '/balkonu-stiklinimas-alytuje/', image: 'balcony' },
  { title: 'Garažo vartai', text: 'Segmentiniai ar susukami vartai su automatika.', href: '/garazo-vartai-alytuje/', image: 'garage' },
  { title: 'Tinkleliai', text: 'Grynas oras be vabzdžių ir nepageidaujamų svečių.', href: '/tinkleliai-nuo-vabzdziu-alytuje/', image: 'screens' },
  { title: 'Montavimas ir remontas', text: 'Profesionalus darbas nuo matavimo iki apdailos.', href: '/paslaugos-alytuje/', image: 'install' },
]
