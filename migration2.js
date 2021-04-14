const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-SSE-MsBy4fXMMuCCH-Gaz1kYGSkoDzdFv1BRgQrXS_4'
})

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
        type: "Integer",
        localized: false,
        required: true,
        validations: [],
        disabled: false,
        omitted: false,
    },
    {
        id: "tags",
        name: "Tags",
        type: "Array",
        localized: false,
        required: true,
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
// .then((environment) => environment.createEntry('aLEfl1Y7Dx5b85lKUY07T', {
//     fields: {
//         title: {
//             'en-US': 'Entry title'
//         }
//     }
// }))
// .then((entry) => console.log(entry))
// .catch(console.error)