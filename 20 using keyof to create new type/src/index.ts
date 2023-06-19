type Student = {
  id: number;
  name: string;
  gpa: number;
  graduateYear: number;
};

type StudentValues = keyof Student; // === (Student type iin key bolgoniin ali neg ni gesen ug) "id" | "name" | "gpa" | "graduateYear" gehdee type ni bish zovkhon key tein tentsvvlj bgaa yum

const value: StudentValues = "id";

console.log(typeof value);
