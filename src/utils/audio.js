export const notificationSound = () => {
    try {
        const context = new window.AudioContext();
        const oscilattor = context.createOscillator();
        const gainNode = context.createGain();

        oscilattor.type = "sine";
        oscilattor.frequency.setValueAtTime(880, context.currentTime);
        gainNode.gain.setValueAtTime(0.1, context.currentTime);

        oscilattor.connect(gainNode);
        gainNode.connect(context.destination);

        oscilattor.start();
        oscilattor.stop(context.currentTime + 0.3);
    } catch (error) {
        console.log("Audio play failed: ", error);
    }
};