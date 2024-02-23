import Link from "next/link";

const LinkWrapper = ({href, children}) => {
	return (
		<Link href={href} style={{backgroundColor: "grey", color: "white", margin: "0.5rem", padding: "0.5rem"}}>
			{children}
		</Link>
	)
}

const Header = () => {
	return (
		<header >
			<nav style={{display:"flex", justifyContent: "space-around"}}>
				<LinkWrapper href="/">Home</LinkWrapper>
				<LinkWrapper href="/h">H</LinkWrapper>
				<LinkWrapper href="/g">G</LinkWrapper>
			</nav>	
		</header>
	);
};

export default Header;
