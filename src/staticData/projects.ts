type tech = {
  name: string;
  logoPath: string;
}
type Project = {
  title: string;
  imgAlt: string;
  contentText: string;
  imgUrl: string;
  urlPath: string;
  repoUrl?: string;
  techStack: tech[];
}
export const allProjects: Project[] = [
  {
    title: 'AIDONIC',
    imgAlt: 'AIDONIC',
    contentText: 'Humanitarian Aid Blockchain base platform',
    imgUrl: '/src/static/aidonic.png',
    urlPath: 'https://my.aidonic.io',
    techStack: [
      { name: 'TypeScript', logoPath: '/src/static/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: '/src/static/icons/javascript.svg' },
      { name: 'Next.js', logoPath: '/src/static/icons/nextjs.png' },
      { name: 'React.js', logoPath: '/src/static/icons/react.png' },
      { name: 'Node.js', logoPath: '/src/static/icons/nodejs.png' },
      { name: 'Serverless', logoPath: '/src/static/icons/serverless.png' },
      { name: 'Lambdas', logoPath: '/src/static/icons/lambda.jpg' },
      { name: 'DynamoDB', logoPath: '/src/static/icons/dynamodb.png' }
    ]
  },
  {
    title: 'Calabash Villa',
    imgAlt: 'Calabash Villa',
    contentText: 'Luxury Villa Property Website',
    imgUrl: '/src/static/calabash.png',
    urlPath: 'https://calabashvillabequia.com',
    repoUrl: 'https://github.com/ryancarville/calabash-ssg',
    techStack: [
      { name: 'TypeScript', logoPath: '/src/static/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: '/src/static/icons/javascript.svg' },
      { name: 'Gatsby.js', logoPath: '/src/static/icons/gatsby.png' },
      { name: 'React.js', logoPath: '/src/static/icons/react.png' },
      { name: 'GraphQL', logoPath: '/src/static/icons/graphql.png' },
      { name: 'Contentful', logoPath: '/src/static/icons/contentful.png' }
    ]
  },
  {
    title: 'AIDONIC - Marketing SPA',
    imgAlt: 'AIDONIC - Marketing SPA',
    contentText: 'Single Page Application for marketing platform',
    imgUrl: '/src/static/aidonic-marketing.png',
    urlPath: 'https://aidonic.io',
    techStack: [
      { name: 'TypeScript', logoPath: '/src/static/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: '/src/static/icons/javascript.svg' },
      { name: 'Gatsby.js', logoPath: '/src/static/icons/gatsby.png' },
      { name: 'React.js', logoPath: '/src/static/icons/react.png' },
      { name: 'GraphQL', logoPath: '/src/static/icons/graphql.png' },
      { name: 'Sanity', logoPath: '/src/static/icons/sanity.png' }
    ]
  },
  {
    title: 'Route Builder',
    imgAlt: 'Route Builder',
    contentText: 'Komoot style cross country route planer',
    imgUrl: '/src/static/komoot.png',
    urlPath: 'http://komoot-route-builder.herokuapp.com/',
    repoUrl: 'https://github.com/ryancarville/komoot-route-builder',
    techStack: [
      { name: 'TypeScript', logoPath: '/src/static/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: '/src/static/icons/javascript.svg' },
      { name: 'React.js', logoPath: '/src/static/icons/react.png' }
    ]
  },
  {
    title: 'Node Navigator',
    imgAlt: 'Node Navigator',
    contentText: 'Simple Connected Node Navigation Tool',
    imgUrl: '/src/static/nodeNav.png',
    urlPath: 'https://saporo-node-navigator.vercel.app/',
    repoUrl: 'https://github.com/ryancarville/saporo-node-navigator',
    techStack: [
      { name: 'TypeScript', logoPath: '/src/static/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: '/src/static/icons/javascript.svg' },
      { name: 'Svelte', logoPath: '/src/static/icons/svelte.png' }
    ]
  }
];