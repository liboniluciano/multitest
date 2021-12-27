export const validateHeaderFile = (headerValidate: string[]) => {
  const header = headerValidate[0].split(";");
  const validate =
    header[0] === "DataCad" &&
    header[1] === "Cargo" &&
    header[2] === "Cpf" &&
    header[3] === "Nome" &&
    header[4] === "UfNasc" &&
    header[5] === "Salario" &&
    header[6] === "Status";
  return validate ? true : false;
};
