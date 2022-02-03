import { render, screen } from '@testing-library/react';
import Picture from './Picture';

const image = {
    id: 1,
    src: "https://via.placeholder.com/600/92c952",
    caption: "accusamus beatae ad facilis cum similique qui sunt",
    thumb: "https://via.placeholder.com/150/92c952"
};

test('renders image and caption', () => {
    render(<Picture key={image.id} image={image} />);

    const captionElement = screen.getByText(image.caption);
    const imageElement = screen.getByRole("img");
    expect(imageElement.src).toBe(image.thumb);
    expect(captionElement).toBeInTheDocument();
});
