import type { INodeProperties } from 'n8n-workflow';

export const captchaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['captcha'],
			},
		},
		options: [
			{
				name: 'Captcha Resolve',
				value: 'captchaResolve',
				description: 'Captcha resolve',
				action: 'Captcha resolve',
			},
		],
		default: 'captchaResolve',
	},
];

export const captchaFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                Browser:URL Access                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Image Captcha Xpath',
		name: 'captchaXpath',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['captcha'],
				operation: ['captchaResolve'],
			},
		},
		description: 'Put your image url.',
	},
	{
		displayName: 'User',
		name: 'user',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['captcha'],
				operation: ['captchaResolve'],
			},
		},
		description: 'Put your user.',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['captcha'],
				operation: ['captchaResolve'],
			},
		},
		description: 'Put your password.',
	},
	{
		displayName: 'Company',
		name: 'company',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['captcha'],
				operation: ['captchaResolve'],
			},
		},
		description: 'Put your company.',
	},
	{
		displayName: 'Text Box',
		name: 'textBox',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['captcha'],
				operation: ['captchaResolve'],
			},
		},
		description: 'Put your text box.',
	},
	{
		displayName: 'Click Button',
		name: 'clickButton',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['captcha'],
				operation: ['captchaResolve'],
			},
		},
		description: 'Put your button id.',
	},
];
