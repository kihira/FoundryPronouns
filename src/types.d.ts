interface RenderPlayerListHookOptions 
{
    /**
     * List of all users in the game, whether they are offline or not
     */
    users: User[],
    /**
     * Wheather offline users should be shown in the list
     */
    showOffline: boolean,
    /**
     * Wheather the player list is collapsed or not
     */
    hide: boolean,
}

interface UserContextOption 
{
    /**
     * Name of the option displayed to the user
     */
    name: string,
    /**
     * HTML that should display an icon.
     * eg: <i class="fas fa-transgender-alt"></i>
     */
    icon: string,
    /**
     * Called when determining if this option should be displayed for the current user
     */
    condition: (players: HTMLElement[]) => boolean,
    /**
     * Callback when the option is clicked
     */
    callback: (players: HTMLElement[]) => void,
}