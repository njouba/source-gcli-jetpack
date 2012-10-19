'use strict';

const gcli = require('gcli');
const tabs = require('tabs');

gcli.addCommand({
  name: "source",
  description: "View the source of the current page",
  params: [],
  exec: function() {
    tabs.activeTab.url = "view-source:" + tabs.activeTab.url;
  }
});
