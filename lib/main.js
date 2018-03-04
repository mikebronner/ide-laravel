const {AutoLanguageClient} = require('atom-languageclient')

class PhpLanguageClient extends AutoLanguageClient
{
    getGrammarScopes () {
        return [
            'source.js',
            'php'
        ]
    }

    getLanguageName () {
        return 'PHP'
    }

    getServerName () {
        return 'PHP Language Server'
    }

    getConnectionType() {
        return 'ipc'
    }

    startServerProcess () {
        const startServer = require.resolve('bmewburn/intelephense-server')

        return super.spawnChildNode(
            [
                startServer,
                '--node-ipc',
            ],
            {
                stdio: [
                    null,
                    null,
                    null,
                    'ipc',
                ]
            }
        )
    }
}

module.exports = new PhpLanguageClient()
