import type { INodeProperties } from 'n8n-workflow';

export const fileOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['file'],
			},
		},
		options: [
			{
				name: 'Read Text File',
				value: 'readTextFile',
				description: 'Read text file',
				action: 'Read text file',
			},
            {
				name: 'Read Excel File',
				value: 'readExcelFile',
				description: 'Read excel file',
				action: 'Read excel file',
			},
			{
				name: 'Write Text File',
				value: 'writeTextFile',
				description: 'Write text file',
				action: 'Write text file',
			},
			{
				name: 'Write Excel File',
				value: 'writeExcelFile',
				description: 'Write excel file',
				action: 'Write excel file',
			},
		],
		default: 'readTextFile',
	},
];

export const fileFields: INodeProperties[] = [
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
				resource: ['file'],
				operation: ['readTextFile'],
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
];
