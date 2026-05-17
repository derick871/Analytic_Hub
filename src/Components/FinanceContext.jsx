import { createContext, useEffect, useState } from 'react';
import { auth, db, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, where, orderBy } from 'firebase/firestore';

// 1. Correct capitalization for context object
const FinanceContext = createContext();

// 2. Destructure 'children' in lowercase
export const FinanceProvider = ({ children }) => {
    // FIXED: Changed commas to semicolons at the end of state initializations
    const [user, setUser] = useState(null);
    // FIXED: Kept names consistent (plural) to avoid 'setTransactions is not a function' error
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (!currentUser) {
                setTransactions([]);
                setLoading(false);
            }
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (!user) return;

        // FIXED: Used the state updater 'setLoading', not 'isLoading'
        setLoading(true);
        
        // FIXED: "uid" must be a string inside the where() clause
        const q = query(
            collection(db, "transactions"),
            where("uid", "==", user.uid),
            orderBy("createdAt", "desc")
        );
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const records = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
            setTransactions(records);
            setLoading(false);
        });
        
        return unsubscribe;
    }, [user]);

    // FIXED: Changed trailing commas to semicolons and fixed variable casing
    const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
    const logOutUser = () => signOut(auth);

    // Firestore Engine Operations
    const addTransaction = async (title, amount, type, category) => {
        if (!user) return;
        await addDoc(collection(db, "transactions"), {
            uid: user.uid,
            title,
            amount: parseFloat(amount),
            type, // 'income' or 'expense'
            category,
            createdAt: Date.now()
        });
    };

    // FIXED: Split 'await' and 'deleteDoc', fixed lowercase 'doc' helper, passed the dynamic dynamic 'id'
    const deleteTransaction = async (id) => {
        if (!user) return;
        await deleteDoc(doc(db, "transactions", id));
    };

    // 3. Render the actual Provider wrapper instead of a placeholder component
    return (
        <FinanceContext.Provider value={{
            user,
            transactions,
            loading,
            loginWithGoogle,
            logOutUser,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </FinanceContext.Provider>
    );
};

// 4. Default export the Context so you can use it with React.useContext()
export default FinanceContext;