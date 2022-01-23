import axios from 'axios';

const getUsers = async () => {

    try {
        // Request users data from sibers.com.api
        const response = await axios.get('https://demo.sibers.com/users');

        return response.data;
    } catch (error) {
        throw new Error('Ошибка');
    }
};

export { getUsers };