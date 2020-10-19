const formatterDateTime = value => {
  const date = new Date(value);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: false
  };
  const data = new Intl.DateTimeFormat("pt-BR").format(date);
  const hour = new Intl.DateTimeFormat("pt-BR", options).format(date);

  return `${data} às ${hour}h`;
};

export { formatterDateTime };
