[{
    "GIT process": [{
        "git init": [{
            "purpose": "initialize a git repository",
            "adds": ".git folder"
        }],
        "git clone ssh_url": [{
            "purpose": "alternate way",
            "ssh_url": "url provided from GitHub",
            "add": ".git folder",
            "add": "remote repository"
        }],
        "Git Structure": [{
            "Working Directory": "contains all the files in the local directory in its current state",
            "Index(staging))": [{
                "Purpose": "add files so that git knows what files are changed",
                "cmd": "git add"
            }],
            "HEAD": [{
                "Purpose": "Tells git the files that are in its final state",
                "cmd": "git commit",
                "": ""
            }],
            "GitHub": [{
                "Purpose": "local repository found in GitHub",
                "cmd": "git push",
                "git clonse": "Git will already know where to push the files to",
                "git init": [{
                    "Description": "Git will need to be told where to push the files to",
                    "cmd": "git remote add origin ssh_url"
                }]
            }]
        }],
    "Pulling":[{"git pull":"Copies everything from the remote repository to your computer"}],
    "Branch":[{"":"",
    "purpose":"Allows developers to create a seperate copy from the master branch",
    "git branch feature_a":"will create a new branch for a seperate developer to work on",
    "git checkout feature_a":"Used to switch to the different branch",
    "git checkout -b feature_a":"This will create a new branch and switch the developer to that branch",
    "git merge feature_a":"Copy the branch back to the master and it will identify any difference that may be found" 
    }],
    "git add . ":"dot means all all the files",
    "git diff":"tells what has changed"
}]