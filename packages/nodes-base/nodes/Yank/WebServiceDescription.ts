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
	/*                                WS:Save                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Object',
		name: 'object',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['save'],
			},
		},
		description: 'Object that you want to save.',
	},
	{
		displayName: 'Table',
		name: 'table',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['save'],
			},
		},
		description: 'Table that you want to persist your data',
	},

	/* -------------------------------------------------------------------------- */
	/*                                WS:Update			                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Object',
		name: 'object',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['update'],
			},
		},
		description: 'Object that you want to save.',
	},
	{
		displayName: 'Table',
		name: 'table',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['update'],
			},
		},
		description: 'Table that you want to persist your data',
	},

	/* -------------------------------------------------------------------------- */
	/*                                WS:Find			                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['find'],
			},
		},
		description: 'Your query sql',
	},
	{
		displayName: 'Table',
		name: 'table',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['find'],
			},
		},
		description: 'Table that you want to persist your data',
	},
	/* -------------------------------------------------------------------------- */
	/*                                WS:Delete			                          */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Delete Query',
		name: 'deleteQuery',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['delete'],
			},
		},
		description: 'Your delete query sql',
	},
	{
		displayName: 'Table',
		name: 'table',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webService'],
				operation: ['delete'],
			},
		},
		description: 'Table that you want to persist your data',
	},
];
