// src/Components/Navbar/Navbar.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

// Helper to render Navbar inside Router for Link components
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Navbar component', () => {
  beforeEach(() => {
    renderWithRouter(<Navbar />);
  });

  test('renders opening hours text', () => {
    expect(screen.getByText(/opening hours: mon - sat 9\.00am - 06\.00pm/i)).toBeInTheDocument();
  });

  test('renders social media links with correct href and aria-label', () => {
    const facebook = screen.getByLabelText('Facebook');
    expect(facebook).toBeInTheDocument();
    expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/flowrhextechnologies/');

    const twitter = screen.getByLabelText('Twitter');
    expect(twitter).toBeInTheDocument();
    expect(twitter).toHaveAttribute('href', 'https://x.com/flowrhex');

    const linkedin = screen.getByLabelText('LinkedIn');
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/company/flowrhex-technologies/');

    const youtube = screen.getByLabelText('YouTube');
    expect(youtube).toBeInTheDocument();
    expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/channel/UCOYTYM0IP0E7aqCmpagijIg');
  });

  test('renders company logo and company name', () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent('FLOWRHEX');

    const companyName = screen.getByText(/PROBURGEON Pvt Ltd/i);
    expect(companyName).toBeInTheDocument();
  });

  test('renders contact info elements', () => {
    expect(screen.getByText('+91 9420586572')).toBeInTheDocument();
    expect(screen.getByText('www.flowrhex.com')).toBeInTheDocument();
  });

  test('renders desktop navigation links with correct text and href', () => {
    const links = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Technology', path: '/technology' },
      { name: 'Products', path: '/products' },
      { name: 'Services', path: '/services' },
      { name: 'Contact Us', path: '/contact' },
    ];

    links.forEach(({ name, path }) => {
      // Find link element with the name text
      const link = screen.getAllByText(name).find(el => el.closest('a'));
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', path);
    });
  });

  test('mobile menu toggle button works and toggles menu visibility', () => {
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Initially, mobile menu should NOT be in the document
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();

    // Click toggle button to open menu
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

    // Click toggle button again to close menu
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  test('mobile menu shows all menu items in uppercase', () => {
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    const expectedItems = ['HOME', 'ABOUT', 'TECHNOLOGY', 'PRODUCTS', 'SERVICES', 'CONTACT US'];

    expectedItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('clicking a mobile menu link closes the menu', () => {
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    const mobileMenuLink = screen.getByText('HOME');
    fireEvent.click(mobileMenuLink);

    // Mobile menu should be closed now
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });
});
