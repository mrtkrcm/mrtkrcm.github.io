export const breadcrumbData = [
  {
    key : 'labels',
    label: 'Labels & Messages',
    url: '/labels',
    subPages: [
      {
        key : 'add',
        label: 'Add Label',
        url: '/labels/add'
      },
      {
        key : 'edit',
        label: 'Edit Label',
        url: '/labels/edit'
      }
    ],
    tabMenu: [
      {
        key : 'labels',
        label: 'Labels & Messages',
        url: '/labels'
      }
    ]
  },
  {
    key : 'recommendations',
    label: 'Recommendations',
    url: '/recommendations',
    subPages: [
      {
        key : 'add',
        label: 'Add Recommendation',
        url: '/recommendations/add'
      },
      {
        key : 'edit',
        label: 'Edit Recommendations',
        url: '/recommendations/edit'
      }
    ],
    tabMenu: [
      {
        key : 'recommendations',
        label: 'Recommendations',
        url: '/recommendations'
      }
    ]
  }
]

export default breadcrumbData
