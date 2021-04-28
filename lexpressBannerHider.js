// ==UserScript==
// @name        lexpress banner hider
// @namespace   https://www.lexpress.mu/
// @match      https://www.lexpress.mu/*
// @version     1
// ==/UserScript==
 

      if(document.getElementsByClassName("atomic-inner-leaderboard"))
    {
      document.getElementsByClassName("atomic-inner-leaderboard")[0].style.display="none";
      
      document.getElementsByClassName("covid19__announcement")[0].style.display="none";
    }
