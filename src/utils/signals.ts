export function signals(signals: string[]): Promise<string> {
  return new Promise<string>((resolve) => {
    signals.forEach((signal) => {
      process.on(signal, async () => {
        console.log(`Received ${signal}`);
        resolve(signal);
      });
    });
  });
}
