// useCurrentUser.js
import { useEffect, useState } from 'react';
import { auth, db } from './firebase'; // Adjust the path as needed
import { doc, getDoc } from 'firebase/firestore';

const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log('No user data found');
            setUserData(null);
          }
        } catch (error) {
          setError(error);
          console.error('Error fetching user data:', error);
          setUserData(null);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return { user, userData, loading, error };
};

export default useCurrentUser;
