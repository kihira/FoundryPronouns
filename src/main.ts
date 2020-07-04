Hooks.once('init', async function() 
{
    console.log('FoundryPronouns: Initializing');

    CONFIG.debug.hooks = true;
});

Hooks.once('setup', async function()
{
    console.log('FoundryPronouns: Setup');
});

Hooks.once('ready', async function()
{
    console.log('FoundryPronouns: Ready');
});