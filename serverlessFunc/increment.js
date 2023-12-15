const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

exports.incrementVisitorCount = async (req, res) => {
    const counterRef = firestore.collection('counters').doc('visitorCounter');

    try {
        await firestore.runTransaction(async (transaction) => {
            const doc = await transaction.get(counterRef);
            const newCount = (doc.exists && doc.data().count ? doc.data().count : 0) + 1;
            transaction.set(counterRef, { count: newCount });
        });
        res.status(200).send('Visitor count incremented');
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
        res.status(500).send('Error incrementing visitor count');
    }
};
