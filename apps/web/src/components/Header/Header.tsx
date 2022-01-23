import { Avatar, Button } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconBell, IconHelpCircle } from '@douyinfe/semi-icons';
import ToolBar from '@/components/Header/ToolBar';
import { headerClass, iconClass } from '@/components/Header/index.css';

export default () => {
  return (
    <div className={headerClass}>
      <IconSemiLogo />
      <ToolBar />
      <div>
        <Button
          className={iconClass}
          theme="borderless"
          icon={<IconBell size="large" />}
        />
        <Button
          className={iconClass}
          theme="borderless"
          icon={<IconHelpCircle size="large" />}
        />
        <Avatar color="orange" size="small">
          YJ
        </Avatar>
      </div>
    </div>
  );
}
