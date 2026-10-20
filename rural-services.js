(() => {
  const tabList = document.querySelector('[role="tablist"]');

  if (!tabList) {
    return;
  }

  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));

  const selectTab = (selectedTab, moveFocus = false) => {
    tabs.forEach((tab) => {
      const selected = tab === selectedTab;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      tab.classList.toggle('is-active', selected);
      panel.hidden = !selected;
      panel.classList.toggle('is-active', selected);
    });

    if (moveFocus) {
      selectedTab.focus();
    }
  };

  tabList.addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab && tabs.includes(tab)) {
      selectTab(tab);
    }
  });

  tabList.addEventListener('keydown', (event) => {
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectTab(tabs[nextIndex], true);
  });
})();
