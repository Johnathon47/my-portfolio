export default function generateProgressBar(percent: number, totalBlocks = 20):string {
    const filledBlocks = Math.round((percent /100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    const bar = '▓'.repeat(filledBlocks)+'░'.repeat(emptyBlocks);
    return `[ ${bar} ] ${percent}%`;
}