const elasticsearch = require('elasticsearch')
const { ELASTICSEARCH_CONF } = require('../config/db')

const elasticsearchClient = elasticsearch.Client(ELASTICSEARCH_CONF)

elasticsearchClient.search({
    index: 'books',
    type: 'book',
    body: {
      query: {
        multi_match: {
          query: 'express js',
          fields: ['title', 'description']
        }
      }
    }
  }).then(function (response) {
    var hits = response.hits.hits
  }, function (error) {
    console.trace(error.message)
  })
