import { describe, expect, it } from 'vitest';
import { PageSeoMetaDataSchema, type PageSeoMetaData } from './types.js';

const seoMeta: PageSeoMetaData = {
	name: 'hello',
	description: '',
	url: 'https://hello.se',
	ldImage: {
		name: '',
		url: 'https://hello.se',
		width: 600,
		height: 315
	},
	ogImage: {
		name: '',
		url: 'https://hello.se',
		width: 1920,
		height: 1080
	},
	organization: {
		name: '',
		url: 'https://hello.se',
		email: 'test@email.com',
		legalName: ''
	}
};

describe('Seo', () => {
	it('Should parse good seo meta data', () => {
		expect(PageSeoMetaDataSchema.parse(seoMeta)).toStrictEqual(seoMeta);
	});
});
