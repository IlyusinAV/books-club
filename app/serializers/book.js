import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalize(model, hash) {
        let hashCopy = Object.assign({}, hash);
        hashCopy.attributes = {};
        hashCopy.attributes.tittle = hashCopy.tittle;
        hashCopy.attributes.author = hashCopy.author;
        hashCopy.attributes.pages = hashCopy.pages;
        hashCopy.attributes.tags = hashCopy.tags;
        hashCopy.attributes.score = hashCopy.score;
        delete hashCopy.tittle;
        delete hashCopy.author;
        delete hashCopy.pages;
        delete hashCopy.tags;
        delete hashCopy.score;
        hash = {
            data: hashCopy
        };
        return hash;
    }
});
