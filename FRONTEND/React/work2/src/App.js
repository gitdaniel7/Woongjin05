import React from 'react';
import { UserProvider } from './store/UserContext';
import Header from './components/Header';

function App() {
  return (
    <UserProvider>
      <Header />
      {/* 추가 컴포넌트는 여기로 넣으면 됨 */}
    </UserProvider>
  );
}

export default App;
