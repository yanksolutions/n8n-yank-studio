import type { INodeProperties } from 'n8n-workflow';

export const excelOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['excel'],
			},
		},
		options: [
			{
				name: 'Send email',
				value: 'sendEmail',
				description: 'Send email',
				action: 'Send email',
			},
		],
		default: 'sendEmail',
	},
];

export const excelFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                Browser:URL Access                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['excel'],
				operation: ['sendEmail'],
			},
		},
		description: 'Put email address.',
	},
];
