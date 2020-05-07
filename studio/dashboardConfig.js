export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb37ab0a2b27c2d5b584af4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-68sq61bc',
                  apiId: 'c20d5a35-3033-4daa-8a5e-ba9bbee92518'
                },
                {
                  buildHookId: '5eb37ab053d2df13b7e2cc89',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7cf9zgai',
                  apiId: '6bd11367-10b2-4cd4-b115-9b30a1921b7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalbabu/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7cf9zgai.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
