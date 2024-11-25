export const useAuth = () => ({
    getToken: jest.fn(() => Promise.resolve("mocked-token")),
  });
  
export const ClerkProvider = ({ children }) => <>{children}</>;
  