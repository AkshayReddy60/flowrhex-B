import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from './About';
import { BrowserRouter } from 'react-router-dom';

// Mock navigate function
const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

// Mock images
jest.mock('../../assets/cardone.png', () => 'cardone.png');
jest.mock('../../assets/cardtwo.png', () => 'cardtwo.png');
jest.mock('../../assets/cardthird.png', () => 'cardthird.png');

describe('About Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });

  it('renders hero section correctly', () => {
    expect(screen.getByText('About Us')).toBeInTheDocument();
    
  });

  it('renders About Cards section with 4 cards', () => {
    expect(screen.getByText('Our Profile')).toBeInTheDocument();
    expect(screen.getByText('We are a Startup!!!')).toBeInTheDocument();
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
  });

  it('renders team section with all team members', () => {
    expect(screen.getByText('Abhijeet Kulkarni')).toBeInTheDocument();
    expect(screen.getByText('Amol Raykar')).toBeInTheDocument();
    expect(screen.getByText('Medidi Satyarakesh')).toBeInTheDocument();
  });

  it('triggers navigation when Read More is clicked', () => {
    fireEvent.click(screen.getAllByText('Read More')[0]);
    expect(mockedNavigate).toHaveBeenCalledWith('/team/abhijeet-kulkarni');
  });

  it('renders social links correctly', () => {
    const fbLinks = screen.getAllByLabelText('Facebook');
    const linkedinLinks = screen.getAllByLabelText('LinkedIn');
    expect(fbLinks.length).toBe(3);
    expect(linkedinLinks.length).toBe(3);
  });

  it('renders collaboration section content', () => {
    expect(screen.getByText('Our Collaborations')).toBeInTheDocument();
    expect(screen.getByText(/FlowRHEX® Technologies as an intensified technology provider/i)).toBeInTheDocument();
  });
});
