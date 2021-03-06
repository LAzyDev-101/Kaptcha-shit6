declare module "*.css" {
  export default {};
}

/**
 * Now declare things that go in the global namespace,
 * or augment existing declarations in the global namespace.
 */
interface challenge  {
  name: string;
  rule: string;
  winCondition: string;
  src: string;
  width:string,
  height:string,
}
