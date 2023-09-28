import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export function Save() {
	const saveBlockProps = useBlockProps.save();
	const saveInnerBlocksProps = useInnerBlocksProps.save( saveBlockProps );

	return <dd { ...saveInnerBlocksProps } />;
}
