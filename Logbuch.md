# Update summary
            
   v1.6.2 (27/Aug/21)
       'Version number'
            - adjust number to 1.6.2 (ProjectInformation.js and mod.json)
        'Minimap'
            - added a big red number above the minimap idle worker button, displaying the total number of idle units(totalNumberIdleWorkers, MiniMap.xml) and changed the minimap-idle-highlight.png and minimap-idle.png to the old ones, without the red background.
            - adjusted the blue/cyan & red/pink colors a bit, to make them more visually different from one another (Player~boongui.js and tooltips~boongui.js)
        'Chat'
            - decreased the font size for chat notifications from 14 to 12 (styles.xml) and increased number of chat lines to 6 (session.xml)
        'Lobby'
            - changed the color for status messages into gray (StatusMessageFormat.js), making it more visually visible when someone joins and leaves the lobby, also applying the same effect for the gamesetup chat (StatusMessageFormat.js). Both files have the same name, only different locations.
            - slightly changed the font color for the chat input text and sprite (both in the gamesetup chat and the lobby chat ChatPanel.xml)
            -added ClientReady.js, changed font from sans-bold-13 to sans-stroke-14 and replaced the "*" with "+++/---".
        'Replay'
            - Moving to the replay menu, when quitting a replay via "Quit" (@Schweini fixed it with D3958 - diffID 18470)
        'Top panel'
            - removed TopPanel.js, because I reinstated the civIcon in the top panel, but just made it smaller
        'Stats'
            - updated GuiInterface~boongui.js with "imperial phase" recognition. Not useful for 0ad, but Delenda Est uses it and making the compatible DE version of boongui, I just copied it over. It does no harm.
        
   v1.6.1 (13/Aug/21)
       'Version number'
            - adjust number to 1.6.1 (ProjectInformation.js and mod.json)
        'Stats Overlay'
            - changed the z-value to 50, so it stays behind the chat window (boongui_basicOverlay.xml)
            - I forgot to include             "trainingBlocked": cmpPlayer.IsTrainingBlocked()" into the GuiInterface~boongui.js, it is now fixed and blinks again.
        'Chat window'
            - increased the font size from sans-13 to sans-16 for the ingame chat window (common/styles.xml)
        'Minimap'
            - added a more colorful idle button to make it easier to see  when someone has idle workers.
            - color comes from @maroder (minimap-idle.png, minimap-idle-highlight.png)
        'Top panel'
            - adjusted the layout for the map information when you are observer, instead of center text_aligned it is now slightly moved inwards from the left side and left aligned, originally I want it to be center aligned above the stats overlay, but changes in the screen size messes it up, this solution is easier to maintain.
        'Lobby'
            - Logging into the lobby, issue when autociv and boongui are enabled, renaming "sgMapTypeAndName" into "sgMapName" (GameDetails.js and GameDetails.xml) solves it.
        'Session'
            - added a useless function to the session~boongui.js file, the autociv mod crops the pauseoverlay to 30%, but I use the pauseoverlay to show important informations. I just copied his function into my file and increased the number to 100%. 
            
   v1.6 (12/Aug/21)
       'Version number'
            - adjust number to 1.6 (ProjectInformation.js and mod.json)
            - the original boonGUI mod had the last version number to be 1.5, i have to update it to 1.6
            
   v1.5 (12/Aug/21)
       'Version number'
            - adjust number to 1.5 (ProjectInformation.js and mod.json)
            - merged boongui txt files with log entires into Logbuch.md, also included possible feature ideas 
        'Skins'
            - added red texture (animal_fish.dds, animal_fish_generic.png, animal_tuna.png)
        Manual:
            - Added cheat codes to the games manual for 0AD, Hyrule Conquest and Delenda Est (intro.txt).  
   
   v1.4 (11/Aug/21)
        'Version number'
            - adjust number to 1.4 (ProjectInformation.js and mod.json)
            - changed name from NROC to boonGUI in all files
        'Lobby'
            - slightly adjusted the font size in the GameDetails.js and GameDetails.xml from 18 down to 16
        'NotificationPanel'
            - increased the width of the TimeNotificationOverlay.xml to 315 the same width as the minimap
        'Player colors
            - Updated PlayerColor.js file
        'GameSpeed'
            - reduced the font size from 16 down to 14 and decreased width a bit (GameSpeedControl.xml)
        'FPS & GameTime'
            - reduced the font size from 16 down to 14 (global.xml)
        'StatsOverlay'
            - reduced functionality of the statsoverlay, instead of having 3 diffrent overlay (stats, units and basic) it has been reduced to just one - the "boongui_basicOverlay.js" (reduced number of needed itmes in the GuiInterface~boongui.js file as well)
            - hotkey for hiding the overlay is defined in boongui_basicOverlay.xml and nroc_basicOverlay.js. Also added the hotkey to the default_config.json, so it will automatically be presented when enabling the mod for the first time, also updated the welcome message in mainmenu~boongui.js, to explain what the hotkey does.
            - reduced player name field down to 9 characters
            - deleted nroc_statsOverlay.xml, nroc_statsOverlay.js, nroc_unitsOverlay.xml and nroc_unitsOverlay.js
        'TopPanel'
            - removed the NewbieRush icon (PlayerViewControl.js and PlayerViewControl.xml)
            -adjusted the BuildLabel.xml in middle postion, since overlay is shorter and newbierush logo was removed
            - reduced the font size in PlayerViewControl.xml and BuildLabel.xml to mono-stroke-14; mono-stroke-16 for the menu button instead of mono-stroke-18
        'Minimap'
            - added a tooltip with the yellow hotkey for the scorebutton, when hovered over the button inGame. (MiniMapScoreButton.js, MiniMap.xml)
        'Background'
            - added a new background done by maroder/marder (vesta.js, vesta.xml, vesta_1.png, vesta_2.png, vesta_3.png, vesta_4.png, vesta_5.png, textures.xml)
            - other backgrounds have been disabled

   v1.3 (8/Aug/21)
        'Version number'
            - adjust number to 1.3 (PlayerViewControl.xml, ProjectInformation.js and mod.json)
        'Lobby'
            - added placeholder_text="Chat Message" and placeholder_color="gray" to the GameSetupPage/Panels/Chat/ChatPanel.xml and lobby/LobbyPage/Chat/ChatPanel.xml
            - changed the color of the chat input field to gray
            - switched the position of playerlist and playerinformation in the right panel
        'Stats Overlay'
            - moved the "#" (Team number) after the "CIV" and before the phaseIcon column
            - changed the loop function from "for (let i = 0; i < list.length; i++)" into "for (let i = list.length-1;i>=0 ;i--)"
            Idea comes from: https://stackoverflow.com/questions/1340589/are-loops-really-faster-in-reverse
        'Minimap'
            - added a new folder "minimapbuttons", which includes all icons for the minimap and the background_gradient.png, which @maroder send me via the forum
            - For the higlighted version I just used modulate 140,100,100 from imagemagick
            - For the disabled version, I used the macOS app "Preview" and the option "Adjust color", reduced "Saturation" and "Exposure". Happy with the result.
            - reduced the size and thickness of the golden ring around the minimap (MiniMap.xml)
            - split the black background for the minimap and the hover panel below it, into two parts to better set the correct spacing between the hover panel and the actual minimap. The gap between them is now consistent along the line (background_circle.png, background_hover_panel.png)
            - for the golden ring I ran -modulate 110,130,100 to make it a bit brighter and vivid (background_minimap_circle.png)
            - the line around the hover panel was hand drawn in the "Preview" program thickness 2x (3x might be better) (background_hover_panel.png)
            
   v1.2 (26/Jun/21)
        'Version number'
            - adjust number to 1.2 (PlayerViewControl.xml, ProjectInformation.js and mod.json)
        'TopPanel'
            - Added a new Alpha logo (0ad_alpha_logo.png)
            - Added the map name,  mapsize, biome and popMax also one icon for the map (name, size and biome) and one icon for popCap (BuildLabel.js, BuildLabel.xml and setup.xml). Its very easy to do, mostly copy stuff from common/gamedescription.js and pay attention to use the correct variable: g_InitAttributes.
            - slightly increased the newbieRush logo and added one additional space to the player column in the stats overlay (PlayerViewControl.xml)
        'StatsOverlay'
            - Added the icons for the phases, should improve the readability of the stats overlay a bit. The icons are called from the session/setup.xml file and are implented in nroc_basicOverlay.js. Important: GAIA should not have an icon displayed.
            - Moved some more stats to the base overlay as they both share the same thing, this reduces repetition a bit (nroc_basicOverlay.js, nroc_statsOverlay.js, nroc_unitsOverlay.js)
            - changed the name of the tech colum to "rT"
            - changed the color for the headers from lightgray to a darker tone
            -increased the length of the player column to 13
        'PauseOverlay'
            - The explanation for phases has been removed, with the new icons it is self-explanatory or you have to be a donkey not to understand it. (PauseOverlay.xml)
        'Lobby'
            - Layout was a bit adjusted to my liking, mostly position/ color changes and larger fonts: (ProfilePanel.xml, PlayerList.xml, LobbyPage.xml, GameList.xml, GameListFilters.xml, GameDetails.xml, GameDetails.js and PlayerList.js).
            - added some new buttons (LobbyPage.js, LobbyPage.xml and the buttons: ForumButton, HotkeyButton, MapBrowserButton, OptionsButton and CivilizationLobbyButton)
            - changed the layout of the chatinput, made it red and larger font size (gamesetup/Pages/GameSetupPage/Panels/Chat/ChatPanel.xml, lobby/LobbyPage/Chat/ChatPanel.xml)
            - Lobby also shows the GameTime in the "GameDetails" if an already started game is selected. Easy way to see how long a game has been running. (GameDetails.js)
        'HUD'
            - changed the GUI of the panels in the game window from "0 0 250" to texture="global/modern/background.png" (sprites.xml, MenuButton.xml, PlayerViewControl.xml, overlays)
            - adjusted the shader for chat messages slightly, was not happy about it with 1.1 (item-shading-right.png)
        'MiniMap'
            - Changed the texture and color of the circle (background_circle.png). I used the official 0ad logo and cut out a ring from it. I also adjusted the position of the objects in the MiniMap.xml file to get the desired layout. 
            - Created a new background (background_black.png), adjusted the overall size in session.xml and changed the background color from "0 0 0" to "transparent" in sprites.xml.
            - I had to recreat the icons, i used a circle of the original background.png from the modern folder and put the icons in it. Made a highlight version of each with modulate -130,100,100 plus a ring around it and a disabled version for flare and idle in a gray tone.
        'Projectiles'
            -increased the projectile_stone_med.dae by a factor of 4
        'Fruits'
            - Changed the color, saturation and brightness of palm trees (palm_date_new_3_fruiting.png), bananas (banana.png) and two berry bushes (berry_bush_03.png, berry_bush_04.png). U played around with the imagemagick -modulate formulae till I was happy. Pure intuition.
        'Summary'
            -removed the implemented mod from @dpikt in version 0.9.7, because I never used it (counters.js was deleted again and  summary.js & layout.js were adjusted to the way they were before adding the mod from @dpikt to it).
        
   v1.1 (19/Jun/21)
        'Version number'
            - adjust number to 1.1 (PlayerViewControl.xml, ProjectInformation.js and mod.json)
        'Lobby && Colors'
            - slightly changed some colors blue and cyan (Player~nroc.js)   
            - changed the colors in the gamestup as well to be in sync what you see in the game later. The function and colors are stored in common/tooltips~nroc.js and being used PlayerColor.js and ClientChat.js
            - increased the font size for the chatText and chatInput in the lobby and the gamesetup page from sans-13 to sans-stroke-16 (gamesetup/Pages/GameSetupPage/Panels/Chat/ChatPanel.xml, lobby/LobbyPage/Chat/ChatPanel.xml).
            - Increased the username in chat messages from sans-bold-13 to sans-stroke-16 ChatMessageFormatSay.js and ClientChat.js
            -Increased font size in SystemMessageFormat.js and StatusMessageFormat.js
        'Overlay'
            - added new researched tech column "??????" (GuiInterface~nroc.js and nroc_basicOverlay.js) and adjusted the size of all overlays, since the new column made the first one a bit wider (nroc_unitsOverlay.js, nroc_statsOverlay.js)
            - moved "Cha" and "Mer" into the 2nd overlay
            - Full circle when cartography has been researched or when there are no more allies. (nroc_statsOverlay.js, nroc_unitsOverlay.js and GuiInterface~nroc.js)
        'MiniMap'
            - adding a tooltip to the stats overlay button (MiniMap.xml)
        'PauseOverlay'
            - added new tech column to the description
        'Chat notification'
            - new icon added when under attack, red circle focus-attacked.png (ChatMessageFormatSimulation.js)
            - changed the background to a fading shader styles.xml, looks a bit more sophisticated
   
   v1.0 Update to A25 (14/Jun/21)
        'Version number'
            - adjust number to 1.0 (PlayerViewControl.xml, ProjectInformation.js and mod.json)
            - ProjectInformation.js has been added, with a button for YouTube
            - Added "ignoreInCompatibilityChecks" to the mod.json file. This should allow me to play in the lobby with the NROC mod, see rP25634 (2/Jun/21)
        --> ART 
        'art/actors/flora/trees'
            - copied over
        'art/actors'
            - Geology and props folder deleted, some maps have these new metal mines, let's see how it goes, we can add it later if needed, we want to make as few changes to the orignal as possible
            - Unit folder also deleted the files in there were fixed for the projectiles in siege catapults, we only need the bigger .dae file now - Very good, that means less files. 
        'art/animation'
            - all copied over
        'art/meshes'
            - all copied over except for the metal mine .dae files (geo_mineral_01.dae and geo_mineral_02.dae) they were deleted since metamines were on some maps updated with A25
        'art/skeletons'
            - all copied over except for the metal mine skelton files (rocks_02_001.xml and rocks_02.xml)
        'art/textures/skins/gaia
            - copied all over, except for the skin files that were no longer needed for the metal mines (metal_round_col_india.png, metal_round_col_sahara.png, metal_round_col_temperate.png, stonemine_round_col.png, stonemine_round_normal.png and stonemine_round_spec.png)
        'art/textures/cursors
            - deleted, they are now natively integrated into the game
        'art/textures/ui/global/border'
            - just copied over
        'art/textures/ui/pregame/shell/logo'
            - 0ad_logo.png added, It was created via a website called brandmark.io and the 0ad logo was then added manaully via preview.app
        'art/textures/ui/session'
            - removed metal resources icons, they are now natively integrated into the game
            - copied the minimap buttons over and added the new flare buttons as well
            - applied -modulate 85,100,100 to minimap-flare.png, -modulate 150,100,100 to minimap-flare.png to create a highlight version and -modulate 80,100,100 to minimap-flare-disabled.png
        --> fonts, nroc_data, simulation copied over 
        --> GUI
        'common'
            - deleted mod~nroc.js file
            - deleted OverlayCounter.js and OverlayCounterManager.js
            - delete OverlayCounterFPS.js.DELETED and OverlayCounterRealtime.js.DELETED
            - updated global.xml and increased the font size for the "dataCounter" to "mono-stroke-18"
        'gamesetup'
            - delete folder
        'options'
            - deleted - leave out for now, might need to adjust later
        'pregame'
            - Updated MainMenuItems.js
            - mainmenu~nroc.js was changed it no longer needs to restart when the mod is enabled for the first time, hotkeys are still written to the user.cfg file (used the autociv file and made changes to it, to fit my purpose)
        'replaymenu'
            - added the old replay_actions.js file, so that @mysticjim can still play replays via the "Summary" button   
        'session'
            - adjusted PauseOverlay.xml and PauseOverlay.js slightly the "pausedByText" in MP mode sits now between "PauseText" and the description of the stats overlay. Also adjusted the height and width to be fixed in terms of pixel length, rather than being defined as relative numbers. 
            - deleted: files OverlayCounterElapsedTime.js, OverlayCounterRemainingCeasefire.js.DELETED
            - updated: selection_panels.js, styles.xml, sprites.xml, session.xml, GameSpeedControl.xml
            - renamed: selection_panels_helpers.js into selection_panels_helpers~nroc.js and included only my functions (easier to maintain this way)
            - copied over: session~nroc.js, TopPanel.xml, ResearchProgress.xml, PanelEntities.xml, TopPanel.js, GameSpeedControl.js
            #chat
            - ChatMessageFormatSimulation.js updated
            #hotkeys
            - updated and moved all hotkeys to misc.xml, therfore camera.xml was deleted
            #message_box
            - QuitConfirmation.js, QuitConfirmationMenu.js and QuitConfirmationReplay.js were redone according to @schweini's diff from D3958. I removed the question and it now displays only 3 buttons, but the hotkey still works. Also added the NetworkStatusOverlay.js and the messages~nroc.js file and adjusted the session~nroc.js file so that everything works well.
            #minimap
            - updated the files in there, because of the new addition of the map flares button. Personal goal would be to make a round minimap long term, like it better.
            #objectives
            - removed "Sup" and replaced it with "Fem" (GuiInterface~nroc.js, nroc_statsOverlay.js and PauseOverlay.xml)
            - removed "Mil" score, I think too many stats slow down the game, will ask @mysticjim to get rid of some stats e.g. "Cha"
            - "Ele" in the unitsOverlay now includes Archer+War Elephnats (PauseOverlay.xml, GuiInterface~nroc.js). Also accounted the Archer elephants correctly there was a change with the "Pop" and "PRD" column for this unit.
            - added new colums for Mercenaries (Mer) into the stats overlay, they got a boost from A25 lets see if they are used more, otherwise might just throw them in the units overlay (nroc_statsOverlay.js, GuiInterface~nroc.js)
            #selection_panels_middle
            - deleted, seems I started something here and never finished it, so I delete it for now
            #selection_panels_right
            - just copied over
            #session_objects
            - just copied over
            #top_panel
            - Counters.xml, CounterResource.js and CounterPopulation.js updated. GameSpeedButton was deleted. The rest was just copied over
            ##IconButtons
            - GameSpeedButton.js deleted
        'summary'
            - updated summary.js
                
            
   v0.9.9 (3/Jun/21)
        'Version number'
            - adjust number to 0.9.9 (PlayerViewControl.xml and mod.json) 
        'Overlay'
            - changed the position from "Food", "Wood", "Stone" and "Metal" to nroc_statsOverlay.js and "Eco", "Mil" and "Exp" to the nroc_unitsOverlay.js
        'PauseOverlay'
            - added explanation for "Fem", "Ran", "Mel", "Ele", "Hea" and "Tra" to the pause menu (PauseOverlay.xml)
            
   v0.9.8 (28/May/21)
        'Version number'
            - adjust number to 0.9.8 (PlayerViewControl.xml and mod.json)
        'Overlay'
            - added new colums to the screen, which shows the "Eco", "Mil" and "Exp" score (nroc_statsOverlay.js) also added the needed statistics to the GuiInterface~nroc.js file (resourcesGathered, tradeIncome, enemyUnitsKilledValue, unitsCapturedValue, enemyBuildingsDestroyedValue, buildingsCapturedValue and percentMapExplored)
            - when a player resigns he vanishes from the overlays, if you select him via "Observer dropdown" all his stats are visble  (nroc_basicOverlay.js, nroc_statsOverlay.js, nroc_unitsOverlay.js)
        'PauseOverlay'
            - added the explanations for the "eco", "mil" and "exp" scores  (PauseOverlay.xml)
            - added some Hotkeys I like
        'Notification'
            - Background color slighty more opaque and decreased the font size from 16 to 14 (styles.xml)
        'TopPanel'
            - removed "MaxPop" from the tooltip (CounterPopulation.js)
            - adjusted the Gamespeed slightly to the right, it reached into the StatsOverlay (GameSpeedControl.xml, GameSpeedButton.xml and global.xml)
        'HeroPortraits'
            - reduced the size a bit and increased the number of panel entities from 15 to 17 (PanelEntities.xml)
            
   v0.9.7 (3/May/21) 
        'Version number'
            - adjust number to 0.9.7 (PlayerViewControl.xml and mod.json)
        'TopPanl'
            - there seems to be a bug with the three numbers in the population counter, adjusted this after feedback from @seeh (CounterPopulation.js)
        'SelectionGroup'
            - increased the size via selection_group_icons.xml
            - the icons for control groups 8 and 9 clashed with the minimap, after adjsuting the z-value it is fixed (selection_group_icons.xml and MiniMap.xml)
        'ResearchProgress'
            - increased the size via ResearchProgress.xml
        'Stats Overlay'
            - added a additional space to the "Kil"  and removed one from the "K/D" column, because the layout is so a bit clearer to read. (nroc_statsOverlay.js)
        'Summary'
            - implemented the "Total Population" on the map mod from here: github.com/dpikt/pop-chart
            - This adds a "On Map" chart (counters.js, summary.js and layout.js)
            
   v0.9.6 (29/Apr/21)
        'Version number'
            - adjust number to 0.9.6 (PlayerViewControl.xml and mod.json)
        'Pause Overlay'
            - adjusted the Pause Overlay for active players (PauseOverlay.xml and styles.xml)
            - added PauseOverlay.js file to the mod, so that the "resumeMessage" is alway present when the game is paused, it contains the explanation for the column headers in the overlay
        'NotificationPanel'
            - with the larger "StatsOverlay" comes a problem, the notifaction in centered in the middle and conflicts with the Overlay, I moved it above the Minimap and increased the font size a bit (TimeNotificationOverlay.xml and styles.xml)
        'MiniMap'
            - applied -modulate 85,100,100  minimap-score.png
            - applied -modulate 80,100,100 to minimap-idle.png, minimap-idle-disabled.png, minimap-diplomacy-on.png and minimap-diplomacy-off.png, changed name of the idle file button and set it correctly in MiniMap.xml
            - applied -modulate 150,100,100 to create highlighte buttons for idle diplomacy on/off minimap-idle-highlight.png, minimap-diplomacy-off-highlight.png and minimap-diplomacy-on-highlight.png
        'Cursors'
            - I changed the metal icon in the top panel and had to change the cursors for gathering metal as well, both come from the Delenda Est mod (action-gather-ore.png and action-return-metal.png)
        'Top Panel'
            - increased font size for the timer (global.xml)
            - adjusted size, color and position of counters (counters.xml and style.xml), since the style for Resources in the Top panel is "resourceText", it is also used for the Barter and trade in the HUD and in the "Bart&Trade" menu, to circumvent it, I just added a new style in styles.xml "resourceTextCounter", which is only used for the top panel resources (Counters.xml)
            - color of pop counter needs also be adjusted in CounterPopulation.js
            - color of the gathers in the resources and pop counter are set to the player color (CounterResource.js and CounterPopulation.js)
            - the Pop counter now also displays the popCap or popMax whatever you want to call it (CounterPopulation.js)
            - added new metal resource icon from Delenda Est mod (metal.png and metal_small.png)
            - removed the "NROC" caption and move the version number below the newbie rush logo (PlayerViewControl.xml)
            - adjusted the logo, made it to fit the version number below it newbie_rush.png
            - adjusted the dropdown font size for GameSpeedControl.xml
            - colored the entire name for "choose player to follow" (PlayerViewControl.js), increased the font size and the length of the dropdown (PlayerViewControl.xml)
            - adjusted GamespeedButton postion (GameSpeedButton.xml)
        'Stats Overlay'
            - adjusted the yellow and red color for max/min number in all three overlays (very minor change, yellow is a bit darker, red looks the same)
            - adjusted the size of the overlay and removed all percentages from "computeSize", now the overlay is visible even in a small 1024x768 window (nroc_basicOverlay.js, nroc_statsOverlay.js and nroc_unitsOverlay.js)
            - added a little color indicator at the end of the columns for nroc_statsOverlay.js and nroc_unitsOverlay.js
            - when a player resigns he vanishes from the overlays, if you select him via "Observer dropdown" the Name, Rating and Civ is present but the rest is replaced with "[Looser]" (nroc_basicOverlay.js)
            - added "trainingBlocked" to the GuiInterface~nroc.js file, blinking was iimplemented for the popLimit number, but the number no longer highlights max/min??(see nroc_basicOverlay.js)
            - i moved "PRD" also in the "UnitsOverlay"
        'DevOverlay'
            - increased the font size (styles.xml)
        'Hero Portraits'
            - changed the max number of portraits to 15 from 21 (PanelEntities.xml)
        'Actor'
            - increased the size of the "Garrison Flag" on buildings by a factor of two. Import both files into Blender scale it up and export it. (garrison_flag.dae and garrison_flag_idle.dae)
            - chieck are 50% bigger, the mesh file is chicken.dae and the 8xanimations are in art/animation/quadraped, also the skelton file was Armature.xml added
            - added the projectile_bolt_med.dae file but increased the z-size by two, x and y size by four now all bolt shooters have a larger projectile
            - added weap_arrow_front.dae for larger arrows, increased the mesh via blender by x and y axis and slightly with the z axis. now they are bit longer and thicker
            - added sling_projectile.dae to make Slinger projectiles bigger
            - added weap_javelin_shaft_projectile_a.dae, weap_javelin_shaft_projectile_b.dae and weap_javelin_shaft_projectile_c.dae for larger javelineer projectiles also increased the size by 2x via blender
            -added rock_flaming.xml and changed the mesh file to projectile_stone_med.dae and included the 2x bigger mesh version of projectile_stone_med.dae as well
            - to make the files also show up when running the pyromod command, I have to add the skelton file, with @Stan's GithUb python script it is easy: SixWheeler.xml, Cubo.001.xml, Esfera_001.001.xml, Javelin_stave_projectile_a.xml, Javelin_stave_projectile_b.xml, Javelin_stave_projectile_c.xml, Sphere01.xml and weap_arrow_front_007.xml
            - GOOD TO KNOW, by changing the weap_arrow_front.dae this also changes the size on defense buildings e.g. CivicCenter, Fortress, defense tower and so on.

   v0.9.5 (19/Apr/21)
        'Version number'
            - adjust number to 0.9.5 (PlayerViewControl.xml and mod.json)
        'Color'
            - changed the color in MenuButton.xml, nroc_unitsOverlay.xml, TopPanel.xml, nroc_statsOverlay.xml, nroc_basicOverlay.xml, nroc_unitsOverlay.xml and sprites.xml to a dark black ( 	sprite="color: 0 0 0 250") so the ntire UI has a black background, also changed the minimap art file it is now nicely black colored (minimap_circle_modern.png)
            - adjusted player color from prurple to light purple (Player~nroc.js) 
        'Top Panel'
            - Counters have be brought back (TopPanel.js) and are viewable when playing
            - NewbieRush logo and NROC version number are turned off while playing and truned on while watching (PlayerViewControl.js)
            - adjusted the gamespeed control so, that it will display on top the stats overlay (GameSpeedControl.xml z=200), this position should be adjusted i a later version correctly, for the moment it is okay)
        'Panel'
            - adjusted the sprites in the bottom left corner and top right corner of the "Left Bottom Panel" (sprites.xml)
        'MiniMap'
            - added a new button to trigger the "Overlay"
            - I applied  -modulate 150,100,100 via ImageMagick for creating the image when hovering over the button (minimap-score-highlight.png)
            - also added a clicking sound to it (MiniMap.xml)
        'Overlay'
            - increased the size of the player name by 2 charachters
            - changed the name of a function, maybe this fixes the hosting problem (need to test it)
            - now there are three overlay; (1) basicOverlay; (2) statsOverlay and (3) unitsOverlay, which can be toggled on/off (see nroc/gui/session/objectives/)
            - added new hotky to flip between statsOverlay and unitsOverlay with "Shift+S" (hotkey was specified in nroc_unitsOverlay.xml and nroc_statsOverlay.xml file and the function to trigger it sits in nroc_statsOverlay.js), also added it to the launch, when starting the mod for the first time (mainmenu~nroc.js and default_config.json)
            - added a new colum for FemaleCitizen, popLimit, Traders, Healers, Ranged and Melee
            - "Sie" now only contains Siege units
            - "Ele" only War elephnats (no worker elephant and no archer elephant) 
        'Pause Overlay'
            - made the background a bit darker (sprites.xml)
            - adjusted the color of the box (styles.xml)
            - increased the box size and added "PopLimit" (PauseOverlay.xml)
        'Actors'
            - replaced the "projectile" and "loading-projectile" for props in those actor files: hellenes/siege_lithobolos_med.xml, ptolemies/siege_lithobolos_med.xml, siege_ballista_med.xml and siege_lithobolos_med.xml
            - since the adjustmenst for bigger projectiles was made in the actor files, therefore I deleted the stone_projectile_med.xml, stone_ammo_med.xml and tower_artillery_projectile.xml files
            
   v0.9.4 (15/Apr/21)
        'Version number'
            - adjust version. number to 0.9.4 (PlayerViewControl.xml and mod.json)
        'Top Panel'
            - adjusted the GamespeedControl slightly to the right, it reached into the StatsOverlay and reduced the font size (GameSpeedControl.xml)
            - deleted the counterManager and civIcon from TopPanel.js file, now they will no longer be displayed at all
            - made sure the NROC verson number is always visible
            via PlayerViewControl.js (this.observerText.hidden = false;)
            - adjusted the newbie_rush.png slightly (PlayerViewControl.xml)
            - turned off the clickable button from the civemblem via civIconOverlay (styles.xml)
        'Hero Portraits'
            - increased the size slightly and moved it up a bit (PanelEntities.xml)
        'Player Colors'
            - slightly adjusted the "GetColor" function to make the violet color a bit brighter, but the "GetDisplayedColor" stays the same, so I get nice colors on the minimap and a good readable violet name on the stats overlay
        'Chat Notifications'
            - removed all "." and "!" from the messages, I find them unuseful (ChatMessageFormatSimulation.js)
        'Stats Overlay'
            - it sits now nicely in the top left corner after adjusting it in the nrocstatsOverlay.js file, the solution was adjusting "computeSize" in there
            - added new Champions "Cha" column (GuiInterface~nroc.js and nrocstatsOverlay.js)
            - shortended the civ names to 3 characters and all upper case (Mauryas are MRY, everyone else just uses his first 3 letters. (nrocstatsOverlay.js)
            - split the Rating and the name (nrocstatsOverlay.js)
        'Compatibility'
            - fixed a problem with hosting and othrs joing in whithout having the mod (gamesetup~nroc.js)
        'Summary'
            - increased the font size from 20 to 22 for the Total number in Team matches 
        'Pause Overlay'
            - added "Cha" and "Rtng" explaination to the overlay (PauseOverlay.xml) added "Alpha XXIV" in there as well
        'Actors'
            - increased the size of stone projectiles for siege catapults (stone_projectile_med.xml, stone_ammo_med.xml and tower_artillery_projectile.xml)
            - increased the size of projectiles for Bolt shooters (bolt_projectile_med.xml), some units actors had to be edited, because they used a diffrent file (props/units/weapons/arrow_front.xml) which was also used by archers, to avoid that archers have now huge arrows I changed those files (siege_lithobolos_light.xml, siege_polybolos.xml and siege_scorpio.xml)
            
            
   v0.9.3 (6/Apr/21)
        'Top Panel'
            - adjust version. number to 0.9.3 and changed it to simply "NROC Mod 0.9.3", (PlayerViewControl.xml and mod.json)
            - adjusted the Gamespeed slightly to the right, it reached into the StatsOverlay (GameSpeedControl.xml, GameSpeedButton.xml and global.xml)
            - GameSpeedButton is now always visible (GameSpeedButton.js) and the GameSpeedControl dropdown has been hidden for Multiplayer Games (GameSpeedControl.js)
        'Summary'
            - Scaled up the entire screen see gui/summary, those files in their is all that it takes to make the 'Summary'larger
        'Stats Overlay'
            - the unit "Trumpeter" was not counted correctly, it resulted in a negative number, it has been fixed (GuiInterface~nroc.js)
        'Chat Notification'
            - Timestamps for players phasing up and completing a phase are completely colored, to better differiante them (ChatMessageFormatSimulation.js)
            - Some Civs (e.g. Spartans) had their specific phase names shown (e.g. K??mopolis), this has been removed it only shows "Town Phase" now (ChatMessageFormatSimulation.js)
            - Background has been changed to dark (styles.xml)
        'Territory Borders'
            - increasd the thickness from 0.85 to 1 (territorymanager.xml)
            
    v0.9.2 (02/Apr/21)
        'Top Panel'
            - adjust version. number to 0.9.2 (PlayerViewControl.xml and mod.json)
        'Mainmenu'
            - "Game Lobby", "Replays", "Mod Selection" and "Options" have their own buttons, everything else has been moved to "Rest" and "Single Player".
        'Hotkey'
            - changes to camera.xml and misc.xml have been reverted back, when pressing "Alt+G" it only turned off the "silhouettes" and not the GUI
        'Quit Confirmation'
            - added a 3rd option, when quitting the game "Skip Summary" (QuitConfirmation.js, QuitConfirmationReplay.js and function in session~nroc.js with XmppClient stops when connected via Multiplayer)
        'Pause Overlay'
            - added description of column titles to the 'PauseOverlay' added some text (PauseOverlay.xml and styles.xml)
        'Hero Portraits'
            - Reduced the size slightly, they were just too big (PanelEntities.xml)
        'Chat Notification'
            - Increased the number of chat lines from 4 to 5 due to the reduced size of the 'Hero Portraits' and thus more space available. (session.xml)
        'Stats Overlay'
            - new "PRD" column which lists all the units that are curerntly produced.
            - The Population column now only includes those actually in the field. No more production units. Added a new column "Support" that lists all "Worker Elephants", "Fishing Boats", "Merchants", "Merchant Ships", "Citizen Women" and "Healers". The "Siege" column is the same but contains all "Warships" and "War Elephants" as well. Removed the "Elephants" column. The "War Elephants" are counted under "Siege", the "Work Elephant" (Mauryas) is counted under "Support" and the "Elephant Archer" (Mauryas) is counted under "Cavalry". The three columns "Support", "Cavalry" and "Infantry" should always add up to the "Population" column at any time during the game, as long as there are no "Siege" units on the field. This is because some "Siege" units are counted 2x or 3x for the "Population" column and always only 1x for the "Siege" column.
            - There is still a problem with the "Hero" count, I wrote detailed description in the GuiInterface file, but will not bother to pursue this issue and just hope nobody notices it. Right now, if your hero is a "Cavalary" and has a melee ability (e.g. swordsman) they are added to the "cav" with +1. Reducing it is possible, but cuases a problem with heros that are "Infantry and e.g "Swordsman" making it -1 for them. Just a stupid problem to solve, nobody cares anyway.
            (GuiInterface~nroc.js and nroc~statsOverlay.js)
            
    v0.9.1 (28/Mar/21)
        'Top Panel'
            - adjust version number to 0.9.1 (PlayerViewControl.xml and mod.json)
        'Stats Overlay'
            - adjusted the pink color slightly from '"b": 0.6' to '"b": 0.8' to make it stand out a bit more against the red color (Player~nroc.js)
            - changed "Kill" to "Kil" and "Deth" to "Dth"
            - included a new cloumn called "Civ"       
        'Hotkey'
            - added a new Hotkey to quickly go to "Quit confirmation" dialog (misc.xml defines the hotkey and  selection_panels_helpers.js includes the function, hotkey string was addded to default.config.json and explained in mainmenu~nroc.js)
            - The files camera.xml and misc.xml have been renamed to camera~nroc.xml and misc~nroc.xml. The reason is to reduce file size and see what I did in those files more easily, in those two cases, I just added a hotkey (explained in wiki/ModdingGuiAndSimulation).
        'Compatibility'
            - Got rid off some erros, from the AutoCiv mod, by renaming functions from 'autociv...' to 'nroc...'
            - You still need to enable the NROC mod after the AutoCiv mod and need to make adjustments in the GUI options panel ('stats overlay', 'player overlay', 'chat panel size change' and 'chat panel font change' need to be disabled) Everything else can be adjusted to your liking and the AutoCiv mod can always be used with the NROC mod.
        'Chat notification'
            - added timestamps for players phasing up and completing a phase (ChatMessageFormatSimulation.js)
            - moved chats a bit up and reduced the number of chats visible to 4, reason is because of control groups intfering and make the timestamps unreadable (session.xml)
        'HUD'
            - changed the sprites.xml to make it black like the 'Top Panel'
        'Options'
            - restored the 3 choices in the "Game Session" tab (options.json)
            
    v0.9 (23/Mar/21)
        'Top Panel'
            - adjust version number to 0.9 (PlayerViewControl.xml and mod.json)
            - move the Gametime and speed multiplier  to the left (global.xml, GameSpeedButton.xml, GameSpeedControl.xml)
            - moved 'Follow Player' button to the right side and remove the text (button is enough) (FollowPlayer.xml)
        'Stats Overlay'
            - changed all colors to be more vivid;
            - @Sayyan (24/Jul/21 Minimap Colours)https://wildfiregames.com/forum/topic/14991-minimap-colours/; 
            - @Dakara (11/May/21 - Dream of gamers) https://wildfiregames.com/forum/topic/26837-dream-of-gamer-16-players-game/?do=findComment&comment=427862;
            - https://en.wikipedia.org/wiki/List_of_colors_(compact)

            - K/L ratio added, avoiding 'NaN' value by adding >Number((state.killDeathRatio).toFixed(1)) || 0,< 
            and avoiding 'Infinity' via adding a function and a variable to the statsoverlay.js file 
        'HUD'
            - Slightly larger icons in the center for multiple selections
        'Chat Notification'
            - increased height of chat message lines
        'Hotkey'
            - added a nice Hotkey to access the view of a unit, sky should be seen, if not delete (showsky = "fasle") from your user.cfg file (camera.xml and selection_panels_helpers.js)
            - hotkey folder added nroc_data and and linked to the mainmenu~nroc.js file, will add the hotkey to the user.cfg automatically on Starting up the app
            - Silhouettes are linked to "Alt+G" now
        'Fruits/ Metal'
            - Fruits are more vivid and easier to see
            - Metal mines h ave been implemented, looks better now
        'Options'
            - adjusted the notifications about phase updates from 3 diffrent options to just two (Hide and Show) ChatMessageFormatSimulation.js / options.json
            
    v0.8 (21/Mar/21)
        'Hero Portraits'
            - changed the position because of 'Stats Overlay'
        'Stats Overlay'
            - moved to the left side, but not a workable solution, because it only works for 1920 widths
            - since it is a custom made mod for you, we might try to figure out the best position
        'Chat Notification'
            - moved the chats down a bit, because of the 'Stats Overlay' (session.xml)
        'Top Panel'
            - changed the font for "Follow Player" to "mono-stroke-12"
            - added a new png file logo for "NewbieRush" in the top left corner with name of the mod and version number 0.8
        'Objectives'
            - making the font slightly bigger (ObjectivesDialog.xml)
            
    v0.7 (21/Mar/21)
        'Mod Selection'
            - updated the version number to 0.7.0
        'Top Panel'
            - added a "newbie-rush.png" logo to PlayerViewControl.xml
        'Hotkey'
            - pressing "Alt+G" now also hides the 'Game Time' (OverlayCounterElapsedTime.js)
    
    v0.6 (21/Mar/21)
        'Stats Overlay'
            - changed 'Siege' to 'Sie' and 'Eleph' to 'Ele'
        'Chat Notification'
            - added a nice shader, so text can be read more easily
        'Game Time'
            - moved the GameSpeedButton and GameSpeedControl to the GameTime 
            - changed the font to mono-stroke-14
        'Top Panel'
            - made it more dark and changed the font
            - changed "Observer Mode" in the left top corner to "Newbie Rush  Alpha 24: X??ay??r????" (font mono-stroke-18)
    
    v0.5 (20/Mar/21)
        'Stats Overlay'
            - added "Eleph" and "Lost"
            
    v0.4 (20/Mar/21)
        'Stats Overlay'
            - deleting the "Tech" column
            
    v0.3 (19/Mar/21)
        changed the name from 'mysticjim' to 'NROC' (Newbie Rush Observer & Commentary Mod)
        'Stats Overlay'
            - Changed the color to solid black with a little be of opacity
            - Changing the color of the grey player to 'bright rose'

        'Game Time'
            - changed the font from 'mono-stroke-16' to 'sans-bold-18'
        'Chat Notification'
            - increased the font size from 'sans-bold-stroke-14' to?? 'sans-bold-20''
    
    v0.2 (19/Mar/21)
        'Stats Overlay' 
            - I changed the position to the top right for the 'Stats Overlay', I tried to dock it like for the minimap, but I am not succeeding so far. It works good for 1920x1200, but if the display size is smaller it reaches into the top panel (I need to figure out how to dock it, like @badosu did)
            - changed 'T' --> '#' ; 'P' --> '??' ; 'Tec --> 'Tech' and 'Kil' --> 'Kill'.
            - Charackter for player names increased to 16??
            - increased text font from 14 to 16
            - changed color to Grey Shader (this is so far
            - the best option to read all 8 names, if you don't like it we can always revert to black)
            - removed that rectangle in the bottom right corner (playersOverlay)
        'Game Time Overlay'
            - I changed the position of the "Game time overlay" to the center in the top panel.
            - I removed the "FPS function" (Alt+F) , 'Ceasefire time function' and "Real time function" (ALT+T).
            - The only time that is displayed now is the GameTime (F12)
            
    v0.1 (18/Mar/21)
        'Stats Overlay'
            - added
        'MiniMap'
            - made bigger 

# Miscellaneous
    Installation:
        Download the pyromod file: (Should work on Windows/ Linux and macOS) 
        - Either double click??or
        - Drag and drop the file over the 0 A.D. app icon or
        - Right click and the pyromod file and open with??the 0 A.D. app 
        Go to 'Settings' --> 'Mod Selection' and enable the mod.
        
    Compatibility, successfully tested for the following mods in A25:
        - none tested so far

        
    Tools
        - 0 A.D. A24b including 'Atlas', CotEditor (text editor), Terminal,??ImageMagick
        - Patience, Perseverance and Curiosity
        - Forum threads (e.g.??How to modify 0 A.D.?)??and trac documentation (e.g.??0 A.D. Mod Layout,??0 A.D. Modding Guide, ModdingResources, ModdingGuiAndSimulation)
         - Using a small existing mod is a good way to start modding the game. 
    
    Why the name boonGUI?
        - Obviously I needed a name and ???Langbart_visibility' wasn't enough for me, but instead of just making up a word, I definitely wanted to include something so people would automatically know what kind of mod it was, so GUI was in and boon was later found via dictionary.
        
#Future ideas:
        - Eco Idle Time  (see image below), it tells you how much time is wasted by villagers just standing around
        - sorted 'Total Score'  list maybe I could just use the lobby layout (left side) for this, list all the player names and add the score to it.
        - add a spectator icon
        - add a Phase icon in the "TopPanel" and maybe some background color
        - When a player "moves up a phase and completes a phase" make the message clickable, so that you are transported directly to the person's CC.
        - change the "Diplomacy" and "Barter&Trade" panel, make it sexy and big
        - add a crown or some particles to the hero, to make him more visible
        - a play, fast forward and pause button for speed control
        - adjust barter&trade to have 75% at metal and 25% at stone
        - Hover over the "rT" (researched Tech) column should display all researched Techs by player with icon
        - adjust hero portraits location based on how many players or find a better location
        - add the "Replays" button the lobby page
        - make small bushes around the CC more noticeable (@Carid)

        - When you pause the game, you should be able to pause the background music or have hotkey mute button (e.g. I am in the lobby but I want to kill the music quickly, because I want to watch a video in my browser) See D3433.
        - Adding some options to turn off features (gui/options/options.json D2936)
        - Add the ability to see thumbnails in the mod selection overview. Factorio style, see #6053.
        - Add some speed hotkey, to increase speed mulitplier
        - Make changes to the loading screen, bigger and different images, do it like you think it should be (D1730)
        https://wildfiregames.com/forum/topic/25204-improving-the-loading-screen/
        I would like to have different tips, e.g how is the total/ military/ economic score calculated; maybe advice with UDP problem 
        turn off formations via right click
        include GIFS rather than just png files
        - Show biomes in map preview #6017
        - Make Summary screen scalable #5002 
        - add trivia facts & solutions for user problems e.g. udp port (see at zotero) at. the loading page
        - add some useful FAQ advices e.g. right click to disbale formations
        - add a hotkey that brings you home to your CC, Just press "H"
        - change hotkey for 'Main Menu' to "ESC"
        - add avialble housing https://github.com/andy5995/show-available-housing
        - add small rings around the berry bushes, https://wildfiregames.com/forum/topic/37668-option-to-enable-color-markers-for-units/?do=findComment&comment=421802
        - add the timeout idea https://wildfiregames.com/forum/topic/37674-feature-timeout-for-the-duration-of-a-game-20min-30min-40min-50min-60min-70min-80min
        - add wager /deposit points before entering a game in the lobby https://wildfiregames.com/forum/topic/36907-player-dont-want-lose-rating-against-very-low-rated-players-they-cheat
        - make the "Delete" button without conformitaion to kill units
        - I like the idea of "Taunts", send someone "42" and he sees and hears a message e.g "I need wood" or "On my signal, unleash hell" (more taunts can be found here https://wildfiregames.com/forum/topic/1224-in-game-taunts/ and https://ageofempires.fandom.com/wiki/Taunts#Community_taunts); some useful software for Audio can be found here https://alternativeto.net/software/forvo/
        https://freesound.org/browse/tags/game/
        
        
        
#Some TO-DO stuff, things that work but could be improved:
(1) Splitting the name and rating works in multiplayer mode, in single player mode it will not work for names that contain more than 2 words, e.g. "Pica F12" would give the name Pica and the rank would be 12
Either turn off the column when playing in SP mode or extract only what is in the parentheses and when there is no Parentheses then display nothing
(2) The blinking of the pop counter is not in sync with the "Overlay" popLimit, this might be caused by the tick period in the boongui_basicOverlay.js.
(3) The empty circle in the StatsOverlay remains even if you are the last of your team and have not researched the "Cartography" tech, because it counts also the "defeated" mutual allies, which it should not.
(4) The way I filter out "AutoResearchedTechs" from "researchedTechs" should be made better (GuiInterface~boongui.js).
(5) Observer mode now shows the map name and an icon, the icon is the same as the one for the "Objectives" button, make it clickable and only show one of the buttons. 
        
        