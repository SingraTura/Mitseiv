export class Aleatoriador{
    static generar(): string {
        let d = new Date().getTime();
        // tslint:disable-next-line:only-arrow-functions
        const result = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(
          c
        ) {
          // tslint:disable-next-line:no-bitwise
          const r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          // tslint:disable-next-line:no-bitwise & triple-equal
          return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return result;
      }
}