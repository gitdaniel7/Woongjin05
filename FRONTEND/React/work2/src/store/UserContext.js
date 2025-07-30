import React, { createContext, useState } from 'react';

// Context 생성함
export const UserContext = createContext();

// Provider 컴포넌트 정의하는 곳
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: '이혜웅',
    score: 100,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
