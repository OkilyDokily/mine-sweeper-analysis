function classNames(...names) {
  return names.filter((n) => !!n).join(" ");
}

export default classNames;