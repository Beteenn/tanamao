var topics : any = [];

export default {

    getTopics(){
        const topicsJson = localStorage.getItem('topics');
    
        if (topicsJson) {
            topics = JSON.parse(topicsJson);
        }

        return topics;
    },
    addTopic(topic: any){
        topics.push(topic);
        localStorage.setItem('topics', JSON.stringify(topics));
    }
    
};
// var topics : any = [];

// export function getTopics() {
//     const topicsJson = localStorage.getItem('topics');
    
//     if (topicsJson) {
//         topics = JSON.parse(topicsJson);
//     }

//     return topics;
// }

// export function addTopic(topic: any){
//     topics.find(topic);
//     localStorage.setItem('notes', JSON.stringify(topics));
// }