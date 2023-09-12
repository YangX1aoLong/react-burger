export const getDate = (s: string | undefined) => {
    if( s === undefined) return null;
  const date = new Date(s);
  return date.toLocaleTimeString();
};
