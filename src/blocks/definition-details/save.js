import { RichText, useBlockProps } from '@wordpress/block-editor';

export function Save( { attributes: { content } } ) {
	const saveBlockProps = useBlockProps.save();
	return (
		<RichText.Content
			{ ...saveBlockProps }
			tagName="dd"
			value={ content }
		/>
	);
}
