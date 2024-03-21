# find_my_feast
CSCE 482 Capstone Repo

# download android studio and setup an emulator
    download android studio: https://developer.android.com/studio
    go to AVD manager and create a new emulator. select android api 34 ("upside down cake") for the api.
    windows tutorial: https://www.youtube.com/watch?v=MCviSJz-fyY

# set up the development environment: https://reactnative.dev/docs/environment-setup?guide=native&package-manager=yarn
    install chocolatey
    install Node and JDK by opening cmd prompt as admin and running "choco install -y nodejs-lts microsoft-openjdk17"
    set .env variables on windows (covered in the tutorial linked above)

# pull code from repo, open terminal, go to root directory of project
    install all dependencies 
    split terminal
    on first terminal: "yarn start"
    on second terminal: "yarn android"

# here's an example of a working react-native typescript app
https://github.com/alradadi/react-native-typescript-app/tree/master

# github branch management
    workflow should be as follows
            main
             ^
             |
            dev
             ^
             |
     [Feature Branches]
    
    The point of maintaining this structure is to ensure that we have a clean copy "main" for our live deployment environment
    and dev for all feature branches to pull from. As long as modularity in our feature branches is maintained (branches do not stray 
    from what the initial purpose is), we should be okay and not have too many merge conflicts.
