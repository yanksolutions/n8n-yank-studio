import type { INodeProperties } from 'n8n-workflow';

export const emailOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['email'],
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

export const emailFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                Browser:Open                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['sendEmail'],
			},
		},
		description: 'Put email address.',
	},
];
