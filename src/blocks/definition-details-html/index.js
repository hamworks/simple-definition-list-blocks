import { registerBlockType } from '@wordpress/blocks';
import { Icon, termDescription } from '@wordpress/icons';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import { Edit } from './edit';
import { Save } from './save';
import { __ } from '@wordpress/i18n';

const { name, category, parent, attributes } = metadata;

registerBlockType( name, {
	title: `${ __(
		'DD Tag (Use HTML)',
		'simple-definition-list-blocks'
	) } (Simple Definition List Blocks)`,
	description: __(
		'Add a dd tag that can use HTML inside a dl tag.',
		'simple-definition-list-blocks'
	),
	category,
	icon: <Icon icon={ termDescription } />,
	keywords: [
		'definition list',
		__( 'definition list', 'simple-definition-list-blocks' ),
		'dd',
		__( 'dd', 'simple-definition-list-blocks' ),
	],
	parent,
	attributes,
	edit: Edit,
	save: Save,
} );
