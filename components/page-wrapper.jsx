'use client';
import PageInfo from "./page-info";
import useSWR from "swr";

const PageWrapper = ({endpoint}) => {
    console.log(endpoint);
    const { data, error } = useSWR(endpoint, (url) => fetch(url).then((res) => res.json()));
	console.log(data);
	console.log(error);
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	return (
			<PageInfo title={data.pageHeader} content={data.pageContent} />
	);
}

export default PageWrapper;