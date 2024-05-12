import type { INodeProperties } from 'n8n-workflow';

export const webServiceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webService'],
			},
		},
		options: [
			{
				name: 'Save',
				value: 'save',
				description: 'Save an object',
				action: 'Save an object',
			},
            {
				name: 'Find',
				value: 'find',
				description: 'Find an object',
				action: 'Find an object',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an object',
				action: 'Update an object',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an object',
				action: 'Delete an object',
			},
		],
		default: 'find',
	},
];

export const webServiceFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                Browser:Open                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'File',
		name: 'browser',
		type: 'options',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['save'],
			},
		},
        options:[
            {
				displayName: 'Text',
				name: 'text',
				value: 'text',
				default: true,
				description: 'Text file',
			},
            {
				displayName: 'Excel',
				name: 'excel',
				value: 'excel',
				default: false,
				description: 'Excel file',
			},
        ],
		description: 'Select file type that you want to read.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Browser:URL Access                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'URL Access',
		name: 'urlAccess',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['update'],
			},
		},
		description: 'Put your url.',
	},
	{
		displayName: 'Find By Xpath and Click',
		name: 'findByXpathAndClick',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['find'],
				operation: ['findByXpathAndClick'],
			},
		},
		description: 'Put your url.',
	},
	{
		displayName: 'Close Browser',
		name: 'close',
		type: 'hidden',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['delete'],
			},
		},
	},

];
