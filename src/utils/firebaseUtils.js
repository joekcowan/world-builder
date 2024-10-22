// utils/firebaseUtils.js
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';

// Reusable function to fetch projects for a specific user
export const fetchProjectsForUser = async (userId) => {
  const db = getFirestore();
  const projects = [];

  try {
    const projectsQuery = query(
      collection(db, 'projects'),
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(projectsQuery);

    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Error fetching projects: ', error);
  }

  return projects;
};

// Reusable function to fetch items by their parent
export const fetchItemsByParentId = async (itemType, parentId) => {
  const db = getFirestore();
  const projects = [];

  try {
    const projectsQuery = query(
      collection(db, itemType+'s'),
      where('parentId', '==', parentId)
    );
    const querySnapshot = await getDocs(projectsQuery);

    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Error fetching items: ', error);
  }

  return projects;
};

// Reusable function to add a project for a specific user
export const addProjectForUser = async (userId, projectData) => {
  const db = getFirestore();
  try {
    // Add a new document to the 'projects' collection
    const projectRef = await addDoc(collection(db, 'projects'), {
      ...projectData, // Include the project data
      userId // Add the userId to the project data
    });
    return projectRef.id; // Return the newly created project's document ID
  } catch (error) {
    console.error('Error adding project: ', error);
    return false;
  }
};

// Reusable function to add a project for a specific user
export const addItemForUser = async (userId, itemData) => {
  const db = getFirestore();
  try {
    // Add a new document to the 'projects' collection
    const itemRef = await addDoc(collection(db, itemData.type+'s'), {
      ...itemData, // Include the item data
      userId // Add the userId to the item data
    });
    return itemRef.id; // Return the newly created project's document ID
  } catch (error) {
    console.error('Error adding item: ', error);
    return false;
  }
};