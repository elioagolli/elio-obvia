var myWizard = new Wizard({
    id: "wizard",
    stepPath: "attr.step",
    detailsPath: "attr.details",
    components: [
        {
            ctor: Container,
            props: {
                attr: { "step": "Step 1", "details": "Detaje Personale" },
                id: "container_row",
                type: ContainerType.ROW,
                classes: ["row"],
                components: [{
                        ctor: Container,
                        props: {
                            id: "col_container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form_group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Label,
                                            props: {
                                                id: "company-name",
                                                labelType: LabelType.Label,
                                                label: "Emri i kompanise*",
                                            }
                                        },
                                        {
                                            ctor: Container,
                                            props: {
                                                id: "input_field",
                                                type: ContainerType.NONE,
                                                classes: ["input-field"],
                                                components: [{
                                                        ctor: Label,
                                                        props: {
                                                            id: "user",
                                                            labelType: LabelType.i,
                                                            classes: ["fa", "fa-user"],

                                                        }
                                                    },
                                                    {
                                                        ctor: TextInput,
                                                        props: {
                                                            id: "email-input",
                                                            type: TextInputType.EMAIL,
                                                            placeholder: "Emri i kompanise",
                                                            classes: ["form-control"]

                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }]
                        }

                    },
                    {
                        ctor: Container,
                        props: {
                            id: "col-container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form-group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Image,
                                            props: {
                                                id: "elio-image",
                                                alt: "My Image",
                                                src: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924241/8fbb415a2ab2a4de55bb0c8da73c4172--ps.jpg"
                                            }
                                        },
                                        {

                                            ctor: TextInput,
                                            props: {
                                                id: "email-input",
                                                type: TextInputType.EMAIL,
                                                placeholder: "Limiti i debise",
                                                classes: ["form-control"]

                                            }
                                        }
                                    ]
                                }
                            }]
                        }
                    },
                    {
                        ctor: Container,
                        props: {
                            id: "col-container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form-group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Label,
                                            props: {
                                                id: "company-name",
                                                labelType: LabelType.Label,
                                                label: "Gjendja e monedhes vendase",
                                            }
                                        },
                                        {

                                            ctor: TextInput,
                                            props: {
                                                id: "email-input",
                                                type: TextInputType.EMAIL,
                                                placeholder: "Gjendja e monedhes vendase",
                                                classes: ["form-control"]
                                            }

                                        }
                                    ]
                                }
                            }]
                        }

                    }
                ]
            }
        },
        {
            ctor: Container,
            props: {
                attr: { "step": "Step 2", "details": "Te pergjithshme" },
                id: "container_row",
                type: ContainerType.ROW,
                classes: ["row"],
                components: [{
                        ctor: Container,
                        props: {
                            id: "col_container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form_group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Label,
                                            props: {
                                                id: "company-name",
                                                labelType: LabelType.Label,
                                                label: "Emri i kompanise*",
                                            }
                                        },
                                        {
                                            ctor: Container,
                                            props: {
                                                id: "input_field",
                                                type: ContainerType.NONE,
                                                classes: ["input-field"],
                                                components: [{
                                                        ctor: Label,
                                                        props: {
                                                            id: "user",
                                                            labelType: LabelType.i,
                                                            classes: ["fa", "fa-user"],

                                                        }
                                                    },
                                                    {
                                                        ctor: TextInput,
                                                        props: {
                                                            id: "email-input",
                                                            type: TextInputType.EMAIL,
                                                            placeholder: "Emri i kompanise",
                                                            classes: ["form-control"]

                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }]
                        }

                    },
                    {
                        ctor: Container,
                        props: {
                            id: "col-container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form-group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Image,
                                            props: {
                                                id: "elio-image",
                                                alt: "My Image",
                                                src: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924241/8fbb415a2ab2a4de55bb0c8da73c4172--ps.jpg"
                                            }
                                        },
                                        {

                                            ctor: TextInput,
                                            props: {
                                                id: "email-input",
                                                type: TextInputType.EMAIL,
                                                placeholder: "Limiti i debise",
                                                classes: ["form-control"]

                                            }
                                        }
                                    ]
                                }
                            }]
                        }
                    },
                    {
                        ctor: Container,
                        props: {
                            id: "col-container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form-group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Label,
                                            props: {
                                                id: "company-name",
                                                labelType: LabelType.Label,
                                                label: "Gjendja e monedhes vendase",
                                            }
                                        },
                                        {

                                            ctor: TextInput,
                                            props: {
                                                id: "email-input",
                                                type: TextInputType.EMAIL,
                                                placeholder: "Gjendja e monedhes vendase",
                                                classes: ["form-control"]
                                            }

                                        }
                                    ]
                                }
                            }]
                        }

                    }
                ]
            }
        },
        {
            ctor: Container,
            props: {
                attr: {"step": "Step 3", "details": "Kontakt"},
                id: "container-row",
                type: ContainerType.ROW,
                classes: ["row"],
                components: [{
                        ctor: Container,
                        props: {
                            id: "col-container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form-group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Label,
                                            props: {
                                                id: "company-name",
                                                labelType: LabelType.Label,
                                                label: "Monedha/Kursi*",
                                            }
                                        },
                                        {
                                            ctor: Container,
                                            props: {
                                                id: "input-field",
                                                type: ContainerType.NONE,
                                                classes: ["input-field"],
                                                components: [{
                                                        ctor: Label,
                                                        props: {
                                                            id: "user",
                                                            labelType: LabelType.i,
                                                            classes: ["fa", "fa-money"],

                                                        }
                                                    },
                                                    {
                                                        ctor: TextInput,
                                                        props: {
                                                            id: "email-input",
                                                            type: TextInputType.EMAIL,
                                                            placeholder: "eur, usd, all, aus",
                                                            classes: ["form-control"]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }]
                        }

                    },
                    {
                        ctor: Container,
                        props: {
                            id: "col-container",
                            type: ContainerType.COLUMN,
                            classes: ["col-4"],
                            components: [{
                                ctor: Container,
                                props: {
                                    id: "form-group",
                                    type: ContainerType.NONE,
                                    classes: ["form-group"],
                                    components: [{
                                            ctor: Label,
                                            props: {
                                                id: "company-name",
                                                labelType: LabelType.Label,
                                                label: "Ne Date",
                                            }
                                        },
                                        {

                                            ctor: TextInput,
                                            props: {
                                                id: "email-input",
                                                type: TextInputType.EMAIL,
                                                placeholder: "Ne Date",
                                                classes: ["form-control"]

                                            }
                                        }
                                    ]
                                }
                            }]
                        }

                    }

                ]
            }
        }  
    ]
});

myWizard.render().then(function (cmpInstance) {
    $('#root').append(cmpInstance.$el);
});