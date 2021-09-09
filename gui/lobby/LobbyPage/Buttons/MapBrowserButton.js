/**
 * This class manages the button that allows the player to display the map browser page.
 */
class MapBrowserButton
{
	constructor()
	{
		this.mapBrowserButton = Engine.GetGUIObjectByName("mapBrowserButton")
		this.mapBrowserButton.onPress = this.onPress.bind(this);
		this.mapBrowserButton.caption = translate("Maps");
	}

	onPress()
	{
		Engine.PushGuiPage("page_mapbrowser.xml");
	}
}
