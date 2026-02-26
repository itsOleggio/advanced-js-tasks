import ms from 'enhanced-ms';

export function convertTime(time: number) {
    const postDate = Date.now() - time;
    return ms(postDate);
}