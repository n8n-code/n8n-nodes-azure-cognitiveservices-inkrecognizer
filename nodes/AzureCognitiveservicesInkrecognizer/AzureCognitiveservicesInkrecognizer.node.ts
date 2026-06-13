import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureCognitiveservicesInkrecognizer implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Cognitiveservices Inkrecognizer',
                name: 'N8nDevAzureCognitiveservicesInkrecognizer',
                icon: { light: 'file:./azure-cognitiveservices-inkrecognizer.png', dark: 'file:./azure-cognitiveservices-inkrecognizer.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Performs ink layout and recognition of written words and shapes, organizing strokes into results.',
                defaults: { name: 'Azure Cognitiveservices Inkrecognizer' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureCognitiveservicesInkrecognizerApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
