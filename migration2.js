const contentful = require('contentful-management')
const contentfulExport = require('contentful-export')

const client = contentful.createClient({
  accessToken: 'CFPAT-SSE-MsBy4fXMMuCCH-Gaz1kYGSkoDzdFv1BRgQrXS_4'
})

// const options = {
//   spaceId: 's1rw45l2y55r',
//   managementToken: 'CFPAT-SSE-MsBy4fXMMuCCH-Gaz1kYGSkoDzdFv1BRgQrXS_4',
// }

// contentfulExport(options)
//     .then((result) => {
//         console.log('Your space data:', result)
//     })
//     .catch((err) => {
//         console.log('Oh no! Some errors occurred!', err)
//     })


// const fieldContentTypeCategory = [
//     {
//         id: 'name',
//         name: 'Name',
//         required: true,
//         localized: false,
//         type: 'Symbol',
//         disabled: false,
// 		omitted: false
//     }, {
//         id: 'slug',
//         name: 'Slug',
//         required: true,
//         localized: false,
//         type: 'Symbol',
//         disabled: false,
// 		omitted: false
//     }
// ];

// client.getSpace('s1rw45l2y55r')
// .then((space) => space.getEnvironment('master-2021-04-09'))
// .then((environment) => environment.createContentTypeWithId('category',{
//     name: 'Category',
//     displayField: 'name',
//     fields: fieldContentTypeCategory
// }))
// .then((contentType) => contentType.publish())
// .then((contentType) => console.log(contentType))
// .catch(console.error)

// client.getSpace('s1rw45l2y55r')
// .then((space) => space.getEnvironment('master-2021-04-09'))
// .then((environment) => environment.createEntryWithId('category', 'content-marketing',{
//     fields: {
//         name: {
//             'en-US': 'content-marketing'
//         },
//         slug: {
//             'en-US': 'content-marketing'
//         }
//     }
// }))
// .then((entry) => entry.publish())
// .then((entry) => console.log(entry))
// .catch(console.error)

const fieldContentTypeBlogPost = [
	{
		id: 'title',
        name: 'Title',
        required: true,
        localized: false,
        type: 'Symbol',
        disabled: false,
		omitted: false
	},
	{
		id: 'slug',
		name: 'Slug',
		required: true,
		localized: false,
		type: 'Symbol',
		disabled: false,
		omitted: false
	},
	{
		id: 'content',
		name: 'Content',
		required: true,
		localized: false,
		type: 'Text',
		disabled: false,
		omitted: false
	},
	{
		id: "publishDate",
		name: "Publish Date",
		type: "Date",
		localized: false,
		required: true,
		validations: [],
		disabled: false,
		omitted: false
	},
    {
        id: "featuredImage",
        name: "Featured Image",
        type: "Link",
        localized: false,
        required: true,
        validations: [],
        disabled: false,
        omitted: false,
        linkType: "Asset"
    },
    {
        id: "tags",
        name: "Tags",
        type: "Array",
        localized: false,
        required: false,
        validations: [],
        disabled: false,
        omitted: false,
        items: {
            type: "Symbol",
            validations: [
                {
                    in: [
                        "general",
                        "javascript",
                        "static-sites"
                    ]
                }
            ]
        }
    },
    {
        id: "categories",
        name: "Categories",
        type: "Link",
        localized: false,
        required: true,
        validations: [
            {
                linkContentType: [
                    "category"
                ]
            }
        ],
        disabled: false,
        omitted: false,
        linkType: "Entry"
    },
]

client.getSpace('s1rw45l2y55r')
.then((space) => space.getEnvironment('master-2021-04-09'))
.then((environment) => environment.createContentTypeWithId('blogPost',{
    name: 'Blog Post',
    displayField: 'title',
    fields: fieldContentTypeBlogPost
}))
.then((contentType) => contentType.publish())
.then((contentType) => console.log(contentType))
.catch(console.error)

// client.getSpace('s1rw45l2y55r')
// .then((space) => space.getEnvironment('master-2021-04-09'))
// .then((environment) => environment.createEntry('blogPost', {
//     fields: {
//         title: {
//             'en-US': 'How to Write a Short Author Bio: 7 Best Practices'
//         },
//         slug: {
//             'en-US': 'how-to-write-a-short-author-bio-7-best-practices'
//         },
//         content: {
//             'en-US': '## What are webhooks?\n\nThe webhooks are used to notify you when content has been changed. Specify a URL, configure your webhook, and we will send an HTTP POST request whenever something happens to your content.\n\n## How do I configure a webhook?\n\nGo to Settings → Webhooks from the navigation bar at the top.'
//         },
//         publishDate: {
//             "en-US": "2021-02-09T18:41:19"
//         },
//         featuredImage: {
//             'en-US': 133
//         },
//         tags: {
//             "en-US": [
//                         "javascript"
//                     ]
//         },
//         cateogries: {
//           "en-US": {
//                 "sys": {
//                     type: "Link",
//                     linkType: "Entry",
//                     id: "blogging"
//                 }
//           }
//         }
//     }
// }))
// .then((entry) => entry.publish())
// .then((entry) => console.log(entry))
// .catch(console.error)

