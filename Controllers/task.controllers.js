import { connect } from "mongoose";

const natsOptions = {
    servers: ['nats://localhost:4222'],
};
let natsConnection;

const publishEvent = async (subject, data) => {
    if(!natsConnection) {
        natsConnection = await connect(natsOptions);
        console.log('Connected to NATS server');
    }

    try {
        natsConnection.publish(subject, data);
        console.log('Event publish successfully')
    }
}


const completedTaskEvent = {
    eventType: 'Task_COMPLETED',
    taskId: taskId,
    userId: userId,
    completedAt: new Date().toISOString()
};
try {
    await publishEvent('TASK_COMPLETED', JSON.stringify(completedTaskEvent));
} catch (error) {
    console.error('Error publishing Event:', error);
}
resizeBy.status(201).json({ success: true, message: 'Task marked as '})