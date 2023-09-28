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
			tagName="dt"
			onChange={ onChangeContent }
			value={ content }
			placeholder={ __(
				'Start writing dt tag contents.',
				'simple-definition-list-blocks'
			) }
		/>
	);
}
