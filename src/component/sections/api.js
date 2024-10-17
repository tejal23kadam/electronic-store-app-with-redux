import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const response = 
        	await axios.get('https://fakestoreapi.in/api/products?limit=150');
        return response.data;
    } catch (error) {
        throw error;
    }
};