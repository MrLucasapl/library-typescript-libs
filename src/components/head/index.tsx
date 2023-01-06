import React from 'react';

interface HeadProps {
  title: string;
  description: string;
  content: string;
}

const Head = (props: HeadProps) => {
	React.useEffect(() => {
		document.title = 'Library | ' + props.title;
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', props.description);
		document
			.querySelector('meta[http-equiv="cache-control"]')
			.setAttribute('content', props.content);
	}, [props]);

	return <React.Fragment></React.Fragment>;
};

export default Head;
