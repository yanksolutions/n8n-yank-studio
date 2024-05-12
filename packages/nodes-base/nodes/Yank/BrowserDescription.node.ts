import type { INodeProperties } from 'n8n-workflow';

export const browserOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['browser'],
			},
		},
		options: [
			{
				name: 'Open',
				value: 'open',
				description: 'Open a browser',
				action: 'Open Browser',
			},
            {
				name: 'Url Access',
				value: 'urlAccess',
				description: 'Url Access',
				action: 'Access URL',
			},
			{
				name: 'Close',
				value: 'close',
				description: 'Close a browser',
				action: 'Close Browser',
			},
			{
				name: 'Find By Xpath and Click',
				value: 'findByXpathAndClick',
				description: 'Find By Xpath and Click',
				action: 'Find By Xpath and Click',
			},
			{
				name: 'Find By CssSelector',
				value: 'findByCssSelector',
				description: 'Find By CssSelector',
				action: 'Find By CssSelector and Click',
			},
			{
				name: 'Send Keys to Text Box',
				value: 'sendKeysToTextBox',
				description: 'Send Keys to Text Box',
				action: 'Send Keys to Text Box',
			},
		],
		default: 'open',
	},
];

export const browserFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                Browser:Open                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Browser',
		name: 'browser',
		type: 'options',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['browser'],
				operation: ['open'],
			},
		},
        options:[
            {
				displayName: 'Google',
				name: 'google',
				value: 'google',
				default: true,
				description: 'Google WebDriver',
			},
            {
				displayName: 'Firefox',
				name: 'firefox',
				value: 'Firefox',
				default: false,
				description: 'Firefox WebDriver',
			},
        ],
		description: 'Select browser that you want to use.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Browser:URL Access                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Access URL',
		name: 'urlAccess',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['browser'],
				operation: ['urlAccess'],
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
				resource: ['browser'],
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
				resource: ['browser'],
				operation: ['close'],
			},
		},
	},
	{
		displayName: 'Text Box Id',
		name: 'textBoxId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['browser'],
				operation: ['sendKeysToTextBox'],
			},
		},
		description: 'Put text box id.',
	},
	{
		displayName: 'Message to Text Box',
		name: 'messageToTextBox',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['browser'],
				operation: ['sendKeysToTextBox'],
			},
		},
		description: 'Put text box.',
	},
];
