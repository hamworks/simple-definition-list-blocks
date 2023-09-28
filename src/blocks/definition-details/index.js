import { registerBlockType } from '@wordpress/blocks';
import { termDescription, Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import { Edit } from './edit';
import { Save } from './save';

const { name, category, parent, attributes } = metadata;

registerBlockType( name, {
	title: `${ __(
		'DD Tag',
		'simple-definition-list-blocks'
	) } (Simple Definition List Blocks)`,
	description: __(
		'Add a dd tag for inside the dl tag.',
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
