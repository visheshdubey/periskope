export interface MenuItem {
  to: string;
  name: string;
  chipData?: number;
  icon: JSX.Element; // Assuming JSX.Element is the type for React icons
}
