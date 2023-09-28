import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export function Edit( { attributes: { content }, setAttributes } ) {
	const blockProps = useBlockProps();
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<RichText
			{ ...blockProps }
			tagName="dd"
			onChange={ onChangeContent }
			value={ content }
			placeholder={ __(
				'Start writing dd tag contents.',
				'simple-definition-list-blocks'
			) }
		/>
	);
}
