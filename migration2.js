const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-SSE-MsBy4fXMMuCCH-Gaz1kYGSkoDzdFv1BRgQrXS_4'
})

// client.getSpace('s1rw45l2y55r')
// .then((space) => space.getEnvironment('master-2021-04-09'))
// .then((environment) => environment.createContentType({
//   name: 'Blog Post',
//   fields: [
//     {
//       id: 'title',
//       name: 'Title',
//       required: true,
//       localized: false,
//       type: 'Text'
//     }
//   ]
// }))
// .then((contentType) => contentType.publish())
// .catch(console.error)

client.getSpace('s1rw45l2y55r')
.then((space) => space.getEnvironment('master-2021-04-09'))
.then((environment) => environment.createEntry('aLEfl1Y7Dx5b85lKUY07T', {
    fields: {
        title: {
            'en-US': 'Entry title'
        }
    }
}))
.then((entry) => console.log(entry))
.catch(console.error)