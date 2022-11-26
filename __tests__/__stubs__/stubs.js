export const items = [
    { id: 1, title: 'FORD', is_done: false, parent_id: 0, project_id: 1 },
    {
        id: 2,
        title: 'MAZDA',
        is_done: false,
        parent_id: 0,
        project_id: 1
    },
    {
        id: 3,
        title: 'VOLVO',
        is_done: false,
        parent_id: 0,
        project_id: 1
    },
    { id: 4, title: 'OPEL', is_done: false, parent_id: 0, project_id: 1 },
    {
        id: 5,
        title: 'Sedan',
        is_done: false,
        parent_id: 1,
        project_id: 1
    },
    {
        id: 6,
        title: 'hetchback',
        is_done: false,
        parent_id: 5,
        project_id: 1
    },
    {
        id: 7,
        title: 'Coupe',
        is_done: false,
        parent_id: 1,
        project_id: 1
    },
    {
        id: 8,
        title: 'Fastback',
        is_done: false,
        parent_id: 1,
        project_id: 1
    },
    {
        id: 9,
        title: 'Sedan',
        is_done: false,
        parent_id: 2,
        project_id: 1
    },
    {
        id: 10,
        title: 'Cabriolet',
        is_done: false,
        parent_id: 6,
        project_id: 1
    },
    {
        id: 11,
        title: 'universal',
        is_done: false,
        parent_id: 3,
        project_id: 1
    },
    {
        id: 12,
        title: 'universal',
        is_done: false,
        parent_id: 4,
        project_id: 1
    },
    {
        id: 13,
        title: 'universal',
        is_done: false,
        parent_id: 0,
        project_id: 1
    },
    {
        id: 14,
        title: 'universal',
        is_done: false,
        parent_id: 0,
        project_id: 1
    },
    {
        id: 15,
        title: 'universal',
        is_done: false,
        parent_id: 10,
        project_id: 1
    },
    {
        id: 16,
        title: 'universal',
        is_done: false,
        parent_id: 6,
        project_id: 1
    },
    {
        id: 17,
        title: 'universal',
        is_done: false,
        parent_id: 16,
        project_id: 1
    }
]

export const validTree = [
    {
        "id": 1,
        "title": "FORD",
        "is_done": false,
        "parent_id": 0,
        "project_id": 1,
        "children": [
            {
                "id": 5,
                "title": "Sedan",
                "is_done": false,
                "parent_id": 1,
                "project_id": 1,
                "children": [
                    {
                        "id": 6,
                        "title": "hetchback",
                        "is_done": false,
                        "parent_id": 5,
                        "project_id": 1,
                        "children": [
                            {
                                "id": 10,
                                "title": "Cabriolet",
                                "is_done": false,
                                "parent_id": 6,
                                "project_id": 1,
                                "children": [
                                    {
                                        "id": 15,
                                        "title": "universal",
                                        "is_done": false,
                                        "parent_id": 10,
                                        "project_id": 1,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": 16,
                                "title": "universal",
                                "is_done": false,
                                "parent_id": 6,
                                "project_id": 1,
                                "children": [
                                    {
                                        "id": 17,
                                        "title": "universal",
                                        "is_done": false,
                                        "parent_id": 16,
                                        "project_id": 1,
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 7,
                "title": "Coupe",
                "is_done": false,
                "parent_id": 1,
                "project_id": 1,
                "children": []
            },
            {
                "id": 8,
                "title": "Fastback",
                "is_done": false,
                "parent_id": 1,
                "project_id": 1,
                "children": []
            }
        ]
    },
    {
        "id": 2,
        "title": "MAZDA",
        "is_done": false,
        "parent_id": 0,
        "project_id": 1,
        "children": [
            {
                "id": 9,
                "title": "Sedan",
                "is_done": false,
                "parent_id": 2,
                "project_id": 1,
                "children": []
            }
        ]
    },
    {
        "id": 3,
        "title": "VOLVO",
        "is_done": false,
        "parent_id": 0,
        "project_id": 1,
        "children": [
            {
                "id": 11,
                "title": "universal",
                "is_done": false,
                "parent_id": 3,
                "project_id": 1,
                "children": []
            }
        ]
    },
    {
        "id": 4,
        "title": "OPEL",
        "is_done": false,
        "parent_id": 0,
        "project_id": 1,
        "children": [
            {
                "id": 12,
                "title": "universal",
                "is_done": false,
                "parent_id": 4,
                "project_id": 1,
                "children": []
            }
        ]
    },
    {
        "id": 13,
        "title": "universal",
        "is_done": false,
        "parent_id": 0,
        "project_id": 1,
        "children": []
    },
    {
        "id": 14,
        "title": "universal",
        "is_done": false,
        "parent_id": 0,
        "project_id": 1,
        "children": []
    }
]