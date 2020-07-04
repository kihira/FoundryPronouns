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

Hooks.once('renderPlayerList', async (list: PlayerList, html: HTMLElement, options: RenderPlayerListHookOptions) =>
{
    
});

Hooks.once('getUserContextOptions', async (html: HTMLElement, options: UserContextOption[]) =>
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
