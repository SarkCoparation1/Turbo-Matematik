class TurboMatematik {
    getInfo() {
        return {
            id: 'turbomatematik',
            name: 'Turbo Matematik',
            color1: '#0afaff',
            color2: '#600303',
            blocks: [
                {
                    opcode: 'topla',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Topla [A] + [B] + [C]',

                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        },

                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },

                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3
                        }
                    }
                },

                {
                    opcode: 'cikart',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Çıkart [A] - [B] - [C]',

                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },

                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 9
                        },

                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3
                        }
                    }
                },

                {
                    opcode: 'carp',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Çarp [A] * [B] * [C]',

                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 11
                        },

                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3
                        },

                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 4
                        }
                    }
                },

                {
                    opcode: 'bol',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Böl [A] / [B] / [C]',

                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 4
                        },

                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 7
                        },

                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },

                {
                    opcode: 'kareal',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Kare Al [A]',

                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },

                {
                    opcode: 'kupal',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Küp Al [A]',

                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                }
            ]
        };
    }

    topla(args) {
        return args.A + args.B + args.C;
    }

    cikart(args) {
        return args.A - args.B - args.C;
    }

    carp(args) {
        return args.A * args.B * args.C;
    }

    bol(args) {
        if (args.B === 0 || args.C === 0) {
            return 0;
        }

        else if (args.A === 0) {
            return 0;
        }

        else {
            return args.A / args.B / args.C;
        }
    }

    kareal(args) {
        return args.A ** 2;
    }

    kupal(args) {
        return args.A ** 3;
    }
}

Scratch.extensions.register(new TurboMatematik());