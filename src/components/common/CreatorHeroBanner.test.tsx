import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CreatorHeroBanner from './CreatorHeroBanner';

describe('CreatorHeroBanner', () => {
	it('applies fallback gradient when no heroUrl is provided', () => {
		const { getByRole } = render(<CreatorHeroBanner />);
		const banner = getByRole('img');
		expect(banner.style.background).toContain('var(--creator-hero-fallback)');
	});

	it('applies background image when heroUrl is provided', () => {
		const { getByRole } = render(
			<CreatorHeroBanner heroUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" />
		);
		const banner = getByRole('img');
		expect(banner.style.backgroundImage).toContain('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop');
	});
});
