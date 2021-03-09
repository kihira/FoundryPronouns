/**
 * Injects form element into the player configuration application
 */
Hooks.on("renderPlayerConfig", async (playerConfig: PlayerConfig, html: JQuery<HTMLElement>, options: RenderPlayerConfigHookOptions) =>
{
    const pronouns = options.user.getFlag("foundrypronouns", "pronouns") as string;
    html.find('[name="color"]').parent().after(`<div class="form-group"><label>${game.i18n.localize("foundrypronouns.PlayerPronouns")}</label><input type="text" name="pronouns" value="${pronouns}"></div>`)
});

/**
 * Called when the user has made a changed and clicked save
 */
Hooks.on("updateUser", async (user: User, data: {_id: string, avatar?: string, character?: string, pronouns?: string}, arg3: { diff: boolean }, id: string) =>
{
    if (arg3.diff === true && data.pronouns !== undefined)
    {
        user.setFlag("foundrypronouns", "pronouns", data.pronouns);
    }
});

/**
 * Called when the player list should be re-rendered (such as player configuration changed, new login etc)
 */
Hooks.on('renderPlayerList', async (list: PlayerList, html: JQuery<HTMLElement>, options: RenderPlayerListHookOptions) =>
{
    html.find('.player').each((index, player) =>
    {
        const pronouns = options.users[index].getFlag("foundrypronouns", "pronouns") as string;
        if (pronouns === undefined || pronouns === null || pronouns.length === 0)
        {
            return;
        }
        player.setAttribute('data-tooltip', `Player: ${pronouns}`);
        player.title = pronouns;
    });
});

// Hooks.on('getUserContextOptions', async (html: HTMLElement, options: UserContextOption[]) =>
// {
//     options.push(
//         {
//             'name': game.i18n.localize("Pronouns.SetPronouns"),
//             'icon': '<i class="fas fa-genderless"></i>',
//             condition: (players: HTMLElement[]) => players[0].dataset.userId == game.userId || game.user.isGM,
//             callback: (players: HTMLElement[]) => { console.log(players) },
//         }
//     );
// });