import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Save() {
	const saveBlockProps = useBlockProps.save();
	const saveInnerBlocksProps = useInnerBlocksProps.save( saveBlockProps );

	return <div { ...saveInnerBlocksProps } />;
}
