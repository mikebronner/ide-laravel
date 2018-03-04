const {AutoLanguageClient} = require('atom-languageclient')

class PhpLanguageClient extends AutoLanguageClient
{
    getGrammarScopes () {
        return [
            'source.php',
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
        console.log("test")
        const startServer = require('intelephense-server/lib/server.js')

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
