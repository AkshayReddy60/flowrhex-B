import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; 
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders company name and slogan', () => {
    
    expect(screen.getByText(/Providing Process Intensified Solutions/i)).toBeInTheDocument();
  });

  test('renders registered office address', () => {
    expect(screen.getByText(/Shri Swami Landmark/i)).toBeInTheDocument();
    expect(screen.getByText(/Narhe, Pune 411041/i)).toBeInTheDocument();
  });

  test('renders lab address', () => {
    expect(screen.getByText(/Chemical Engineering Department/i)).toBeInTheDocument();
    expect(screen.getByText(/Warangal, Telangana 506004/i)).toBeInTheDocument();
  });

  test('renders phone numbers', () => {
    expect(screen.getAllByText('+91 9420586572').length).toBeGreaterThanOrEqual(1);
  });

  test('renders website links', () => {
    const links = screen.getAllByRole('link', { name: /www\.flowrhex\.com/i });
    links.forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('flowrhex.com'));
    });
  });

  test('renders social media icons', () => {
    const icons = ['facebook', 'twitter', 'linkedin', 'youtube'];
  });
});