Hooks.once('init', async ()  =>
{
    console.log('FoundryPronouns: Initializing');

    CONFIG.debug.hooks = true;
});

Hooks.once('setup', async () =>
{
    console.log('FoundryPronouns: Setup');
});

Hooks.once('ready', async () =>
{
    console.log('FoundryPronouns: Ready');
});

Hooks.on('renderPlayerList', async (list: PlayerList, html: JQuery<HTMLElement>, options: RenderPlayerListHookOptions) =>
{
    html.find('.player').each((id, player) =>
    {
        player.setAttribute('data-tooltip', 'they/them');
        player.title = "they/them";
        
/*         const pronouns = document.createElement('span');
        pronouns.classList.add('pronouns-player');
        pronouns.innerHTML = "they/them";

        player.append(pronouns); */
    });
});

Hooks.on('getUserContextOptions', async (html: HTMLElement, options: UserContextOption[]) =>
{
    options.push(
        {
            'name': 'Set Pronouns',
            'icon': '<i class="fas fa-genderless"></i>',
            condition: (players: HTMLElement[]) => players[0].dataset.userId == game.userId || game.user.isGM,
            callback: (players: HTMLElement[]) => { console.log(players) },
        }
    );
});

/**
 * When Player Configuration window is opened (Right click player -> Player Configuration)
 */
Hooks.on('renderPlayerConfig', async (config: PlayerConfig, html: JQuery<HTMLElement>, user: User) =>
{
    html.find('[name="avatar"]').parent().html("");
    //html.find('[name="avatar"]').parent().after('<div class="form-group"><label>Player Pronouns</label><input type="text" name="pronouns" value="floof"></div>')
});
