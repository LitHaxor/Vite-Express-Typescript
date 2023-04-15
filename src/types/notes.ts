export type Notes = {
  time: number;
  blocks: Block[];
  version: string;
};

type Block = {
  id: string;
  type: string;
  data: Data;
};

type Data = {
  text: string;
};
