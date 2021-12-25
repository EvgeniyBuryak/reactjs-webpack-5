import axios from 'axios';

const getUsers = async () => {

    try {
        const response = await axios.get('https://demo.sibers.com/users', {
            params: {
                limit: 10,
            }
        });

        return response.data;
    } catch (error) {
        throw new Error('Ошибка');
    }
};

export { getUsers };