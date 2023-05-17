type Icon = 'phone' | 'instagram' | 'facebook' | 'tiktok' | 'france'
export const Icon = ({icon}: { icon: Icon }) => {
  const IconComponent = require(`../assets/icons/${icon}.tsx`).default;

  return <IconComponent/>
}