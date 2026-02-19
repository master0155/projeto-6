export class Plate{
  id: number
  image: string
  title: string
  description: string
  value: number

  constructor(id: number, image: string, title: string, description: string, value: number) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.value = value;
  }
}
