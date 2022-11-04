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
    imgUrl: 'images/aidonic.png',
    urlPath: 'https://my.aidonic.io',
    techStack: [
      { name: 'TypeScript', logoPath: 'images/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: 'images/icons/javascript.svg' },
      { name: 'Next.js', logoPath: 'images/icons/nextjs.png' },
      { name: 'React.js', logoPath: 'images/icons/react.png' },
      { name: 'Node.js', logoPath: 'images/icons/nodejs.png' },
      { name: 'Serverless', logoPath: 'images/icons/serverless.png' },
      { name: 'Lambdas', logoPath: 'images/icons/lambda.jpg' },
      { name: 'DynamoDB', logoPath: 'images/icons/dynamodb.png' }
    ]
  },
  {
    title: 'Calabash Villa',
    imgAlt: 'Calabash Villa',
    contentText: 'Luxury Villa Property Website',
    imgUrl: 'images/calabash.png',
    urlPath: 'https://calabashvillabequia.com',
    repoUrl: 'https://github.com/ryancarville/calabash-ssg',
    techStack: [
      { name: 'TypeScript', logoPath: 'images/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: 'images/icons/javascript.svg' },
      { name: 'Gatsby.js', logoPath: 'images/icons/gatsby.png' },
      { name: 'React.js', logoPath: 'images/icons/react.png' },
      { name: 'GraphQL', logoPath: 'images/icons/graphql.png' },
      { name: 'Contentful', logoPath: 'images/icons/contentful.png' }
    ]
  },
  {
    title: 'AIDONIC - Marketing SPA',
    imgAlt: 'AIDONIC - Marketing SPA',
    contentText: 'Single Page Application for marketing platform',
    imgUrl: 'images/aidonic-marketing.png',
    urlPath: 'https://aidonic.io',
    techStack: [
      { name: 'TypeScript', logoPath: 'images/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: 'images/icons/javascript.svg' },
      { name: 'Gatsby.js', logoPath: 'images/icons/gatsby.png' },
      { name: 'React.js', logoPath: 'images/icons/react.png' },
      { name: 'GraphQL', logoPath: 'images/icons/graphql.png' },
      { name: 'Sanity', logoPath: 'images/icons/sanity.png' }
    ]
  },
  {
    title: 'Route Builder',
    imgAlt: 'Route Builder',
    contentText: 'Komoot style cross country route planer',
    imgUrl: 'images/komoot.png',
    urlPath: 'http://komoot-route-builder.herokuapp.com/',
    repoUrl: 'https://github.com/ryancarville/komoot-route-builder',
    techStack: [
      { name: 'TypeScript', logoPath: 'images/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: 'images/icons/javascript.svg' },
      { name: 'React.js', logoPath: 'images/icons/react.png' }
    ]
  },
  {
    title: 'Node Navigator',
    imgAlt: 'Node Navigator',
    contentText: 'Simple Connected Node Navigation Tool',
    imgUrl: 'images/nodeNav.png',
    urlPath: 'https://saporo-node-navigator.vercel.app/',
    repoUrl: 'https://github.com/ryancarville/saporo-node-navigator',
    techStack: [
      { name: 'TypeScript', logoPath: 'images/icons/typescript.svg' },
      { name: 'JavaScript', logoPath: 'images/icons/javascript.svg' },
      { name: 'Svelte', logoPath: 'images/icons/svelte.png' }
    ]
  }
];