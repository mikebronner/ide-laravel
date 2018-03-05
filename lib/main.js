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
        const server = require.resolve("intelephense-server");

        return super.spawnChildNode(
            [
                server,
                '--node-ipc'
            ],
            {
                storagePath: "tmp",
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
