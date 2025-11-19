var levels = [
  {
    helpTitle : "Sélectionner des éléments par leur type",
    selectorName : "Sélecteur de type",
    doThis : "Sélectionnez les assiettes",
    selector : "plate",
    syntax : "A",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type fait référence au type de balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Sélectionnez les boîtes bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionner des éléments par leur type",
    selectorName : "Sélecteur de type",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type fait référence au type de balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Sélectionnez l'assiette chic",
    selector : "#fancy",
    selectorName: "Sélecteur d'ID",
    helpTitle: "Sélectionner des éléments avec un ID",
    syntax: "#id",
    help : 'Sélectionne l\'élément avec un <strong>id</strong> spécifique. Vous pouvez aussi combiner le sélecteur d\'ID avec le sélecteur de type.',
    examples : [
      '<strong>#cool</strong> sélectionne tout élément avec <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Sélectionner un élément à l'intérieur d'un autre élément",
    selectorName : "Sélecteur de descendant",
    doThis : "Sélectionnez la pomme sur l'assiette",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Sélectionne tous les <strong>B</strong> à l'intérieur de <strong>A</strong>. <strong>B</strong> est appelé un descendant car il est à l'intérieur d'un autre élément.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les éléments <tag>strong</tag> qui sont à l\'intérieur de n\'importe quel <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur de l\'élément avec <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Sélectionnez le cornichon sur l'assiette chic",
    selector : "#fancy pickle",
    helpTitle: "Combiner les sélecteurs de descendant et d'ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Vous pouvez combiner n\'importe quel sélecteur avec le sélecteur de descendant.',
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur des éléments avec <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Sélectionnez les petites pommes",
    selector : ".small",
    selectorName: "Sélecteur de classe",
    helpTitle: "Sélectionner des éléments par leur classe",
    syntax: ".classname",
    help : 'Le sélecteur de classe sélectionne tous les éléments avec cet attribut de classe. Les éléments ne peuvent avoir qu\'un seul ID, mais plusieurs classes.',
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Sélectionnez les petites oranges",
    selector : "orange.small",
    helpTitle: "Combiner le sélecteur de classe",
    syntax: "A.className",
    help : 'Vous pouvez combiner le sélecteur de classe avec d\'autres sélecteurs, comme le sélecteur de type.',
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec <strong>id="big"</strong> qui ont aussi <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Sélectionnez les petites oranges dans les bentos",
    selector : "bento orange.small",
    syntax: "Mettez-y du vôtre !",
    helpTitle: "Vous pouvez le faire...",
    help : 'Combinez ce que vous avez appris dans les derniers niveaux pour résoudre celui-ci !',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Sélectionnez toutes les assiettes et les bentos",
    selector : "plate,bento",
    selectorName : "Combinateur virgule",
    helpTitle: "Combinez les sélecteurs avec... des virgules !",
    syntax : "A, B",
    help : 'Grâce à la technologie Shatner, cela sélectionne tous les éléments <strong>A</strong> et <strong>B</strong>. Vous pouvez combiner n\'importe quels sélecteurs de cette façon, et vous pouvez en spécifier plus de deux.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> ainsi que tous les éléments avec <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Sélectionnez tous les éléments !",
    selector : "*",
    selectorName:  "Le sélecteur universel",
    helpTitle: "Vous pouvez tout sélectionner !",
    syntax : "*",
    help : 'Vous pouvez sélectionner tous les éléments avec le sélecteur universel ! ',
    examples : [
      '<strong>p *</strong> sélectionne n\'importe quel élément à l\'intérieur de tous les éléments <tag>p</tag>.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Sélectionnez tout ce qui est sur une assiette",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combiner le sélecteur universel",
    help : 'Cela sélectionne tous les éléments à l\'intérieur de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments à l\'intérieur de tous les éléments <tag>p</tag>.',
      '<strong>ul.fancy *</strong> sélectionne tous les éléments à l\'intérieur de tous les éléments <tag>ul class="fancy"</tag>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Sélectionnez chaque pomme qui est à côté d'une assiette",
    selector : "plate + apple",
    helpTitle: "Sélectionner un élément qui suit directement un autre élément",
    selectorName: "Sélecteur de voisin adjacent",
    syntax : "A + B",
    help : "Cela sélectionne tous les éléments <strong>B</strong> qui suivent directement <strong>A</strong>. Les éléments qui se suivent sont appelés voisins. Ils sont au même niveau, ou profondeur. <br/><br/>Dans le balisage HTML de ce niveau, les éléments qui ont la même indentation sont voisins.",
    examples : [
      '<strong>p + .intro</strong> sélectionne tous les éléments avec <strong>class="intro"</strong> qui suivent directement un <tag>p</tag>',
      '<strong>div + a</strong> sélectionne tous les éléments <tag>a</tag> qui suivent directement un <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Sélecteur de voisin général",
    helpTitle: "Sélectionner des éléments qui suivent un autre élément",
    syntax: "A ~ B",
    doThis : "Sélectionnez les cornichons à côté du bento",
    selector : "bento ~ pickle",
    help : "Vous pouvez sélectionner tous les voisins d'un élément qui le suivent. C'est comme le sélecteur de voisin adjacent (A + B) sauf qu'il récupère tous les éléments suivants au lieu d'un seul.",
    examples : [
      '<strong>A ~ B</strong> sélectionne tous les <strong>B</strong> qui suivent un <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Sélecteur d'enfant",
    syntax: "A > B&nbsp;",
    doThis : "Sélectionnez la pomme directement sur une assiette",
    selector : "plate > apple",
    helpTitle: "Sélectionner les enfants directs d'un élément",
    help : "Vous pouvez sélectionner des éléments qui sont des enfants directs d'autres éléments. Un élément enfant est tout élément qui est imbriqué directement dans un autre élément. <br><br>Les éléments qui sont imbriqués plus profondément sont appelés éléments descendants.",
    examples : [
      '<strong>A > B</strong> sélectionne tous les <strong>B</strong> qui sont des enfants directs de <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Pseudo-sélecteur premier enfant",
    helpTitle: "Sélectionner le premier élément enfant à l'intérieur d'un autre élément",
    doThis : "Sélectionnez l'orange du haut",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Vous pouvez sélectionner le premier élément enfant. Un élément enfant est tout élément qui est directement imbriqué dans un autre élément. Vous pouvez combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
    examples : [
      '<strong>:first-child</strong> sélectionne tous les premiers éléments enfants.',
      '<strong>p:first-child</strong> sélectionne tous les premiers éléments enfants <tag>p</tag>.',
      '<strong>div p:first-child</strong> sélectionne tous les premiers éléments enfants <tag>p</tag> qui sont dans un <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Pseudo-sélecteur enfant unique",
    helpTitle: "Sélectionner un élément qui est le seul élément à l'intérieur d'un autre.",
    doThis : "Sélectionnez la pomme et le cornichon sur les assiettes",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Vous pouvez sélectionner tout élément qui est le seul élément à l'intérieur d'un autre.",
    examples : [
      '<strong>span:only-child</strong> sélectionne les éléments <tag>span</tag> qui sont le seul enfant d\'un autre élément.',
      '<strong>ul li:only-child</strong> sélectionne le seul élément <tag>li</tag> qui est dans un <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Pseudo-sélecteur dernier enfant",
    helpTitle: "Sélectionner le dernier élément à l'intérieur d'un autre élément",
    doThis : "Sélectionnez la petite pomme et le cornichon",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Vous pouvez utiliser ce sélecteur pour sélectionner un élément qui est le dernier élément enfant à l'intérieur d'un autre élément. <br><br>Astuce pro &rarr; Dans les cas où il n'y a qu'un seul élément, cet élément compte comme first-child, only-child et last-child !",
    examples : [
      '<strong>:last-child</strong> sélectionne tous les éléments derniers enfants.',
      '<strong>span:last-child</strong> sélectionne tous les éléments <tag>span</tag> derniers enfants.',
      '<strong>ul li:last-child</strong> sélectionne les derniers éléments <tag>li</tag> à l\'intérieur de n\'importe quel <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Pseudo-sélecteur nième enfant",
    helpTitle: "Sélectionner un élément par son ordre dans un autre élément",
    doThis : "Sélectionnez la 3ème assiette",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Sélectionne le <strong>nième</strong> (Ex: 1er, 3ème, 12ème etc.) élément enfant dans un autre élément.",
    examples : [
      '<strong>:nth-child(8)</strong> sélectionne tous les éléments qui sont le 8ème enfant d\'un autre élément.',
      '<strong>div p:nth-child(2)</strong> sélectionne le second <strong>p</strong> dans chaque <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Sélecteur nième dernier enfant",
    helpTitle: "Sélectionner un élément par son ordre dans un autre élément, en comptant depuis la fin",
    doThis : "Sélectionnez le 1er bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Sélectionne les enfants depuis le bas du parent. C'est comme nth-child, mais en comptant depuis la fin !",
    examples : [
      '<strong>:nth-last-child(2)</strong> sélectionne tous les avant-derniers éléments enfants.'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "Sélecteur premier du type",
    helpTitle: "Sélectionner le premier élément d'un type spécifique",
    doThis : "Sélectionnez la première pomme",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Sélectionne le premier élément de ce type dans un autre élément.",
    examples : [
      '<strong>span:first-of-type</strong> sélectionne le premier <tag>span</tag> dans n\'importe quel élément.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Sélecteur nième du type",
    doThis: "Sélectionnez toutes les assiettes paires",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Sélectionne un élément spécifique basé sur son type et son ordre dans un autre élément - ou les instances paires ou impaires de cet élément.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> sélectionne la seconde instance d\'un div.',
      '<strong>.example:nth-of-type(odd)</strong> sélectionne toutes les instances impaires de la classe example.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Sélecteur nième du type avec formule",
    doThis: "Sélectionnez une assiette sur deux, en commençant par la 3ème",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "La formule nth-of-type sélectionne chaque nième élément, en commençant le compte à une instance spécifique de cet élément.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> sélectionne une instance de <tag>span</tag> sur 6, en commençant par (et incluant) la seconde instance.'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Sélecteur seul du type",
    helpTitle: "Sélectionner des éléments qui sont les seuls de leur type dans leur élément parent",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Sélectionnez la pomme sur l'assiette du milieu",
    help : "Sélectionne le seul élément de son type dans un autre élément.",
    examples : [
      '<strong>p span:only-of-type</strong> sélectionne un <tag>span</tag> dans n\'importe quel <tag>p</tag> s\'il est le seul <tag>span</tag> dedans.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Sélecteur dernier du type",
    helpTitle: "Sélectionner le dernier élément d'un type spécifique",
    doThis : "Sélectionnez la dernière pomme et la dernière orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Sélectionne chaque dernier élément de ce type dans un autre élément. Rappelez-vous que le type fait référence au type de balise, donc <tag>p</tag> et <tag>span</tag> sont des types différents. <br><br> Je me demande si c'est comme ça que le dernier dinosaure a été sélectionné avant de s'éteindre.",
    examples : [
      '<strong>div:last-of-type</strong> sélectionne le dernier <tag>div</tag> dans chaque élément.',
      '<strong>p span:last-of-type</strong> sélectionne le dernier <tag>span</tag> dans chaque <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Sélecteur vide",
    helpTitle: "Sélectionner des éléments qui n'ont pas d'enfants",
    doThis : "Sélectionnez les bentos vides",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Sélectionne les éléments qui n'ont aucun autre élément à l'intérieur.",
    examples : [
      '<strong>div:empty</strong> sélectionne tous les éléments <tag>div</tag> vides.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Pseudo-classe de négation",
    helpTitle: "Sélectionner tous les éléments qui ne correspondent pas au sélecteur de négation",
    doThis : "Sélectionnez les grandes pommes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Vous pouvez utiliser ceci pour sélectionner tous les éléments qui ne correspondent pas au sélecteur <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> sélectionne tous les éléments qui n\'ont pas <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> sélectionne tous les <tag>div</tag> qui ne sont pas un premier enfant.',
      '<strong>:not(.big, .medium)</strong> sélectionne tous les éléments qui n\'ont pas <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Sélecteur d'attribut",
    helpTitle: "Sélectionner tous les éléments qui ont un attribut spécifique",
    doThis : "Sélectionnez les éléments pour quelqu'un",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Les attributs apparaissent à l\'intérieur de la balise ouvrante d\'un élément, comme ceci : <tag>span attribute="value"</tag>. Un attribut n\'a pas toujours de valeur, il peut être vide !',
    examples : [
      '<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> qui ont un attribut <strong>href="n\'importe quoi"</strong>.',
      '<strong>[type]</strong> sélectionne tous les éléments qui ont un attribut <strong>type="n\'importe quoi"</strong>.'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Sélecteur d'attribut",
    helpTitle: "Sélectionner tous les éléments qui ont un attribut spécifique",
    doThis : "Sélectionnez les assiettes pour quelqu'un",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combinez le sélecteur d'attribut avec un autre sélecteur (comme le sélecteur de nom de balise) en l'ajoutant à la fin.",
    examples : [
      '<strong>[value]</strong> sélectionne tous les éléments qui ont un attribut <strong>value="n\'importe quoi"</strong>.',
      '<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> qui ont un attribut <strong>href="n\'importe quoi"</strong>.',
      '<strong>input[disabled]</strong> sélectionne tous les éléments <tag>input</tag> avec l\'attribut <strong>disabled</strong>'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Sélecteur de valeur d'attribut",
    helpTitle: "Sélectionner tous les éléments qui ont une valeur d'attribut spécifique",
    doThis : "Sélectionnez le repas de Vitaly",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Les sélecteurs d'attribut sont sensibles à la casse, chaque caractère doit correspondre exactement.",
    examples : [
      '<strong>input[type="checkbox"]</strong> sélectionne tous les éléments input de type checkbox.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Sélecteur d'attribut commençant par",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut qui commence par des caractères spécifiques",
    doThis : "Sélectionnez les éléments pour les noms qui commencent par 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> sélectionne les éléments avec la classe <strong>toy</strong> et soit <strong>category="Swimwear"</strong> soit <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Sélecteur d'attribut finissant par",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut qui finit par des caractères spécifiques",
    doThis : "Sélectionnez les éléments pour les noms qui finissent par 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> sélectionne toutes les images qui affichent une image <strong>.jpg</strong>.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Sélecteur d'attribut joker",
    helpTitle: "Sélectionner tous les éléments avec une valeur d'attribut qui contient des caractères spécifiques n'importe où",
    syntax: '[attribute*="value"]',
    doThis : "Sélectionnez les repas pour les noms qui contiennent 'obb'",
    selector : '[for*="obb"]',
    help : 'Un sélecteur utile si vous pouvez identifier un motif commun dans des choses comme les attributs <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> sélectionne tous les éléments image qui affichent des images du dossier "thumbnails".',
      '<strong>[class*="heading"]</strong> sélectionne tous les éléments avec "heading" dans leur classe, comme <strong>class="main-heading"</strong> et <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
