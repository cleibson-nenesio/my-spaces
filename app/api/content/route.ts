// Next
import { NextResponse } from 'next/server';

import { v4 as uuidv4 } from 'uuid';

// Dummy data
const posts = new Array(65).fill('.').map(() => ({
	title: 'lorem ipsum dolor amet',
	content:
		'lorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor amet',
	slug: 'lorem-ipsum',
	id: uuidv4(),
}));

export async function GET() {
	return NextResponse.json(posts);
}
