const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

exports.getVisitorCount = async (req, res) => {
    const counterRef = firestore.collection('counters').doc('visitorCounter');

    try {
        const doc = await counterRef.get();
        if (doc.exists) {
            res.status(200).send({ count: doc.data().count });
        } else {
            res.status(404).send('Counter not found');
        }
    } catch (error) {
        console.error('Error getting visitor count:', error);
        res.status(500).send('Error getting visitor count');
    }
};
