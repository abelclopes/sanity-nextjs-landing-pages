export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f7cb7e8f8b559243c1e7c15',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qme9d7vx',
                  apiId: '12c8b200-46bd-49b2-b746-645b5e2f04ed'
                },
                {
                  buildHookId: '5f7cb7e9303b5d2a8b65e0b7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ei25ejqm',
                  apiId: 'eff40bca-36cc-4e9f-a4fa-d44da3b96400'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abelclopes/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ei25ejqm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
