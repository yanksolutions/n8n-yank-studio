import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { YankStudioEmailSendV1 } from './v1/YankStudioEmailSendV1.node';
import { YankStudioEmailSendV2 } from './v2/YankStudioEmailSendV2.node';

export class YankStudioEmailSend extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Yank Studio Send Email',
			name: 'yankStudioEmailSend',
			icon: 'file:yank.png',
			group: ['output'],
			defaultVersion: 2.1,
			description: 'Sends an email using SMTP protocol',
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new YankStudioEmailSendV1(baseDescription),
			2: new YankStudioEmailSendV2(baseDescription),
			2.1: new YankStudioEmailSendV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
