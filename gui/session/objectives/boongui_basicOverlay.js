var g_InfinitySymbol = translate("\u221E");

function formatStatValue(values)
{
	if (typeof values != "object")
		return values === Infinity ? g_InfinitySymbol : values;
	return ret;
}

function limitKDRatio(num)
{
        if (num < 10) {
            return Number(num.toFixed(1))
        }
        if (num >= 10) {
            return Math.floor(num)
        }
}

BoonGUIControls.basicOverlay = class
{
    boongui_basicOverlay = Engine.GetGUIObjectByName("boongui_basicOverlay")
    preStats = {
        "   Player": state => state.name.split(' ')[0], // Player name
        " Rtng": state => state.name.split(' ').slice(1).join(' ').replace(/\D/g,''), // Player Rating, it does not work for single players with a second name containg a number e.g. "Picus F18", it would display "18" instead of nothing.
        " Civ": state => this.civs[state.civ]
    }
    teamNumber = {
        " #": state => state.team != -1 ? `${state.team + 1}` : "", // Team number  
    }    
    currentPhaseIcon = {
        "   ": state => this.phases[state.phase] ?? 0, // Don't remove the '?? 0' it is needed for GAIA
    }
    stats = {
        " rT": state => state.researchedTechsCount,
        "   P": state => state.popCount,
        "O": state => "/",
    }
    blinky = { 
        "P  ": state =>state.popLimit,
    }
    moreStats = {
        " SUP": state => state.classCounts_Support,
        "|": state => " ",
        "ARMY": state => (state.classCounts_Soldier + state.classCounts_Siege + state.classCounts_Warship),
        " Inf": state => state.classCounts_Infantry,
        " Cav": state => state.classCounts_Cavalry,
        " Sie": state => (state.classCounts_Siege + state.classCounts_AfricanElephant + state.classCounts_IndianElephant),
        "   Food": state => Math.round(state.resourceCounts["food"]),
        "   Wood": state => Math.round(state.resourceCounts["wood"]),
        "  Stone": state => Math.round(state.resourceCounts["stone"]),
        "  Metal": state => Math.round(state.resourceCounts["metal"]),
        "  Kil": state => state.enemyUnitsKilledTotal ?? 0,
        " Dth": state => state.unitsLostTotal ?? 0,
        " K/D": state => formatStatValue(limitKDRatio(state.enemyUnitsKilledTotal / state.unitsLostTotal) || 0),
    }
    cartographyCircle = {
        "  ": state => "●", // Player color, full circle when cartography has been researched or without any mutual allies.
    }
    widths = {} // Will be filled on the constructor
    civs = {"gaia": "GAI", "athen": "ATH", "brit": "BRI", "cart": "CAR", "gaul": "GAU", "iber": "IBE", "kush": "KUS", "mace": "MAC", "maur":"MRY", "pers":"PER", "ptol":"PTO", "rome": "ROM", "sele": "SEL", "spart": "SPA"}
    phases = { "city": 3, "village":1, "town":2 }
    tickPeriod = 15
    textFont = "mono-stroke-14"
    configKey_visible = "boongui.session.basicOverlay.visible"

    constructor()
    {
        this.boongui_basicOverlay.hidden = Engine.ConfigDB_GetValue("user", this.configKey_visible) == "false"
		this.boongui_basicOverlay.onPress = this.toggle.bind(this);
                    
        for (let name in this.preStats)
            this.widths[name] = name.length

        for (let name in this.teamNumber)
            this.widths[name] = name.length      
      
        for (let name in this.currentPhaseIcon)
            this.widths[name] = name.length
            
        for (let name in this.stats)
            this.widths[name] = name.length

        for (let name in this.blinky)
            this.widths[name] = name.length

        for (let name in this.moreStats)
            this.widths[name] = name.length
            
        for (let name in this.cartographyCircle)
            this.widths[name] = name.length

        this.boongui_basicOverlay.onTick = this.onTick.bind(this)
        this.update()
    }

    toggle()
    {
		this.boongui_basicOverlay.hidden = !this.boongui_basicOverlay.hidden;
    }

    onTick()
    {
        if (this.boongui_basicOverlay.hidden)
            return

        if (g_LastTickTime % this.tickPeriod == 0)
            this.update()
    }

    maxWithIndex(list)
    {
        let index = 0
        let value = list[index]
        for (let i = list.length-1;i>=0 ;i--) if (list[i] > value)
        {
            value = list[i]
            index = i
        }
        return [value, index]
    }
    minWithIndex(list)
    {
        let index = 0
        let value = list[index]
        for (let i = list.length-1;i>=0 ;i--) if (list[i] < value)
        {
            value = list[i]
            index = i
        }
        return [value, index]
    }

    playerColor(state)
    {
        return rgbToGuiColor(g_DiplomacyColors.displayedPlayerColors[state.playerNumber])
    }

    // Switching to padEnd does not look much better, leave it at padStart for now.
    leftPadTrunc(text, size)
    {
        return text.substring(0, size).padStart(size)
    }

    computeSize(numerOfRows, rowLength)
    {
        return `0 36 11+${10 * rowLength} 36+${20 * numerOfRows + 5}`
    }

    update()
    {
        Engine.ProfileStart("BoonGUIControls.basicOverlay:update")
        const playerStates = Engine.GuiInterfaceCall("boongui_GetOverlay").players?.filter((state, index, playerStates) =>
        {
            if (index == 0 && index != g_ViewedPlayer) // Gaia index 0
                return false
             if (state.state == "defeated" && index != g_ViewedPlayer)
                return false

            state.playerNumber = index
            if (g_IsObserver || !g_Players[g_ViewedPlayer] || index == g_ViewedPlayer)
                return true
            if (!playerStates[g_ViewedPlayer].hasSharedLos || !g_Players[g_ViewedPlayer].isMutualAlly[index])
                return false
            return true
        })

        if (!playerStates)
            return

        let header = Object.keys(this.widths).
            map(row => this.leftPadTrunc(row, this.widths[row])).
            join("")
        const rowLength = header.length
        header = setStringTags(header, { "color": "255 255 255 165" })
        header += "\n"
        const values1 = {}
        for (let stat of Object.keys(this.stats))
        {
            let list = playerStates.map(this.stats[stat])
            values1[stat] = {
                "list": list,
                "min": this.minWithIndex(list),
                "max": this.maxWithIndex(list),
            }
        }
        const values2 = {}
        for (let moreStat of Object.keys(this.moreStats))
        {
            let list = playerStates.map(this.moreStats[moreStat])
            values2[moreStat] = {
                "list": list,
                "min": this.minWithIndex(list),
                "max": this.maxWithIndex(list),
            }
        }

        const entries = playerStates.map((state, index) =>
        {       
            const preStats = Object.keys(this.preStats).
                map(row => this.leftPadTrunc(this.preStats[row](state), this.widths[row])).
                join("")
                
            const teamNumber = Object.keys(this.teamNumber).
                map(row => this.leftPadTrunc(this.teamNumber[row](state).toString(), this.widths[row])).
                join("")
                
            const currentPhaseIcon = Object.keys(this.currentPhaseIcon).
                map(row => this.leftPadTrunc(this.currentPhaseIcon[row](state).toString(), this.widths[row])).
                join("")

            const stats = Object.keys(values1).map(stat =>
            {
                let text = this.leftPadTrunc(values1[stat].list[index].toString(), this.widths[stat])
                switch (index)
                {
                    case values1[stat].max[1]:
                        return setStringTags(text, { "color": "200 220 0" })
                    case values1[stat].min[1]:
                        return setStringTags(text, { "color": "255 113 113" })
                    default:
                        return text
                }
            }).join("")
            
            const blinky = Object.keys(this.blinky).
                 map(row => this.leftPadTrunc(this.blinky[row](state).toString(), this.widths[row])).
                join("")
                
            const moreStats = Object.keys(values2).map(moreStat =>
            {
                let text = this.leftPadTrunc(values2[moreStat].list[index].toString(), this.widths[moreStat])
                switch (index)
                {
                    case values2[moreStat].max[1]:
                        return setStringTags(text, { "color": "200 220 0" })
                    case values2[moreStat].min[1]:
                        return setStringTags(text, { "color": "255 113 113" })
                    default:
                        return text
                }
            }).join("")
            const cartographyCircle = Object.keys(this.cartographyCircle).
                map(row => this.leftPadTrunc(this.cartographyCircle[row](state), this.widths[row])).
                join("")
            
            if (state.state == "defeated")
                return setStringTags(preStats + teamNumber + " " + (state.phase == "village"  ? '[icon="icon_village_phase" displace="0 4"]' : (state.phase == "town" ? '[icon="icon_town_phase" displace="0 4"]' : (this.civs[state.civ] == "GAI" ? "  " : '[icon="icon_city_phase" displace="0 4"]'))) + stats + blinky + moreStats + cartographyCircle, { "color": "255 255 255 128" })

// First, some statistics are displayed in the player color, then some icons for the correct civilization phase. GAIA does not get an icon for the phase. Then comes the orange flashing text if the training in one of your buildings is blocked, more stats and finally the cartography circle, which shows with a full circle if you have researched cartography or have no mutual allies.
            return setStringTags(preStats, { "color": this.playerColor(state) }) + teamNumber + " " + (state.phase == "village"  ? '[icon="icon_village_phase" displace="0 4"]' : (state.phase == "town" ? '[icon="icon_town_phase" displace="0 4"]' : (this.civs[state.civ] == "GAI" ? "  " : '[icon="icon_city_phase" displace="0 4"]'))) + stats + coloredText(blinky, state.trainingBlocked && (Date.now() % 1000 < 500) ? CounterPopulation.prototype.PopulationAlertColor : CounterPopulation.prototype.DefaultPopulationColor) + moreStats + setStringTags(((state.hasSharedLos || state.numberAllies == 1) ? cartographyCircle : " ○"), { "color": this.playerColor(state) })


        }).join("\n")

        this.boongui_basicOverlay.caption = ""
        this.boongui_basicOverlay.size = this.computeSize(playerStates.length + 1, rowLength)
        this.boongui_basicOverlay.caption = setStringTags(header + entries, {
            "color": "250 250 250",
            "font": this.textFont
        })
        Engine.ProfileStop()
    }
}
