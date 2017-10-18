const {openConfig} = require('../../config');

module.exports = function (commands) {
  const submenu = [
    {
      role: 'undo',
      accelerator: commands['editor:undo']
    },
    {
      role: 'redo',
      accelerator: commands['editor:redo']
    },
    {
      type: 'separator'
    },
    {
      role: 'cut',
      accelerator: commands['editor:cut']
    },
    {
      role: 'copy',
      accelerator: commands['editor:copy']
    },
    {
      role: 'paste',
      accelerator: commands['editor:paste']
    },
    {
      role: 'selectall',
      accelerator: commands['editor:selectAll']
    },
    {
      type: 'separator'
    },
    {
      label: 'Clear Buffer',
      accelerator: commands['editor:clearBuffer'],
      click(item, focusedWindow) {
        if (focusedWindow) {
          focusedWindow.rpc.emit('session clear req');
        }
      }
    }
  ];

  if (process.platform !== 'darwin') {
    submenu.push(
      {type: 'separator'},
      {
        label: 'Preferences...',
        accelerator: commands['window:preferences'],
        click() {
          openConfig();
        }
      }
    );
  }

  return {
    label: 'Edit',
    submenu
  };
};
