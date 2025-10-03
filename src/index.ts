export class Sample {
  public execute(sample: number) {
    if (sample === 7) {
      throw new Error("BOOM");
    }
    return sample;
  }
}
