class Task {
    constructor(name, description, startTime, endTime, subtasks=[]) {
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.subtasks = subtasks;
    }
}

class ExecutableTask extends Task {
    constructor(name, description, startTime, endTime, progress=0, subtasks=[],
                isExecuted=false) {
        super(name, description, startTime, endTime, subtasks);

        this.progress = progress;
        this.isExecuted = isExecuted;
    }
}
