const {AutoLanguageClient} = require('atom-languageclient');

class PhpLanguageClient extends AutoLanguageClient
{
    getGrammarScopes()
    {
        return [
            "text.html.php"
        ];
    }

    getLanguageName()
    {
        return 'PHP';
    }

    getServerName()
    {
        return 'intelephense-server';
    }

    getConnectionType()
    {
        return 'ipc';
    }

    startServerProcess()
    {
        return super.spawnChildNode(
            [
                "node_modules/intelephense-server/lib/server.js",
                '--node-ipc'
            ],
            {
                stdio: [
                    null,
                    null,
                    null,
                    'ipc',
                ]
            }
        );
    }
}

module.exports = new PhpLanguageClient();
