export interface CardProps {
  // Placeholder – define props later
  title: string;
  image: string;
  location: string;
  price: number;
  onButtonClick?: () => void;
}

export interface ButtonProps {
  // Placeholder – define props later
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
}