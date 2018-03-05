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

    getInitializeParams(projectPath, process)
    {
        var initializeParams = super.getInitializeParams(projectPath, process);

        initializeParams["initializationOptions"] = {
            storagePath: __dirname + "/../tmp"
        };

        return initializeParams;
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
