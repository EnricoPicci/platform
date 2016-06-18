"use strict";
var Simulator = (function () {
    function Simulator() {
    }
    // generates Templates 
    Simulator.getTemplates = function () {
        var templates = [];
        var template;
        var goals;
        var goal;
        // Template 1
        template = {};
        template.age = 40;
        template.profession = 'Manager';
        goals = [];
        goal = {};
        goal.age = 43;
        goal.name = 'Ristruttura';
        goal.iconId = 'fa-home';
        goals.push(goal);
        goal = {};
        goal.age = 48;
        goal.name = 'Moto';
        goal.iconId = 'fa-motorcycle';
        goals.push(goal);
        goal = {};
        goal.age = 50;
        goal.name = 'Collezione';
        goal.iconId = 'fa-bank';
        goals.push(goal);
        goal = {};
        goal.age = 63;
        goal.name = 'Anniversario';
        goal.iconId = 'fa-glass';
        goals.push(goal);
        template.goals = goals;
        templates.push(template);
        // Template 2
        template = {};
        template.age = 34;
        template.profession = 'Professionista';
        goals = [];
        goal = {};
        goal.age = 36;
        goal.name = 'Ristruttura';
        goal.iconId = 'fa-home';
        goals.push(goal);
        goal = {};
        goal.age = 41;
        goal.name = 'Studio';
        goal.iconId = 'fa-line-chart';
        goals.push(goal);
        goal = {};
        goal.age = 50;
        goal.name = 'Partner';
        goal.iconId = 'fa-money';
        goals.push(goal);
        goal = {};
        goal.age = 60;
        goal.name = 'Pensione';
        goal.iconId = 'fa-blind';
        goals.push(goal);
        template.goals = goals;
        templates.push(template);
        // Template 3
        template = {};
        template.age = 35;
        template.profession = 'Imprenditore';
        goals = [];
        goal = {};
        goal.age = 38;
        goal.name = 'Finanziamento';
        goal.iconId = 'fa-money';
        goals.push(goal);
        goal = {};
        goal.age = 41;
        goal.name = 'Internazionale';
        goal.iconId = 'fa-rocket';
        goals.push(goal);
        goal = {};
        goal.age = 50;
        goal.name = 'IPO';
        goal.iconId = 'fa-bell';
        goals.push(goal);
        goal = {};
        goal.age = 60;
        goal.name = 'Viaggio';
        goal.iconId = 'fa-plane';
        goals.push(goal);
        template.goals = goals;
        templates.push(template);
        // Template 4
        template = {};
        template.age = 37;
        template.profession = 'Impiegato';
        goals = [];
        goal = {};
        goal.age = 39;
        goal.name = 'Figlio';
        goal.iconId = 'fa-venus-mars';
        goals.push(goal);
        goal = {};
        goal.age = 41;
        goal.name = 'Casa';
        goal.iconId = 'fa-home';
        goals.push(goal);
        goal = {};
        goal.age = 50;
        goal.name = 'Università';
        goal.iconId = 'fa-university';
        goals.push(goal);
        goal = {};
        goal.age = 70;
        goal.name = 'Pensione';
        goal.iconId = 'fa-blind';
        goals.push(goal);
        template.goals = goals;
        templates.push(template);
        // Template 5
        template = {};
        template.age = 37;
        template.profession = 'Free Lance';
        goals = [];
        goal = {};
        goal.age = 39;
        goal.name = 'Matrimonio';
        goal.iconId = 'fa-heart';
        goals.push(goal);
        goal = {};
        goal.age = 44;
        goal.name = 'Viaggio';
        goal.iconId = 'fa-plane';
        goals.push(goal);
        goal = {};
        goal.age = 50;
        goal.name = 'MBA';
        goal.iconId = 'fa-university';
        goals.push(goal);
        goal = {};
        goal.age = 70;
        goal.name = 'Pensione';
        goal.iconId = 'fa-blind';
        goals.push(goal);
        template.goals = goals;
        templates.push(template);
        return templates;
    };
    // generates Goals 
    Simulator.getGoals = function () {
        var goals = [];
        var goal;
        // Goal 
        goal = {};
        goal.name = 'Ristruttura';
        goal.iconId = 'fa-home';
        goals.push(goal);
        // Goal 
        goal = {};
        goal.name = 'Moto';
        goal.iconId = 'fa-motorcycle';
        goals.push(goal);
        // Goal 
        goal = {};
        goal.name = 'Collezione';
        goal.iconId = 'fa-bank';
        goals.push(goal);
        // Goal 
        goal = {};
        goal.name = 'Anniversario';
        goal.iconId = 'fa-glass';
        goals.push(goal);
        // Goal 
        goal = {};
        goal.name = 'Studio';
        goal.iconId = 'fa-line-chart';
        goals.push(goal);
        // Goal 
        /*goal = {};
        goal.name = 'Partner';
        goal.iconId = 'fa-money';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Pensione';
        goal.iconId = 'fa-blind';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Finanziamento';
        goal.iconId = 'fa-money';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Internazionale';
        goal.iconId = 'fa-rocket';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'IPO';
        goal.iconId = 'fa-bell';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Viaggio';
        goal.iconId = 'fa-plane';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Figlio';
        goal.iconId = 'fa-venus-mars';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Casa';
        goal.iconId = 'fa-home';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Università';
        goal.iconId = 'fa-university';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'Matrimonio';
        goal.iconId = 'fa-heart';
        goals.push(goal);
        // Goal
        goal = {};
        goal.name = 'MBA';
        goal.iconId = 'fa-university';
        goals.push(goal);*/
        return goals;
    };
    return Simulator;
}());
exports.Simulator = Simulator;
//# sourceMappingURL=simulator.js.map