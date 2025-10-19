"use client";

import { SignedOut,SignedIn,SignInButton } from "@clerk/clerk-react";
import {SignOutButton} from "@clerk/nextjs";

const HomePage = () => {
	return (
		<div>
			Home Page
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<SignOutButton />
			</SignedIn>
		</div>
	);
};

export default HomePage;