import type { Post } from '@/types/posts'

export function getPosts(): Post[] {
  return [
    {
      id: 0,
      title: 'Por que simplicidade escala melhor',
      slug: 'simplicidade-escala',
      date: '2026-01-01',
      dateLabel: 'Janeiro de 2026',
      tag: 'Tecnologia',
      readTime: '4 min',
      excerpt: 'O código mais elegante é aquele que não existe. Uma reflexão sobre remover em vez de adicionar.',
      body: `
        <p>Existe uma crença persistente no mundo do desenvolvimento de software de que complexidade é sinal de competência. Quanto mais camadas, mais abstrações, mais padrões de arquitetura — mais sério parece o trabalho. Eu já pensei assim. Me enganei.</p>
        <p>A verdade é o oposto: o código mais elegante é aquele que não existe.</p>
        <h2>O custo invisível de cada linha</h2>
        <p>Cada linha de código que você escreve é uma linha que precisa ser lida, mantida e eventualmente deletada. Quando você adiciona algo desnecessário, não está apenas adicionando código — está adicionando carga cognitiva para todo mundo que vai tocar naquele sistema depois de você, incluindo você mesmo daqui a seis meses.</p>
        <blockquote>Simplicidade é a sofisticação máxima. Não porque seja fácil de atingir, mas porque exige muito mais julgamento do que complexidade.</blockquote>
        <p>O problema é que remover é mais difícil do que adicionar. Adicionar parece produtivo. Remover parece que você está andando para trás. Mas a maior parte do trabalho de engenharia de verdade é resistência — resistir à tentação de resolver problemas que não existem ainda.</p>
        <h2>Quando escala de verdade</h2>
        <p>Um sistema simples escala de três formas que um sistema complexo não consegue. Primeiro, é mais fácil de entender — qualquer pessoa pode pegar e continuar. Segundo, é mais fácil de mudar — você não precisa rastrear dependências em cinco camadas para alterar um comportamento. Terceiro, é mais fácil de confiar — você sabe o que está acontecendo.</p>
        <p>Isso não significa fazer menos. Significa fazer exatamente o necessário com precisão cirúrgica. É uma habilidade que se desenvolve com tempo, erro e muita humildade.</p>
        <hr>
        <p>Da próxima vez que você for adicionar algo, pare e pergunte: o que acontece se eu não adicionar isso? Se a resposta for "nada", você acabou de encontrar a decisão certa.</p>
      `,
    },
    {
      id: 1,
      title: 'Atenção é o recurso mais escasso',
      slug: 'atencao-recurso-escasso',
      date: '2026-03-01',
      dateLabel: 'Março de 2026',
      tag: 'Processo',
      readTime: '6 min',
      excerpt: 'O que aprendi tentando construir produtos que as pessoas realmente usam — e os que ignoram.',
      body: `
        <p>A gente fala muito sobre tempo. Pouco sobre atenção. E são coisas completamente diferentes.</p>
        <p>Tempo é democrático — todo mundo tem vinte e quatro horas. Atenção é outra história. É finita, se fragmenta com facilidade, e uma vez perdida, custa caro recuperar. O verdadeiro problema de produtividade da nossa era não é ter pouco tempo. É ter pouca atenção.</p>
        <h2>O que aprendi construindo produtos</h2>
        <p>Quando comecei a construir produtos digitais, meu foco estava em funcionalidades. Mais features, mais valor — parecia lógico. Mas o que eu percebi, com o tempo, é que os produtos que as pessoas realmente usam são os que respeitam a atenção delas.</p>
        <blockquote>Um produto que exige pouco para entregar muito é raro. E é exatamente por isso que quando você encontra um, não larga mais.</blockquote>
        <p>Isso muda tudo sobre como você projeta. A pergunta não é "o que mais posso adicionar?". É "o que posso remover para que a coisa certa apareça com mais clareza?".</p>
        <h2>Atenção como ato de design</h2>
        <p>Cada notificação desnecessária, cada modal que interrompe, cada passo a mais num fluxo — tudo isso está consumindo algo que o usuário não vai recuperar. E em algum momento, ele vai embora.</p>
        <p>Os produtos que sobrevivem são os que tratam a atenção do usuário como o recurso mais precioso que existe. Porque é exatamente isso que ela é.</p>
        <hr>
        <p>Proteja sua atenção. E proteja a atenção de quem usa o que você constrói.</p>
      `,
    },
    {
      id: 2,
      title: 'Velocidade como valor de design',
      slug: 'velocidade-design',
      date: '2026-04-01',
      dateLabel: 'Abril de 2026',
      tag: 'Design',
      readTime: '3 min',
      excerpt: 'Performance não é detalhe técnico. É respeito ao tempo do usuário.',
      body: `
        <p>Performance não é detalhe técnico. É respeito ao tempo do usuário.</p>
        <p>Quando um produto é lento, a mensagem implícita é: o meu tempo vale mais que o seu. Pode não ser intencional, mas é o que a experiência comunica. E experiências comunicam mais do que qualquer copy ou visual.</p>
        <h2>Velocidade como intenção</h2>
        <p>Os produtos mais amados do mundo têm uma coisa em comum: eles respondem. Você clica, acontece. Você digita, aparece. Não há lacuna entre intenção e resultado. Isso cria uma sensação de controle, de fluidez, de que a ferramenta está do seu lado.</p>
        <blockquote>Um produto rápido não precisa ser bonito para parecer bom. Mas um produto lento dificilmente compensa com visual.</blockquote>
        <p>Quando você trata velocidade como decisão de design — não como otimização posterior — você começa a tomar decisões diferentes. Você questiona cada dependência, cada requisição, cada animação.</p>
        <h2>O que muda na prática</h2>
        <p>Na prática, isso significa que performance entra no processo desde o começo. Não é uma tarefa de sprint final. É um valor que permeia cada decisão: qual biblioteca usar, como estruturar o dado, o que renderizar primeiro.</p>
        <hr>
        <p>Velocidade é design. Trate como tal.</p>
      `,
    },
    {
      id: 3,
      title: 'O mito do desenvolvedor 10x',
      slug: 'mito-desenvolvedor-10x',
      date: '2026-04-15',
      dateLabel: 'Abril de 2026',
      tag: 'Tecnologia',
      readTime: '5 min',
      excerpt: 'Produtividade não se mede em linhas de código. Mede-se nas decisões que você não precisou tomar.',
      body: `
        <p>O conceito de desenvolvedor 10x surgiu de um estudo dos anos 60 e nunca mais nos deixou. A ideia de que existem pessoas que produzem dez vezes mais que a média. É sedutora. É também, na maior parte dos casos, uma distorção perigosa.</p>
        <p>Produtividade não se mede em linhas de código. Mede-se nas decisões que você não precisou tomar.</p>
        <h2>O que define um desenvolvedor excepcional</h2>
        <p>O desenvolvedor que realmente acelera um time não é necessariamente o que codifica mais rápido. É o que faz as perguntas certas antes de começar, que questiona se o problema precisa ser resolvido da forma que foi pedido, que simplifica antes de construir.</p>
        <blockquote>A diferença entre um desenvolvedor bom e um ótimo está frequentemente no que ele decide não fazer.</blockquote>
        <p>Esse tipo de julgamento é difícil de cultivar e impossível de medir em métricas simples. É o motivo pelo qual times que otimizam por velocidade bruta frequentemente produzem sistemas que ninguém consegue manter.</p>
        <h2>O custo do mito</h2>
        <p>Quando você persegue o ideal do desenvolvedor 10x, você cria uma cultura que valoriza a performance individual sobre a clareza coletiva. E clareza coletiva é o que sustenta um produto por anos, não meses.</p>
        <p>O desenvolvedor que você quer no seu time não é o herói. É o que faz todo mundo trabalhar melhor.</p>
        <hr>
        <p>Menos mito, mais colaboração. O software mais duradouro que conheço foi construído assim.</p>
      `,
    },
    {
      id: 4,
      title: 'Golang na prática: o que mudou na forma como penso backend',
      slug: 'golang-na-pratica',
      date: '2026-02-01',
      dateLabel: 'Fevereiro de 2026',
      tag: 'Tecnologia',
      readTime: '5 min',
      excerpt: 'Depois de anos com Node.js, comecei a trabalhar com Go. A mudança não foi sobre velocidade — foi sobre clareza.',
      body: `
        <p>Durante anos, Node.js foi minha resposta automática para backend. Funcionava. Conhecia bem. E quando comecei a trabalhar com Golang, honestamente, levei um tempo para entender por que alguém escolheria isso.</p>
        <p>Entendi quando a aplicação ficou grande.</p>
        <h2>A mudança não é sobre velocidade</h2>
        <p>O argumento mais comum a favor de Go é performance. Goroutines, compilação nativa, ausência de runtime pesado. Tudo verdade. Mas não é o que me convenceu.</p>
        <p>O que me convenceu foi a clareza. Go te força a ser explícito. Não tem magia. Não tem decorators que fazem você perguntar "mas como isso acontece?". O que você escreve é literalmente o que vai acontecer.</p>
        <blockquote>Quando você lê código Go de outra pessoa pela primeira vez, raramente se perde. Isso é raro. E é valioso.</blockquote>
        <p>Em Node, especialmente com frameworks maduros e muita injeção de dependência, código pode virar uma caixa preta. Você sabe o que entra e o que sai, mas o meio é opaco. Go resiste a isso por design.</p>
        <h2>O que fica mais difícil</h2>
        <p>Não é tudo flores. O tratamento de erros verboso incomoda no começo. E a curva de aprendizado real não está na sintaxe — está em pensar sobre concorrência de forma responsável.</p>
        <p>Mas o custo vale. Especialmente em sistemas que precisam crescer e ser mantidos por times. Go envelhece bem.</p>
        <hr>
        <p>Não troquei Node por Go — uso os dois, dependendo do problema. Mas entender Go mudou como escrevo backend em qualquer linguagem.</p>
      `,
    },
    {
      id: 5,
      title: 'O que aprendi trabalhando com times globais',
      slug: 'times-globais',
      date: '2026-02-15',
      dateLabel: 'Fevereiro de 2026',
      tag: 'Processo',
      readTime: '4 min',
      excerpt: 'Reuniões em inglês, fusos diferentes, documentação impecável. Aprendi mais sobre comunicação do que sobre código.',
      body: `
        <p>Meu primeiro projeto com time internacional foi uma mistura de animação e ansiedade. Reuniões em inglês, fusos horários diferentes, documentação que precisava ser impecável porque você não podia simplesmente girar a cadeira e perguntar.</p>
        <p>Aprendi mais sobre comunicação nesse projeto do que em anos anteriores.</p>
        <h2>A clareza que o inglês exige</h2>
        <p>Trabalhar em inglês quando não é sua língua nativa te obriga a ser mais preciso. Você não tem o luxo da ambiguidade. Uma frase que ficaria "ok em contexto" em português precisa fazer sentido sozinha numa mensagem escrita.</p>
        <blockquote>A barreira do idioma, paradoxalmente, melhora a comunicação. Você aprende a ser claro antes de ser rápido.</blockquote>
        <p>Com o tempo, essa clareza começa a contaminar tudo. Você passa a escrever código mais legível, pull requests mais descritivos, comentários que realmente explicam o porquê.</p>
        <h2>O que ninguém menciona sobre times distribuídos</h2>
        <p>A assincronicidade força autonomia. Quando você não pode esperar pela resposta imediata de alguém em outro fuso, você precisa tomar decisões, documentar contexto e avançar. É desconfortável no começo e libertador depois.</p>
        <p>E aprender a trabalhar com pessoas de culturas diferentes ensina que existem múltiplas formas válidas de resolver o mesmo problema. Isso é valioso — e humilhante da forma certa.</p>
        <hr>
        <p>Se você tiver a oportunidade de trabalhar em um projeto global, aceite. Mesmo que seja difícil. Especialmente se for.</p>
      `,
    },
    {
      id: 6,
      title: 'Micro-frontends na prática: o que eu queria saber antes',
      slug: 'micro-frontends-na-pratica',
      date: '2026-03-15',
      dateLabel: 'Março de 2026',
      tag: 'Tecnologia',
      readTime: '6 min',
      excerpt: 'A promessa é autonomia de times e deploys independentes. A realidade é mais complicada — e mais nuançada.',
      body: `
        <p>Micro-frontends parecem uma ideia excelente no papel. Autonomia de times, deploys independentes, escalabilidade de desenvolvimento. A promessa é sedutora.</p>
        <p>A realidade é mais complicada. E mais nuançada.</p>
        <h2>Quando faz sentido</h2>
        <p>Micro-frontends resolvem um problema organizacional, não técnico. Se você tem múltiplos times grandes, trabalhando em domínios distintos, com releases desacoplados — micro-frontends podem ser a resposta certa.</p>
        <blockquote>Se você tem um time de cinco pessoas, micro-frontend é engenharia para o problema que você não tem.</blockquote>
        <p>O erro mais comum é adotar a arquitetura pela arquitetura. Porque ficou famosa. Porque parece sofisticado. Mas toda essa complexidade tem custo — em configuração, em debugging, em coordenação entre times.</p>
        <h2>O que ninguém te conta antes</h2>
        <p>O problema de compartilhar estado entre micro-frontends vai te machucar. Gerenciamento de dependências compartilhadas — especialmente React em múltiplas versões — vai te machucar. A experiência de desenvolvimento local, com múltiplos projetos rodando ao mesmo tempo, vai te machucar.</p>
        <p>Isso não significa que é errado — significa que você precisa entrar de olhos abertos, com uma estratégia clara para cada um desses pontos de dor.</p>
        <h2>O que aprendi</h2>
        <p>Monorepo com boa separação de domínios resolve 80% do que micro-frontends prometem, com 20% da complexidade. Antes de partir para a arquitetura distribuída, esgote as opções mais simples. O time vai agradecer.</p>
        <hr>
        <p>Micro-frontends não são ruins. São uma ferramenta poderosa para o problema certo. Saiba distinguir um do outro.</p>
      `,
    },
    {
      id: 7,
      title: 'React Native ou Flutter? A resposta honesta',
      slug: 'react-native-vs-flutter',
      date: '2026-04-08',
      dateLabel: 'Abril de 2026',
      tag: 'Tecnologia',
      readTime: '5 min',
      excerpt: 'Usei os dois em projetos reais. A resposta certa depende do contexto — não de benchmark.',
      body: `
        <p>Essa é uma das perguntas que mais aparecem quando alguém está começando mobile: React Native ou Flutter? Usei os dois em projetos reais. Tenho uma opinião.</p>
        <p>Mas antes da opinião, o contexto importa.</p>
        <h2>O ponto de partida muda tudo</h2>
        <p>Se você vem do mundo React, React Native tem um custo de entrada menor. A mental model é familiar. O ecossistema é conhecido. Você vai esbarrar nos problemas de bridge mais rápido, mas vai produzir mais rápido no início.</p>
        <blockquote>Flutter exige que você abandone o que sabe sobre componentes web. Isso é difícil e libertador ao mesmo tempo.</blockquote>
        <p>Flutter tem sua própria forma de pensar UI — widgets imutáveis, árvore de composição, hot reload poderoso. É diferente do que desenvolvedores web estão acostumados. Mas quando você entende, a consistência entre plataformas é impressionante.</p>
        <h2>Onde cada um brilha</h2>
        <p>React Native é melhor quando seu time já conhece React e o produto tem mais complexidade de lógica do que de UI. Você reutiliza muito conhecimento e tem acesso fácil ao ecossistema JavaScript.</p>
        <p>Flutter é melhor quando a UI precisa ser idêntica entre plataformas, quando performance é crítica, ou quando você está construindo algo visualmente complexo. O resultado é mais consistente e previsível.</p>
        <h2>A resposta honesta</h2>
        <p>Não existe a escolha certa universal. Existe a escolha certa para o seu contexto: o time que você tem, o produto que está construindo, as restrições que precisa respeitar.</p>
        <hr>
        <p>Time React, mobile rápido: React Native. Do zero, foco em UI, longo prazo: Flutter. Sem saber ainda: comece pelo que for menos assustador.</p>
      `,
    },
    {
      id: 8,
      title: 'Nove anos de carreira: o que mudou e o que não mudou',
      slug: 'nove-anos-de-carreira',
      date: '2026-04-20',
      dateLabel: 'Abril de 2026',
      tag: 'Processo',
      readTime: '7 min',
      excerpt: 'Tempo suficiente para perder algumas certezas e construir outras. Um registro pessoal, não um conselho.',
      body: `
        <p>Nove anos é tempo suficiente para perder algumas certezas e construir outras. Para ver tendências chegarem como revolução e saírem como footnote. Para entender que o que dura em tecnologia raramente é o que parecia mais empolgante.</p>
        <p>Escrevo isso não como conselho, mas como registro pessoal.</p>
        <h2>O que mudou</h2>
        <p>Eu costumava medir meu valor pela quantidade de código que produzia. Pelo número de features entregues. Pela complexidade das soluções que implementava. Hoje meço diferente: pelo problema que evitei, pela decisão que simplificou, pelo contexto que passei para alguém que veio depois de mim.</p>
        <blockquote>O código que mais me orgulha não é o mais sofisticado. É o que alguém leu seis meses depois e entendeu sem precisar me perguntar nada.</blockquote>
        <p>Também mudei como me relaciono com tecnologia. Eu tinha favoritos fervorosos. Lutaria pelo meu stack. Hoje reconheço que a maioria das escolhas técnicas é menos importante do que a qualidade do raciocínio por trás delas.</p>
        <h2>O que não mudou</h2>
        <p>Curiosidade. Ainda leio sobre sistemas que não uso, linguagens que talvez nunca aplique, abordagens que vão contra o que sei. Não para virar expert em tudo, mas porque o pensamento lateral frequentemente resolve problemas que o caminho óbvio não resolve.</p>
        <p>E o prazer de construir. Depois de quase uma década, ainda tem algo satisfatório em ver uma coisa funcionar. Em pegar um problema e devolver uma solução. Espero que isso não vá embora.</p>
        <h2>O que eu diria para mim de dez anos atrás</h2>
        <p>Aprenda sistemas. Não só sintaxe, não só frameworks — aprenda como as coisas funcionam por baixo. Banco de dados, rede, sistema operacional. Esse conhecimento não fica obsoleto. E quando os frameworks mudarem — e vão mudar — você vai saber o que está acontecendo.</p>
        <hr>
        <p>Tecnologia muda rápido. A capacidade de aprender bem e pensar com clareza muda muito menos. Invista nisso.</p>
      `,
    },
  ]
}

export function getPostBySlug(slug: string): Post | null {
  return getPosts().find((p) => p.slug === slug) ?? null
}
