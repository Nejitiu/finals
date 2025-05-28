const ACCESS_CONTROL = {
  admin: ['*'],
  employee: ['supplier', 'purchase-order']
};

function hasAccess(role, section) {
  const allowed = ACCESS_CONTROL[role];
  if (!allowed) return false;
  if (allowed.includes('*')) return true;
  return allowed.includes(section);
}

function getVisibleTabs(role, allTabs) {
  return allTabs.filter(tab => hasAccess(role, tab));
}

window.AccessControl = { hasAccess, getVisibleTabs };
