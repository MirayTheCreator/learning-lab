const plural = new Intl.PluralRules("ru");
const termWord = { one: "термин", few: "термина", many: "терминов", other: "термина" };

for (const module of MODULES) {
  const count = module.terms.length;
  const item = document.createElement("li");
  item.textContent = `${module.title} — ${count} ${termWord[plural.select(count)]}`;
  document.getElementById("modules").append(item);
}
