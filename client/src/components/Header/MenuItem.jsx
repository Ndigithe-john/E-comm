import PropsTypes from "prop-types";

const MenuItem = ({ url, label, icon: Icon }) => {
  return (
    <a
      href={url}
      className="flex items-center gap-2 text-sm font-semibold text-slate-900 transition-all hover:text-slate-600"
    >
      <Icon className="h-6 w-6" strokeWidth={2.5} />
      {label}
    </a>
  );
};
MenuItem.propTypes = {
  url: PropsTypes.string,
  label: PropsTypes.string,
  icon: PropsTypes.elementType,
};
export default MenuItem;
