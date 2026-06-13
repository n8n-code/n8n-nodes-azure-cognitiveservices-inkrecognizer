import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureCognitiveservicesInkrecognizerApi implements ICredentialType {
        name = 'N8nDevAzureCognitiveservicesInkrecognizerApi';

        displayName = 'Azure Cognitiveservices Inkrecognizer API';

        icon: Icon = { light: 'file:../nodes/AzureCognitiveservicesInkrecognizer/azure-cognitiveservices-inkrecognizer.png', dark: 'file:../nodes/AzureCognitiveservicesInkrecognizer/azure-cognitiveservices-inkrecognizer.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Cognitiveservices Inkrecognizer API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
