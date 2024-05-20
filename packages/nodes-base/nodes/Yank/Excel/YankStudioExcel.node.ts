import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { YankStudioExcelV1 } from './v1/YankStudioExcelV1.node';
import { YankStudioExcelV2 } from './v2/YankStudioExcelV2.node';

export class YankStudioExcel extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Yank Studio Excel 365',
			name: 'yankStudioExcel365',
			icon: 'file:yank.png',
			group: ['input'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Consume Microsoft Excel API',
			defaultVersion: 2.1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new YankStudioExcelV1(baseDescription),
			2: new YankStudioExcelV2(baseDescription),
			2.1: new YankStudioExcelV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
