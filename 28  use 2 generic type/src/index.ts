function getTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(getTuple(1, 2));

//ingej generic type iin tavij ogsnon heregtei yu hereggui yu gedeg deer shuud 1 2 geeed utga hvcheer ogtson tohioldold hereggui uchir ni typescript tsaanaasaa infer hiigeed number geed utgaiin medtsen bgaa  harin huvisagchtai ajilj bui tohioldold tavij ogoh heregtei huvisagchaar sanaaandgui oor utga orood ch irj medne

let z = 3,
  y = 2;

console.log(getTuple<number, number>(3, 4));
