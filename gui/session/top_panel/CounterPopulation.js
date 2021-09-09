/**
 * This class manages the population counter in the top panel.
 * It flashes the counter if the training of any owned entity is blocked.
 */
class CounterPopulation
{
	constructor(resCode, panel, icon, count, stats)
	{
		this.resCode = resCode;
		this.panel = panel;
		this.icon = icon;
		this.count = count;
		this.count.onTick = this.onTick.bind(this);
		this.isTrainingBlocked = false;
		this.color = this.DefaultPopulationColor;
		this.stats = stats;
	}

	rebuild(playerState, getAllyStatTooltip)
	{
		this.count.caption = sprintf(translate(this.CounterCaption), playerState);
		let total = 0;
		for (let resCode of g_ResourceData.GetCodes())
			total += playerState.resourceGatherers[resCode];

		this.stats.caption = total ? coloredText(total, rgbToGuiColor(g_DiplomacyColors.displayedPlayerColors[g_ViewedPlayer])) : 0;

		this.isTrainingBlocked = playerState.trainingBlocked;

		this.panel.tooltip =
			setStringTags(translate(this.PopulationTooltip), CounterManager.ResourceTitleTags) +
			getAllyStatTooltip(this.getTooltipData.bind(this)) + "\n" + this.CurrentGatherersTooltip;
	}

	getTooltipData(playerState, playername)
	{
		return {
			"playername": playername,
			"statValue": sprintf(translate(this.AllyPopulationTooltip), playerState),
			"orderValue": playerState.popCount
		};
	}

	onTick()
	{
		if (this.panel.hidden)
			return;

		let newColor = this.isTrainingBlocked && Date.now() % 1000 < 500 ?
			this.PopulationAlertColor :
			this.DefaultPopulationColor;

		if (newColor == this.color)
			return;

		this.color = newColor;
		this.count.textcolor = newColor;
	}
}
// + ' ' was added because there is a problem with the translation in the British language, adding spaces around the slash symbol. To avoid this, this has been added and can be removed if the translation removes its spaces from the public-gui-ingame.po files.  I just kept it instead of tinkering with the .po files, maybe more languages are affected. Thanks to @seeh for figuring this out.
CounterPopulation.prototype.CounterCaption = markForTranslation("%(popCount)s/%(popLimit)s (%(popMax)s)") + ' ';

CounterPopulation.prototype.PopulationTooltip = markForTranslation("Population: current/limit (max)");

CounterPopulation.prototype.AllyPopulationTooltip = markForTranslation("%(popCount)s/%(popLimit)s (%(popMax)s)");

/**
 * Storing the translated and formatted gatherer string in the prototype.
 */
CounterPopulation.prototype.CurrentGatherersTooltip = setStringTags(translate("Gatherers: current"), {"font": "sans-bold-16"});
/**
 * Color to highlight the total gatherers.
 */
CounterPopulation.prototype.DefaultTotalGatherersColor = "gold";
/**
 * Colors to flash when pop limit reached.
 */
CounterPopulation.prototype.DefaultPopulationColor = "white";
CounterPopulation.prototype.PopulationAlertColor = "255 190 100";
