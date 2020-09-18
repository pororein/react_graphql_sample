import mongoose from 'mongoose';

const client = {
    connect: () => {
        const host = process.env.MONGO_DB_HOST;
        const user = process.env.MONGO_DB_USER;
        const password = process.env.MONGO_DB_PASS;
        const database = process.env.MONGO_DB_NAME;

        mongoose.connect(`mongodb://${user}:${password}@${host}/${database}?authSource=${database}`, { useNewUrlParser: true });

    }
};

export default client;