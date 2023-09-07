export type ServicesDto = {
    id: number,
    categoryTitle: string,
    subcategories: {
        subcategoryTitle: string,
        services: {
            serviceText: string,
            serviceID: string,
            price: string
        }[]
    }[]
}[]

export interface IServicesView {
    services: ServicesDto,
    idButtonSelection: number,
    handleChoise: Function,
    isChanging: string,
    changingService: Function,
    deleteService: Function,

}

export const data1 = [
    {
        "id": 0,
        "categoryTitle": "Аллергология и иммунология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-аллерголога-иммунолога, доцента кафедры педиатрии и неонатологии ИНФМО, кмн",
                        "serviceID": "КСМ 1000",
                        "price": "1600",
                    }
                ]
            },
            {
                "subcategoryTitle": "Бронхопровакционная проба",
                "services": [
                    {
                        "serviceText": "Бронхопровакционная проба с физической нагрузкой",
                        "serviceID": "КСМ 1001",
                        "price": "1600",
                    },
                    {
                        "serviceText": "Бронхопровакционная проба с метахолином",
                        "serviceID": "КСМ 1002",
                        "price": "1050",
                    },
                    {
                        "serviceText": "Картофель",
                        "serviceID": "КСМ 1005",
                        "price": "1600",
                    }
                ]
            },
            {
                "subcategoryTitle": "Анализы на аллергию",
                "services": [
                    {
                        "serviceText": "Апельсин IgE, F33",
                        "serviceID": "КСМ 1003",
                        "price": "430",
                    },
                    {
                        "serviceText": "Банан IgE, F92",
                        "serviceID": "КСМ 1004",
                        "price": "430",
                    },
                    {
                        "serviceText": "Лимон IgE, F208",
                        "serviceID": "КСМ 1005",
                        "price": "430",
                    },
                    {
                        "serviceText": "Яблоко IgE, F49",
                        "serviceID": "КСМ 1006",
                        "price": "430",
                    },
                    {
                        "serviceText": "Капуста брокколи IgE, F260",
                        "serviceID": "КСМ 1007",
                        "price": "430",
                    },
                    {
                        "serviceText": "Капуста брюссельская IgE, F217",
                        "serviceID": "КСМ 1008",
                        "price": "430",
                    },
                    {
                        "serviceText": "Капуста кочанная IgE, F216",
                        "serviceID": "КСМ 1009",
                        "price": "430",
                    },
                    {
                        "serviceText": "Капуста цветная IgE, F291",
                        "serviceID": "КСМ 1010",
                        "price": "430",
                    },
                    {
                        "serviceText": "Картофель IgE, F35",
                        "serviceID": "КСМ 1011",
                        "price": "430",
                    },
                    {
                        "serviceText": "Морковь IgE, F31",
                        "serviceID": "КСМ 1012",
                        "price": "430",
                    },
                    {
                        "serviceText": "Огурец IgE, F244",
                        "serviceID": "КСМ 1013",
                        "price": "430",
                    },
                    {
                        "serviceText": "Томат IgE, F25",
                        "serviceID": "КСМ 1014",
                        "price": "430",
                    },
                    {
                        "serviceText": "Тыква IgE, F225",
                        "serviceID": "КСМ 1015",
                        "price": "430",
                    },
                    {
                        "serviceText": "Бобы соевые IgE, F14",
                        "serviceID": "КСМ 1016",
                        "price": "430",
                    },
                    {
                        "serviceText": "Баранина IgE, F88",
                        "serviceID": "КСМ 1017",
                        "price": "430",
                    },
                    {
                        "serviceText": "Говядина IgE, F27",
                        "serviceID": "КСМ 1018",
                        "price": "430",


                    },
                    {
                        "serviceText": "Индейка IgE, F284",
                        "serviceID": "КСМ 1019",
                        "price": "430",


                    },
                    {
                        "serviceText": "Куриное мясо IgE, F83",
                        "serviceID": "КСМ 1020",
                        "price": "430",


                    },
                    {
                        "serviceText": "Свинина IgE, F26",
                        "serviceID": "КСМ 1021",
                        "price": "430",


                    },
                    {
                        "serviceText": "Альфа-лактоальбумин IgE, F76",
                        "serviceID": "КСМ 1022",
                        "price": "430",


                    },
                    {
                        "serviceText": "Бета-лактоглобулин IgE, F77",
                        "serviceID": "КСМ 1023",
                        "price": "430",


                    },
                    {
                        "serviceText": "Казеин IgE, F78",
                        "serviceID": "КСМ 1024",
                        "price": "430",


                    },
                    {
                        "serviceText": "Молоко коровье IgE, F2",
                        "serviceID": "КСМ 1025",
                        "price": "430",


                    },
                    {
                        "serviceText": "Треска IgE, F3",
                        "serviceID": "КСМ 1026",
                        "price": "430",


                    },
                    {
                        "serviceText": "Белок яичный IgE, F1",
                        "serviceID": "КСМ 1027",
                        "price": "430",


                    },
                    {
                        "serviceText": "Желток яичный IgE, F75",
                        "serviceID": "КСМ 1028",
                        "price": "430",


                    },
                    {
                        "serviceText": "Овальбумин IgE, F232",
                        "serviceID": "КСМ 1029",
                        "price": "430",


                    },
                    {
                        "serviceText": "Овомукоид IgE, F233",
                        "serviceID": "КСМ 1030",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мука гречневая IgE, F11",
                        "serviceID": "КСМ 1031",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мука кукурузная IgE, F8",
                        "serviceID": "КСМ 1032",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мука овсяная IgE, F7",
                        "serviceID": "КСМ 1033",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мука пшеничная IgE, F4",
                        "serviceID": "КСМ 1034",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мука ржаная IgE, F5",
                        "serviceID": "КСМ 1035",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мука ячменная IgE, F6",
                        "serviceID": "КСМ 1036",
                        "price": "430",


                    },
                    {
                        "serviceText": "Рис IgE, F9",
                        "serviceID": "КСМ 1037",
                        "price": "430",


                    },
                    {
                        "serviceText": "Кошка (эпителий) IgE, El",
                        "serviceID": "КСМ 1038",
                        "price": "430",


                    },
                    {
                        "serviceText": "Кролик (эпителий) IgE, E82",
                        "serviceID": "КСМ 1039",
                        "price": "430",


                    },
                    {
                        "serviceText": "Курица (перо) IgE, E85",
                        "serviceID": "КСМ 1040",
                        "price": "430",


                    },
                    {
                        "serviceText": "Лошадь (перхоть) IgE, E3",
                        "serviceID": "КСМ 1041",
                        "price": "430",


                    },
                    {
                        "serviceText": "Морская свинка (эпителий) IgE, Е6",
                        "serviceID": "КСМ 1042",
                        "price": "430",


                    },
                    {
                        "serviceText": "Попугай волнистый (перо) IgE, E78",
                        "serviceID": "КСМ 1043",
                        "price": "430",


                    },
                    {
                        "serviceText": "Собака (перхоть) IgE, E5",
                        "serviceID": "КСМ 1044",
                        "price": "430",


                    },
                    {
                        "serviceText": "Собака (эпителий) IgE, E2",
                        "serviceID": "КСМ 1045",
                        "price": "430",


                    },
                    {
                        "serviceText": "Утка (перо) IgE, E86",
                        "serviceID": "КСМ 1046",
                        "price": "430",


                    },
                    {
                        "serviceText": "Хомяк (эпителий) IgE, E84",
                        "serviceID": "КСМ 1047",
                        "price": "430",


                    },
                    {
                        "serviceText": "Береза (Betula alba) IgE, T3",
                        "serviceID": "КСМ 1048",
                        "price": "430",


                    },
                    {
                        "serviceText": "Вяз (Ulmus spp) IgE, T8",
                        "serviceID": "КСМ 1049",
                        "price": "430",


                    },
                    {
                        "serviceText": "Граб обыкновенный (Carpinus betulus) IgE, T209",
                        "serviceID": "КСМ 1050",
                        "price": "430",


                    },
                    {
                        "serviceText": "Дуб белый (Quercus alba) IgE. T7",
                        "serviceID": "КСМ 1051",
                        "price": "430",


                    },
                    {
                        "serviceText": "Клен ясенелистный (Acer negundo) IgE, TI",
                        "serviceID": "КСМ 1052",
                        "price": "430",


                    },
                    {
                        "serviceText": "Лещина обыкновенная (Corylus avellana) IgE, T4",
                        "serviceID": "КСМ 1053",
                        "price": "430",


                    },
                    {
                        "serviceText": "Ольха (Alnus incana) IgE, T2",
                        "serviceID": "КСМ 1054",
                        "price": "430",


                    },
                    {
                        "serviceText": "Тополь (Populas spp) IgE, T14",
                        "serviceID": "КСМ 1055",
                        "price": "430",


                    },
                    {
                        "serviceText": "Ясень (Fraxinus excelsior) IgE, T15",
                        "serviceID": "КСМ 1056",
                        "price": "430",


                    },
                    {
                        "serviceText": "Амброзия обыкновенная (Ambrosia elatior) IgE, W1",
                        "serviceID": "КСМ 1057",
                        "price": "430",


                    },
                    {
                        "serviceText": "Ежа сборная (Dactylis glomerata) IgE, G3",
                        "serviceID": "КСМ 1058",
                        "price": "430",


                    },
                    {
                        "serviceText": "Кострец безостый (Bromus inermis) IgE, G11",
                        "serviceID": "КСМ 1059",
                        "price": "430",


                    },
                    {
                        "serviceText": "Лебеда сереющая (Atriplex canescens) IgE, W75",
                        "serviceID": "КСМ 1060",
                        "price": "430",


                    },
                    {
                        "serviceText": "Лисохвост луговой (Alopecurus pratensis) IgE, G16",
                        "serviceID": "КСМ 1061",
                        "price": "430",


                    },
                    {
                        "serviceText": "Марь белая (Chenopodium album) IgE, W10",
                        "serviceID": "КСМ 1062",
                        "price": "430",


                    },
                    {
                        "serviceText": "Мятлик луговой (Pоa pratensis) IgE, G8",
                        "serviceID": "КСМ 1063",
                        "price": "430",


                    },
                    {
                        "serviceText": "Овсянница луговая (Festuca elatior) IgE, G4",
                        "serviceID": "КСМ 1064",
                        "price": "430",
                    },
                    {
                        "serviceText": "Одуванчик (Taraxacum officinale) IgE, W8",
                        "serviceID": "КСМ 1065",
                        "price": "430",


                    },
                    {
                        "serviceText": "Полынь горькая (Artemisia absinthum) IgE, W5",
                        "serviceID": "КСМ 1066",
                        "price": "430",


                    },
                    {
                        "serviceText": "Пшеница (Triticum sativum) IgE, G15",
                        "serviceID": "КСМ 1067",
                        "price": "430",


                    },
                    {
                        "serviceText": "Рожь культивированная (Secale cereale) IgE, G12",
                        "serviceID": "КСМ 1068",
                        "price": "430",


                    },
                    {
                        "serviceText": "Тимофеевка (Phleum pratense) IgE, G6",
                        "serviceID": "КСМ 1069",
                        "price": "430",


                    },
                    {
                        "serviceText": "Домашняя пыль тип (Greer) IgE, h1",
                        "serviceID": "КСМ 1070",
                        "price": "430",


                    },
                    {
                        "serviceText": "Клещ-дерматофаг мучной (D. farinae) IgE, D2",
                        "serviceID": "КСМ 1071",
                        "price": "430",


                    },
                    {
                        "serviceText": "Клещ-дерматофаг перинный (D.pteronyssinus) IgE, D1",
                        "serviceID": "КСМ 1072",
                        "price": "430",


                    },
                    {
                        "serviceText": "Грибы рода кандида (Candida albicans) IgE, M5",
                        "serviceID": "КСМ 1073",
                        "price": "430",


                    },
                    {
                        "serviceText": "Плесневый гриб (Chaetomium globosu) IgE, M208",
                        "serviceID": "КСМ 1074",
                        "price": "430",


                    },
                    {
                        "serviceText": "Плесневый гриб (Aspergillus fumigatus) IgE, M3",
                        "serviceID": "КСМ 1075",
                        "price": "430",


                    },
                    {
                        "serviceText": "Плесневый гриб (Alternaria tenuis) IgE, M6",
                        "serviceID": "КСМ 1076",
                        "price": "430",


                    },
                    {
                        "serviceText": "Азитромицин IgE, C194",
                        "serviceID": "КСМ 1077",
                        "price": "700",


                    },
                    {
                        "serviceText": "Амоксициллин IgE, C204",
                        "serviceID": "КСМ 1078",
                        "price": "700",


                    },
                    {
                        "serviceText": "Ампициллин IgE, C203",
                        "serviceID": "КСМ 1079",
                        "price": "700",


                    },
                    {
                        "serviceText": "Пенициллин G IgE, Cl",
                        "serviceID": "КСМ 1080",
                        "price": "700",


                    },
                    {
                        "serviceText": "Цефуроксим IgE, C308",
                        "serviceID": "КСМ 1081",
                        "price": "700",


                    },
                    {
                        "serviceText": "Ципрофлоксацин IgE, C108",
                        "serviceID": "КСМ 1082",
                        "price": "700",


                    },
                    {
                        "serviceText": "Латекс IgE, K82",
                        "serviceID": "КСМ 1083",
                        "price": "700",


                    },
                    {
                        "serviceText": "Местные анестетики № 1 Артикаин/Скандонест, IgE",
                        "serviceID": "КСМ 1084",
                        "price": "850",


                    },
                    {
                        "serviceText": "Местные анестетики № 2 Новокаин/Лидокаин, IgE",
                        "serviceID": "КСМ 1085",
                        "price": "430",


                    },
                    {
                        "serviceText": "Эозинофильный катионный белок (EСР)",
                        "serviceID": "КСМ 1086",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Холодовой тест Дункана",
                        "serviceID": "КСМ 1087",
                        "price": "150",


                    }
                ]
            }
        ]
    },
    {
        "id": 1,
        "categoryTitle": "Акушерство и гинекология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-акушера-гинеколога, доцента кафедры акушерства и гинекологии, кмн",
                        "serviceID": "КСМ 1100",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-акушера-гинеколога, доцента кафедры акушерства и гинекологии, кмн повторный",
                        "serviceID": "КСМ 1101",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-акушера-гинеколога, ассистента кафедры акушерства и гинекологии, кмн",
                        "serviceID": "КСМ 1102",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-акушера-гинеколога, ассистента кафедры акушерства и гинекологии, кмн повторный",
                        "serviceID": "КСМ 1103",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-акушера-гинеколога первичный",
                        "serviceID": "КСМ 1104",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-акушера-гинеколога повторный",
                        "serviceID": "КСМ 1105",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Профилактический прием (консультация без осмотра) врача-акушера-гинеколога",
                        "serviceID": "КСМ 1106",
                        "price": "500",


                    },
                    {
                        "serviceText": "Комплексная услуга (осмотр, консультация врача-акушера-гинеколога, ультразвуковое исследование матки и придатков, кольпоскопия, взятие гинекологических мазков на флору и онкоцитологию)",
                        "serviceID": "КСМ 1107",
                        "price": "4000",


                    },
                    {
                        "serviceText": "Консультация врача-акушера-гинеколога при несостоятельности мышц тазового дна",
                        "serviceID": "КСМ 1108",
                        "price": "1100",


                    },
                    {
                        "serviceText": "Подбор пессарий при проблеме гениталий",
                        "serviceID": "КСМ 1109",
                        "price": "1300",


                    }
                ]
            },
            {
                "subcategoryTitle": "Решение врачебной комиссии (ЭКО)",
                "services": [
                    {
                        "serviceText": "Решение врачебной комиссии по программе ЭКО 1 категории сложности",
                        "serviceID": "КСМ 1110",
                        "price": "10000",


                    },
                    {
                        "serviceText": "Решение врачебной комиссии по программе ЭКО 2 категории сложности",
                        "serviceID": "КСМ 1111",
                        "price": "7500",


                    },
                    {
                        "serviceText": "Решение врачебной комиссии по программе ЭКО 3 категории сложности",
                        "serviceID": "КСМ 1112",
                        "price": "6500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Предгравиальная подготовка",
                "services": [
                    {
                        "serviceText": "Предгравиальная подготовка для женщин с привычным невынашиванием беременности (Чек-Ап)",
                        "serviceID": "КСМ 1113",
                        "price": "11500",


                    },
                    {
                        "serviceText": "Предгравидарная подготовка для женщин (Чек-Ап)",
                        "serviceID": "КСМ 1114",
                        "price": "7500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Другое",
                "services": [
                    {
                        "serviceText": "Взятие гинекологического мазка",
                        "serviceID": "КСМ 1115",
                        "price": "300",


                    },
                    {
                        "serviceText": "Медикаментозная обработка органов малового таза",
                        "serviceID": "КСМ 1116",
                        "price": "300",


                    },
                    {
                        "serviceText": "Обезболивание лекарственным препаратом",
                        "serviceID": "КСМ 1117",
                        "price": "450",


                    },
                    {
                        "serviceText": "Введение лекарственных препаратов интравагинально",
                        "serviceID": "КСМ 1118",
                        "price": "350",


                    },
                    {
                        "serviceText": "Внутриматочное введение лекарственных средств",
                        "serviceID": "КСМ 1119",
                        "price": "500",


                    },
                    {
                        "serviceText": "Биопсия шейки матки и образований наружных половых органов конхотомная",
                        "serviceID": "КСМ 1120",
                        "price": "300",


                    },
                    {
                        "serviceText": "Удаление кондиломм НПО",
                        "serviceID": "КСМ 1121",
                        "price": "550",


                    },
                    {
                        "serviceText": "Кольпоскопия",
                        "serviceID": "КСМ 1122",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Аппликация шейки матки раствором Солковагина (без стоимости препарата)",
                        "serviceID": "КСМ 1123",
                        "price": "700",


                    },
                    {
                        "serviceText": "Пайпель-биопсия эндометрия",
                        "serviceID": "КСМ 1124",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Удаление внутриматочной спирали",
                        "serviceID": "КСМ 1125",
                        "price": "1100",


                    },
                    {
                        "serviceText": "Радиоволновая коагуляция шейки матки",
                        "serviceID": "КСМ 1126",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Эксцизия шейки матки",
                        "serviceID": "КСМ 1127",
                        "price": "1700",


                    },
                    {
                        "serviceText": "Радиоволновая биопсия шейки матки",
                        "serviceID": "КСМ 1128",
                        "price": "1900",


                    },
                    {
                        "serviceText": "Удаление новообразований наружных половых органов радиохируогическое",
                        "serviceID": "КСМ 1129",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Удаление полипа цервикального канала",
                        "serviceID": "КСМ 1130",
                        "price": "1900",


                    },
                    {
                        "serviceText": "Ультрасоногистерография",
                        "serviceID": "КСМ 1131",
                        "price": "3800",


                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "categoryTitle": "Детские специалисты",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-педиатра, доцента кафедры детских болезней педиатрического факультета, кмн",
                        "serviceID": "КСМ 1300",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача- невролога, доцента кафедры детских болезней педиатрического факультета, кмн",
                        "serviceID": "КСМ 1801",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача - аллерголога - иммунолога, доцента кафедры педиатрии и неонатологии ИНМФО, кмн",
                        "serviceID": "КСМ 1000",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-гастроэнтеролога, доцента кафедры педиатрии и неонатологии ИНМФО, кмн. неонатологи ИНМФО, кмн",
                        "serviceID": "КСМ 1200",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-оториноларинголога, заведующий кафедрой оториноларингологии, дмн",
                        "serviceID": "КСМ 1900",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-дерматолога, заведующего кафедрой дерматовенерологии, кмн",
                        "serviceID": "КСМ 1400",
                        "price": "1800",


                    },
                    {
                        "serviceText": "●	КСМ1301 Прием (осмотр, консультация) врача-педиатра первичный",
                        "serviceID": "КСМ 1301",
                        "price": "1400",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-педиатра повторный",
                        "serviceID": "КСМ 1302",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-оториноларинголога, высшей квалификации с эндоскопическим обследованием",
                        "serviceID": "КСМ 1902",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача детского невролога",
                        "serviceID": "КСМ 1807",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-дерматовенеролога первичный без дерматоскопии",
                        "serviceID": "КСМ 1401",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-дерматовенеролога повторный без дерматоскопии",
                        "serviceID": "КСМ 1402",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Личный педиатр Чек-Ап",
                        "serviceID": "КСМ 1303",
                        "price": "12000",


                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "categoryTitle": "Гастроэнтерология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-гастроэнтеролога, доцента кафедра педиатрии и неонатологии ИНМФО, кмн",
                        "serviceID": "КСМ 1200",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-гастроэнтеролога первичный",
                        "serviceID": "КСМ 1201",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-гастроэнтеролога повторный",
                        "serviceID": "КСМ 1202",
                        "price": "1000",


                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "categoryTitle": "Дерматовенерология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-дерматолога, заведующего кафедрой дерматовенерологии, кмн",
                        "serviceID": "КСМ 1400",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-дерматовенеролога первичный без дерматоскопии",
                        "serviceID": "КСМ 1401",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-дерматовенеролога повторный без дерматоскопии",
                        "serviceID": "КСМ 1402",
                        "price": "1000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Дерматоскопия",
                "services": [
                    {
                        "serviceText": "Дерматоскопия (1 элемент)",
                        "serviceID": "КСМ 1403",
                        "price": "450",


                    },
                    {
                        "serviceText": "Дерматоскопия за 1 элемент (2-10 элементов)",
                        "serviceID": "КСМ 1404",
                        "price": "400",


                    },
                    {
                        "serviceText": "Дерматоскопия за 1 элемент (более 10 элементов)",
                        "serviceID": "КСМ 1405",
                        "price": "350",


                    }
                ]
            },
            {
                "subcategoryTitle": "Криодеструкция",
                "services": [
                    {
                        "serviceText": "Криодеструкция доброкачественных образований: папиллом, кератом, плоских вульгарных и подошвенных бородавок, кондиллом и элементов контагиозного моллюска до 0,5 см 1 элемент",
                        "serviceID": "КСМ 1406",
                        "price": "500",


                    },
                    {
                        "serviceText": "Криодеструкция доброкачественных образований: папиллом, кератом, плоских вульгарных и подошвенных бородавок, кондиллом и элементов контагиозного моллюска 0,5 - 1.0 см. 1 элемент",
                        "serviceID": "КСМ 1407",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Криодеструкция доброкачественных образований: папиллом, кератом, плоских вульгарных и подошвенных бородавок, кондиллом и элементов контагиозного моллюска более 1.0 см. 1 элемент",
                        "serviceID": "КСМ 1408",
                        "price": "1500",


                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "categoryTitle": "Инфекционные болезни",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-инфекциониста, заведующего кафедрой инфекционных болезней с эпидемиологией, тропической медициной, кмн",
                        "serviceID": "КСМ 1500",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-инфекциониста, доцента кафедры инфекционных болезней с эпидемиологией, тропической медициной, кмн",
                        "serviceID": "КСМ 1501",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-инфекциониста",
                        "serviceID": "КСМ 1502",
                        "price": "1200",


                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "categoryTitle": "Кардиология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-кардиолога , доцент ДПО кафедры внутренних болезней ИНМФО, кмн",
                        "serviceID": "КСМ 1600",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-кардиолога первичный",
                        "serviceID": "КСМ 1601",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-кардиолога повторный",
                        "serviceID": "КСМ 1601",
                        "price": "1000",


                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "categoryTitle": "Медико-психологический центр",
        "subcategories": [
            {
                "subcategoryTitle": "Исследования",
                "services": [
                    {
                        "serviceText": "Консультация медицинского психолога",
                        "serviceID": "КСМ 1750",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Прием (тестирование, консультация) медицинского психолога первичный (продолжительность приема до 1,5 часов)",
                        "serviceID": "КСМ 1751",
                        "price": "3500",


                    },
                    {
                        "serviceText": "Прием (тестирование, консультация) медицинского психолога повторный (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1752",
                        "price": "2400",


                    },
                    {
                        "serviceText": "Клинико-психологическое психодиагностическое обследование (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1753",
                        "price": "2400",


                    },
                    {
                        "serviceText": "Клинико-психологическое консультирование (первичный прием) (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1754",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Клинико-психологическое консультирование (повторный прием) (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1755",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Групповое клинико-психологическое консультирование (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1756",
                        "price": "1100",


                    },
                    {
                        "serviceText": "Семейное клинико-психологическое консультирование (первичный прием) (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1757",
                        "price": "3000",


                    },
                    {
                        "serviceText": "Семейное клинико-психологическое консультирование (повторный прием) (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1758",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Индивидуальная клинико-психологическая коррекция (взрослый) (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1759",
                        "price": "1900",


                    },
                    {
                        "serviceText": "Индивидуальная клинико-психологическая коррекция (ребёнок законный представитель) (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1760",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Групповая клинико-психологическая коррекция (продолжительность приема до 1 часа)",
                        "serviceID": "КСМ 1761",
                        "price": "1000",


                    },
                    {
                        "serviceText": "уровня психофизиологического и соматического здоровья, функциональных и адаптивных резервов организма",
                        "serviceID": "КСМ 1762",
                        "price": "5700",


                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "categoryTitle": "Медицинские осмотры",
        "subcategories": [
            {
                "subcategoryTitle": "Медицинское заключение для доступа к управлению автотранспортным средством",
                "services": [
                    {
                        "serviceText": "Медицинское заключение для доступа к управлению автотранспортным средством категории А, В",
                        "serviceID": "КСМ 1700",
                        "price": "700",


                    },
                    {
                        "serviceText": "Медицинское заключение для доступа к управлению автотранспортным средством категории С, D",
                        "serviceID": "КСМ 1701",
                        "price": "1300",


                    }
                ]
            },
            {
                "subcategoryTitle": "Осмотр водителей",
                "services": [
                    {
                        "serviceText": "Предрейсовый медицинский осмотр водителей",
                        "serviceID": "КСМ 1702",
                        "price": "70",


                    },
                    {
                        "serviceText": "Послерейсовый медицинский осмотр водителей",
                        "serviceID": "КСМ 1703",
                        "price": "50",


                    }
                ]
            },
            {
                "subcategoryTitle": "Оформление санаторно-курортной карты",
                "services": [
                    {
                        "serviceText": "Оформление санаторно-курортной карты (женщины)",
                        "serviceID": "КСМ 1704",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Оформление санаторно-курортной карты (мужчины)",
                        "serviceID": "КСМ 1705",
                        "price": "1100",


                    }
                ]
            },
            {
                "subcategoryTitle": "Медицинский осмотр студентов",
                "services": [
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (мужчины) предварительный",
                        "serviceID": "КСМ 1706",
                        "price": "3100",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (женщины) предварительный",
                        "serviceID": "КСМ 1707",
                        "price": "3900",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (мужчины) периодический",
                        "serviceID": "КСМ 1708",
                        "price": "1700",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (женщины) периодический",
                        "serviceID": "КСМ 1709",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (ВИЧ 1+11+гепатит В.С) (мужчины) предварительный",
                        "serviceID": "КСМ 1710",
                        "price": "3900",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (ВИЧ 1+II+гепатит В.С) (женщины) предварительный",
                        "serviceID": "КСМ 1711",
                        "price": "4600",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (ВИЧ 1+II+гепатит В.С) (мужчины) периодический",
                        "serviceID": "КСМ 1712",
                        "price": "2300",


                    },
                    {
                        "serviceText": "Медицинский осмотр студентов по Приказу № 29 п. 27 (ВИЧ 1+II+гепатит В.С) (женщины) периодический",
                        "serviceID": "КСМ 1713",
                        "price": "3900",


                    }
                ]
            },
            {
                "subcategoryTitle": "Оформление справки (бассейн, спортивная секция)",
                "services": [
                    {
                        "serviceText": "Оформление справки в бассейн (для лиц младше 18 лет)",
                        "serviceID": "КСМ 1714",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Оформление справки для занятий в спортивной секции (для лиц младше 18 лет)",
                        "serviceID": "КСМ 1715",
                        "price": "1700",


                    }
                ]
            },
            {
                "subcategoryTitle": "Комплекс обследований по допуску к занятиям физической культурой",
                "services": [
                    {
                        "serviceText": "Комплекс обследований по допуску к занятиям физической культурой (мужчины)",
                        "serviceID": "КСМ 1716",
                        "price": "1250",


                    },
                    {
                        "serviceText": "Комплекс обследований по допуску к занятиям физической культурой (женщины)",
                        "serviceID": "КСМ 1717",
                        "price": "1250",


                    }
                ]
            },
            {
                "subcategoryTitle": "Комплексные услуги",
                "services": [
                    {
                        "serviceText": "Комплексная услуга по проведению периодического медицинского осмотра студентов по Приказу № 29 п. 27 и обследований по допуску к занятиям физической культурой (мужчины)",
                        "serviceID": "КСМ 1718",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Комплексная услуга по проведению периодического медицинского осмотра студентов по Приказу № 29 п. 27 и обследований по допуску к занятиям физической культурой (женщины)",
                        "serviceID": "КСМ 1719",
                        "price": "2900",


                    },
                    {
                        "serviceText": "Комплексная услуга по проведению периодического медицинского осмотра студентов по Приказу № 29 п. 27 и обследований по допуску к занятиям физической культурой (мужчины)",
                        "serviceID": "КСМ 1720",
                        "price": "3500",


                    },
                    {
                        "serviceText": "Комплексная услуга по проведению предварительного медицинского осмотра студентов по Приказу № 29 п. 27 и обследований по допуску к занятиям физической культурой (женщины)",
                        "serviceID": "КСМ 1721",
                        "price": "4100",


                    }
                ]
            },
            {
                "subcategoryTitle": "Исследования",
                "services": [
                    {
                        "serviceText": "Бактериоскопическое исследование соскоба слизистой оболочки носа (окраска по Циль-Нильсону)",
                        "serviceID": "КСМ 1724",
                        "price": "236",


                    },
                    {
                        "serviceText": "Бактериоскопическое исследование мокроты или другого материала (посевы на твердых средах)",
                        "serviceID": "КСМ 1725",
                        "price": "900",


                    },
                    {
                        "serviceText": "Культуральное (посевы на жидких питательных средах) исследование мокроты или другого материала",
                        "serviceID": "КСМ 1726",
                        "price": "1700",


                    },
                    {
                        "serviceText": "Химико-токсикологическое исследование на наличие в организме человека наркотических средств, психотропных веществ и их метаболитов в биологической среде (моча) иммунохимическим методом анализа",
                        "serviceID": "КСМ 1729",
                        "price": "1350",


                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "categoryTitle": "Неврология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача- невролога, заведующего кафедрой неврологии, нейрохирургии, медицинской генетики, дмн",
                        "serviceID": "КСМ 1800",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача- невролога, доцента кафедры детских болезней педиатрического факультета, кмн",
                        "serviceID": "КСМ 1801",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача - невролога первичный",
                        "serviceID": "КСМ 1802",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача- невролога повторный",
                        "serviceID": "КСМ 1803",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача- невролога высшей категории первичный",
                        "serviceID": "КСМ 1804",
                        "price": "1400",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача- невролога высшей категории повторный",
                        "serviceID": "КСМ 1805",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Прием врача-специалиста по головной боли",
                        "serviceID": "КСМ 1806",
                        "price": "1700",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача детского невролога",
                        "serviceID": "КСМ 1807",
                        "price": "1300",


                    }
                ]
            },
            {
                "subcategoryTitle": "Программа адаптационная",
                "services": [
                    {
                        "serviceText": "Программа адаптационная при хронической боли в спине",
                        "serviceID": "КСМ 1808",
                        "price": "10800",


                    },
                    {
                        "serviceText": "Программа адаптационная при мигрени",
                        "serviceID": "КСМ 1809",
                        "price": "5000",


                    },
                    {
                        "serviceText": "Программа адаптационная при когнитивных нарушениях",
                        "serviceID": "КСМ 1810",
                        "price": "7000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Введение ботулинического токсина",
                "services": [
                    {
                        "serviceText": "Введение ботулинического токсина типа А (Ксеомин), 100 ЕД",
                        "serviceID": "КСМ 1811",
                        "price": "18000",


                    },
                    {
                        "serviceText": "Введение ботулинического токсина типа А (Ксеомин), 50 ЕД",
                        "serviceID": "КСМ 1812",
                        "price": "10000",


                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "categoryTitle": "Оториноларингология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-оториноларинголога, заведующий кафедрой оториноларингологии, дмн",
                        "serviceID": "КСМ 1900",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Видеоэндоскопическое обследование ЛОР - органов, заведующий кафедрой оториноларингологии, дмн",
                        "serviceID": "КСМ 1901",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-оториноларинголога, высшей квалификации с эндоскопическим обследованием",
                        "serviceID": "КСМ 1902",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-оториноларинголога первичный",
                        "serviceID": "КСМ 1903",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-оториноларинголога повторный",
                        "serviceID": "КСМ 1904",
                        "price": "1000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Анемизация",
                "services": [
                    {
                        "serviceText": "Анемизация слизистой носа",
                        "serviceID": "КСМ 1905",
                        "price": "200",


                    },
                    {
                        "serviceText": "Анемизация устьев слуховых труб",
                        "serviceID": "КСМ 1906",
                        "price": "200",


                    }
                ]
            },
            {
                "subcategoryTitle": "Введение лекарственных средств",
                "services": [
                    {
                        "serviceText": "Введение лекарственных препаратов в наружный слуховой проход",
                        "serviceID": "КСМ 1911",
                        "price": "300",


                    },
                    {
                        "serviceText": "Введение лекарственных средств в полость носа",
                        "serviceID": "КСМ 1912",
                        "price": "300",


                    },
                    {
                        "serviceText": "Введение лекарственных средств в заушную область",
                        "serviceID": "КСМ 1913",
                        "price": "300",


                    }
                ]
            },
            {
                "subcategoryTitle": "Прочие процедуры",
                "services": [
                    {
                        "serviceText": "Взятие мазка из зева",
                        "serviceID": "КСМ 1907",
                        "price": "200",


                    },
                    {
                        "serviceText": "Внутригортанное вливание лекарственных средств",
                        "serviceID": "КСМ 1908",
                        "price": "250",


                    },
                    {
                        "serviceText": "Исследование органов слуха с помощью камертона",
                        "serviceID": "КСМ 1909",
                        "price": "250",


                    },
                    {
                        "serviceText": "Продувание слуховых труб по Политцеру",
                        "serviceID": "КСМ 1910",
                        "price": "300",


                    },
                    {
                        "serviceText": "Орошение носоглотки лекарственными средствами",
                        "serviceID": "КСМ 1914",
                        "price": "300",


                    },
                    {
                        "serviceText": "Промывание верхнечелюстной пазухи носа",
                        "serviceID": "КСМ 1915",
                        "price": "350",


                    },
                    {
                        "serviceText": "Промывание верхнечелюстной пазухи носа с помощью катетера Ямик (одна процедура)",
                        "serviceID": "КСМ 1916",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Исследование вестибулярного аппарата на кресле Барани",
                        "serviceID": "КСМ 1917",
                        "price": "400",


                    },
                    {
                        "serviceText": "Механическая остановка кровотечения носа",
                        "serviceID": "КСМ 1918",
                        "price": "400",


                    },
                    {
                        "serviceText": "Тампонада носа",
                        "serviceID": "КСМ 1919",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Промывание лакун миндалин",
                        "serviceID": "КСМ 1920",
                        "price": "500",


                    },
                    {
                        "serviceText": "Промывание лакун миндалин аппаратом Тонзилор 2",
                        "serviceID": "КСМ 1921",
                        "price": "600",


                    },
                    {
                        "serviceText": "Туалет уха",
                        "serviceID": "КСМ 1922",
                        "price": "500",


                    },
                    {
                        "serviceText": "Удаление ушной серы",
                        "serviceID": "КСМ 1923",
                        "price": "500",


                    },
                    {
                        "serviceText": "Удаление инородного тела из слухового отверстия",
                        "serviceID": "КСМ 1924",
                        "price": "500",


                    },
                    {
                        "serviceText": "Удаление инородных тел из носа",
                        "serviceID": "КСМ 1925",
                        "price": "500",


                    },
                    {
                        "serviceText": "Удаление инородного тела глотки или гортани",
                        "serviceID": "КСМ 1926",
                        "price": "800",


                    },
                    {
                        "serviceText": "Вакуумное воздействие (дренаж)",
                        "serviceID": "КСМ 1927",
                        "price": "600",


                    },
                    {
                        "serviceText": "Пневмомассаж барабанных перепонок",
                        "serviceID": "КСМ 1928",
                        "price": "350",


                    },
                    {
                        "serviceText": "Пункция гайморовой пазухи носа (одна сторона)",
                        "serviceID": "КСМ 1929",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Анестезия гортани аппликационная",
                        "serviceID": "КСМ 1930",
                        "price": "350",


                    },
                    {
                        "serviceText": "Радиоволновая операция 1 нижней носовой раковины",
                        "serviceID": "КСМ 1931",
                        "price": "12850",


                    },
                    {
                        "serviceText": "Анестезия гортани аэрозольная",
                        "serviceID": "КСМ 1932",
                        "price": "300",


                    },
                    {
                        "serviceText": "Анестезия ротоглотки аппликационная или аэрозольная",
                        "serviceID": "КСМ 1933",
                        "price": "300",


                    }
                ]
            },
            {
                "subcategoryTitle": "Биопсия",
                "services": [
                    {
                        "serviceText": "Биопсия ткани из среднего уха",
                        "serviceID": "КСМ 1935",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Биопсия ткани наружного уха",
                        "serviceID": "КСМ 1936",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Биопсия ткани ротоглотки",
                        "serviceID": "КСМ 1937",
                        "price": "250",


                    }
                ]
            },
            {
                "subcategoryTitle": "Блокада",
                "services": [
                    {
                        "serviceText": "Блокада боковых валиков глотки (1 сторона)",
                        "serviceID": "КСМ 1938",
                        "price": "350",


                    },
                    {
                        "serviceText": "Блокада внутриносовая",
                        "serviceID": "КСМ 1939",
                        "price": "350",


                    },
                    {
                        "serviceText": "Блокада заушная по биологически активным точкам (без стоимости препаратов)",
                        "serviceID": "КСМ 1940",
                        "price": "400",


                    },
                    {
                        "serviceText": "Блокада меатотимпональная (без стоимости препаратов)",
                        "serviceID": "КСМ 1941",
                        "price": "350",


                    },
                    {
                        "serviceText": "Блокада парамеатальная (без стоимости препаратов)",
                        "serviceID": "КСМ 1942",
                        "price": "250",


                    }
                ]
            },
            {
                "subcategoryTitle": "Дренаж",
                "services": [
                    {
                        "serviceText": "Вакуумное воздействие (дренаж)",
                        "serviceID": "КСМ 1943",
                        "price": "600",


                    }
                ]
            },
            {
                "subcategoryTitle": "Ингаляции",
                "services": [
                    {
                        "serviceText": "Ингаляции лекарственные",
                        "serviceID": "КСМ 1946",
                        "price": "100",


                    },
                    {
                        "serviceText": "Ингаляции щелочные",
                        "serviceID": "КСМ 1947",
                        "price": "100",


                    }
                ]
            },
            {
                "subcategoryTitle": "Инстилляция и аппликация",
                "services": [
                    {
                        "serviceText": "Инстилляция и аппликация лекарственных веществ в нос",
                        "serviceID": "КСМ 1948",
                        "price": "300",


                    }
                ]
            },
            {
                "subcategoryTitle": "Инсуффляция",
                "services": [
                    {
                        "serviceText": "Инсуффляция лекарственных препаратов (порошка) в небные ниши",
                        "serviceID": "КСМ 1949",
                        "price": "200",


                    },
                    {
                        "serviceText": "Инсуффляция порошка в ухо",
                        "serviceID": "КСМ 1950",
                        "price": "200",


                    }
                ]
            },
            {
                "subcategoryTitle": "Исследование функции",
                "services": [
                    {
                        "serviceText": "Исследование функции спонтанного и динамического равновесия",
                        "serviceID": "КСМ 1951",
                        "price": "1000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Катетеризация",
                "services": [
                    {
                        "serviceText": "Катетеризация слуховой трубы с введением лекарственных средств",
                        "serviceID": "КСМ 1952",
                        "price": "600",


                    }
                ]
            },
            {
                "subcategoryTitle": "Лечебный маневр",
                "services": [
                    {
                        "serviceText": "Лечебный маневр Тупе при ДППГ",
                        "serviceID": "КСМ 1953",
                        "price": "2500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Локальная анемизация",
                "services": [
                    {
                        "serviceText": "Локальная анемизация слизистой оболочки полости носа в области соустий",
                        "serviceID": "КСМ 1954",
                        "price": "250",


                    }
                ]
            },
            {
                "subcategoryTitle": "Массаж задней стенки глотки",
                "services": [
                    {
                        "serviceText": "Массаж задней стенки глотки",
                        "serviceID": "КСМ 1955",
                        "price": "250",


                    }
                ]
            },
            {
                "subcategoryTitle": "Отомикроскопия",
                "services": [
                    {
                        "serviceText": "Отомикроскопия",
                        "serviceID": "КСМ 1956",
                        "price": "600",


                    }
                ]
            },
            {
                "subcategoryTitle": "Пункция",
                "services": [
                    {
                        "serviceText": "Пункция верхнечелюстной пазухи (одна сторона)",
                        "serviceID": "КСМ 1965",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Пункция паратонзиллярной клетчатки",
                        "serviceID": "КСМ 1966",
                        "price": "350",


                    }
                ]
            },
            {
                "subcategoryTitle": "Промывание",
                "services": [
                    {
                        "serviceText": "Промывание полости носа по Пройду",
                        "serviceID": "КСМ 1959",
                        "price": "550",


                    },
                    {
                        "serviceText": "Промывание атика",
                        "serviceID": "КСМ 1960",
                        "price": "450",


                    },
                    {
                        "serviceText": "Промывание верхнечелюстной пазухи через соустье",
                        "serviceID": "КСМ 1961",
                        "price": "550",


                    },
                    {
                        "serviceText": "Промывание лакун небных и язычной миндалин по Белоголовому",
                        "serviceID": "КСМ 1962",
                        "price": "500",


                    },
                    {
                        "serviceText": "Промывание лакун небных и язычной миндалин под отрицательным давлением",
                        "serviceID": "КСМ 1963",
                        "price": "700",


                    },
                    {
                        "serviceText": "Промывание полости носа под отрицательным давлением",
                        "serviceID": "КСМ 1964",
                        "price": "500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Различные процедуры",
                "services": [
                    {
                        "serviceText": "Параминдаликовая блокада",
                        "serviceID": "КСМ 1957",
                        "price": "450",


                    },
                    {
                        "serviceText": "Парацентез барабанной перепонки взрослому",
                        "serviceID": "КСМ 1958",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Разведение краев разреза после вскрытия паратонзиллярного абсцесса",
                        "serviceID": "КСМ 1967",
                        "price": "300",


                    },
                    {
                        "serviceText": "Ретроградное орошение носоглотки",
                        "serviceID": "КСМ 1968",
                        "price": "300",


                    },
                    {
                        "serviceText": "Риноманометрия",
                        "serviceID": "КСМ 1969",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Смазывание миндалин лекарственными веществами",
                        "serviceID": "КСМ 1970",
                        "price": "250",


                    },
                    {
                        "serviceText": "Смазывание слизистой оболочки глотки лекарственными веществами",
                        "serviceID": "КСМ 1971",
                        "price": "250",


                    },
                    {
                        "serviceText": "Соскоб со слизистой оболочки носа, глотки, носоглотки, уха",
                        "serviceID": "КСМ 1972",
                        "price": "300",


                    },
                    {
                        "serviceText": "Тимпанометрия",
                        "serviceID": "КСМ 1973",
                        "price": "500",


                    },
                    {
                        "serviceText": "Туалет глотки после двусторонней тонзиллэктомии",
                        "serviceID": "КСМ 1974",
                        "price": "400",


                    },
                    {
                        "serviceText": "Туалет носа по Зандерману",
                        "serviceID": "КСМ 1975",
                        "price": "200",


                    },
                    {
                        "serviceText": "Туалет полости носа после операции",
                        "serviceID": "КСМ 1976",
                        "price": "800",


                    },
                    {
                        "serviceText": "Туалет трахеостомы",
                        "serviceID": "КСМ 1977",
                        "price": "450",


                    },
                    {
                        "serviceText": "Эндоларингиальное введение лекарственных веществ",
                        "serviceID": "КСМ 1978",
                        "price": "400",


                    },
                    {
                        "serviceText": "PВ - дезинтеграция небных миндалин (локально)",
                        "serviceID": "КСМ 1979",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Риноцитограмма",
                        "serviceID": "КСМ 1980",
                        "price": "500",


                    },
                    {
                        "serviceText": "PB - дизинтеграция 1 небной миндалины",
                        "serviceID": "КСМ 1981",
                        "price": "12000",


                    },
                    {
                        "serviceText": "Туалет полости носа после операции",
                        "serviceID": "КСМ 1976",
                        "price": "800",


                    }
                ]
            }
        ]
    },
    {
        "id": 11,
        "categoryTitle": "Офтальмология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-офтальмолога, заведующий кафедрой офтальмологии дмн",
                        "serviceID": "КСМ 2000",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-офтальмолога, доцента кафедры офтальмологии, кмн",
                        "serviceID": "КСМ 2001",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-офтальмолога первичный",
                        "serviceID": "КСМ 2002",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-офтальмолога повторный",
                        "serviceID": "КСМ 2003",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Профилактический прием (осмотр, консультация) врача-офтальмолога",
                        "serviceID": "КСМ 2004",
                        "price": "500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Лечение",
                "services": [
                    {
                        "serviceText": "Медикаментозная обработка глаз",
                        "serviceID": "КСМ 2005",
                        "price": "200",


                    },
                    {
                        "serviceText": "Биомикроскопия глаза",
                        "serviceID": "КСМ 2006",
                        "price": "250",


                    },
                    {
                        "serviceText": "Зондирование слезных путей (и промывание)",
                        "serviceID": "КСМ 2007",
                        "price": "500",


                    },
                    {
                        "serviceText": "Удаление инородного тела конъюнктивы",
                        "serviceID": "КСМ 2008",
                        "price": "300",


                    },
                    {
                        "serviceText": "Рефрактометрия ( 2 глаза)",
                        "serviceID": "КСМ 2009",
                        "price": "300",


                    },
                    {
                        "serviceText": "Массаж век",
                        "serviceID": "КСМ 2010",
                        "price": "250",


                    },
                    {
                        "serviceText": "Измерение внутриглазного давления по Маклакову",
                        "serviceID": "КСМ 2011",
                        "price": "300",


                    },
                    {
                        "serviceText": "Тонография",
                        "serviceID": "КСМ 2012",
                        "price": "350",


                    },
                    {
                        "serviceText": "Инъекция лекарственного средства парабульбарно, под конъюнктиву, под кожу виска",
                        "serviceID": "КСМ 2013",
                        "price": "350",


                    },
                    {
                        "serviceText": "Удаление инородного тела роговицы",
                        "serviceID": "КСМ 2014",
                        "price": "350",


                    },
                    {
                        "serviceText": "Осмотр периферии глазного дна трехзеркальной линзой Гольдмана",
                        "serviceID": "КСМ 2015",
                        "price": "450",


                    },
                    {
                        "serviceText": "Компьютерная периметрия ( 2 глаза)",
                        "serviceID": "КСМ 2016",
                        "price": "500",


                    },
                    {
                        "serviceText": "Консервативное лечение халязиона",
                        "serviceID": "КСМ 2017",
                        "price": "2700",


                    },
                    {
                        "serviceText": "Дополнительная лазер-коагуляция после лазерного вмешательства",
                        "serviceID": "КСМ 2018",
                        "price": "4000",


                    },
                    {
                        "serviceText": "Капсулотомия",
                        "serviceID": "КСМ 2019",
                        "price": "5500",


                    },
                    {
                        "serviceText": "Иридотомия",
                        "serviceID": "КСМ 2020",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Лазер-коагуляция центральной области (киста, отек, послойное отверстие)",
                        "serviceID": "КСМ 2021",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Однократное вмешательство по поводу отслойки сетчатки, ретиношизиса (до 300 коагулятов)",
                        "serviceID": "КСМ 2022",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Периферическая отграничивающая лазеркоагуляция по поводу ПВХРД (1-2 участка дс 200 коагулятов)",
                        "serviceID": "КСМ 2023",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Трабекулопластика, трабекулоспазис, трабекулотомия",
                        "serviceID": "КСМ 2024",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Фокальная лазеркоагуляция по поводу диабетической ретинопатии",
                        "serviceID": "КСМ 2025",
                        "price": "6000",


                    },
                    {
                        "serviceText": "Периферическая профилактическая лазеркоагуляция (ППЛК - до 400 коагулятов)",
                        "serviceID": "КСМ 2026",
                        "price": "7000",


                    },
                    {
                        "serviceText": "Комбинированная периферическая лазер-коагуляция (отграничительная ППЛК)",
                        "serviceID": "КСМ 2027",
                        "price": "9000",


                    },
                    {
                        "serviceText": "Комбинированное антиглаукоматозное вмешательство(иридотомиятрабекулопластика)",
                        "serviceID": "КСМ 2028",
                        "price": "9000",


                    },
                    {
                        "serviceText": "Поэтапная лазер-коагуляция по поводу отслойки сетчатки, ретиношизиса",
                        "serviceID": "КСМ 2029",
                        "price": "9000",


                    },
                    {
                        "serviceText": "Поэтапная лазер-коагуляция по поводу распространенного тромбоза центр.вены сетчатки",
                        "serviceID": "КСМ 2030",
                        "price": "9000",


                    }
                ]
            }
        ]
    },
    {
        "id": 12,
        "categoryTitle": "Психиатрия и наркология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-психиатра первичный, доцента кафедры психиатрии, наркологии и психотерапии, кмн",
                        "serviceID": "КСМ 2100",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-психиатра первичный",
                        "serviceID": "КСМ 2101",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-психиатра повторный",
                        "serviceID": "КСМ 2102",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Прием (осмотр. консультация) врача-психиатра-нарколога первичный",
                        "serviceID": "КСМ 2103",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-психиатра-нарколога повторный",
                        "serviceID": "КСМ 2104",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Прием врача-психиатра-нарколога с экспресс-тестом (в рамках медицинского осмотра)",
                        "serviceID": "КСМ 2105",
                        "price": "500",


                    }
                ]
            }
        ]
    },
    {
        "id": 13,
        "categoryTitle": "Пульмонология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-пульмонолога, доцента кафедры педиатрии и неонатологи ИНМФО. кмн",
                        "serviceID": "КСМ 2200",
                        "price": "1600",


                    }
                ]
            }
        ]
    },
    {
        "id": 14,
        "categoryTitle": "Ревматология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-ревматолога, заведующий кафедрой госпитальной терапии, военно-полевой терапии, дмн",
                        "serviceID": "КСМ 2300",
                        "price": "2000",


                    }
                ]
            }
        ]
    },
    {
        "id": 15,
        "categoryTitle": "Сердечно-сосудистая хирургия",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-сердечно-сосудистого хирурга первичный",
                        "serviceID": "КСМ 2400",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-сердечно-сосудистого хирурга повторный",
                        "serviceID": "КСМ 2401",
                        "price": "1000",


                    }
                ]
            }
        ]
    },
    {
        "id": 16,
        "categoryTitle": "Терапия",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-терапевта, профессора, дмн",
                        "serviceID": "КСМ 2500",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-терапевта первичный",
                        "serviceID": "КСМ 2501",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-терапевта повторный",
                        "serviceID": "КСМ 2502",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Профилактический прием (осмотр, консультация) врача-терапевта",
                        "serviceID": "КСМ 2503",
                        "price": "500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Исследования",
                "services": [
                    {
                        "serviceText": "Исследование неспровоцированных дыхательных объемов и потоков с помощью пикфлоуметра",
                        "serviceID": "КСМ 2504",
                        "price": "300",


                    },
                    {
                        "serviceText": "Спирография",
                        "serviceID": "КСМ 2505",
                        "price": "600",


                    },
                    {
                        "serviceText": "Проведение электрокардиографических исследований",
                        "serviceID": "КСМ 2506",
                        "price": "600",


                    },
                    {
                        "serviceText": "Проведение электрокардиографических исследований с нагрузкой",
                        "serviceID": "КСМ 2507",
                        "price": "800",


                    },
                    {
                        "serviceText": "Расшифровка, описание и интерпретация электрокардиографических данных",
                        "serviceID": "КСМ 2508",
                        "price": "300",


                    },
                    {
                        "serviceText": "Спирография+проба с бронхолитиками",
                        "serviceID": "КСМ 2509",
                        "price": "800",


                    },
                    {
                        "serviceText": "Холтеровское мониторирование сердечного ритма (ХМ-ЭКГ)",
                        "serviceID": "КСМ 2510",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Суточное мониторирование артериального давления (АД)",
                        "serviceID": "КСМ 2511",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Проведение электрокардиографических исследований + Расшифровка, описание и интерпретация электрокардиографических данных в Клинике",
                        "serviceID": "КСМ 2512",
                        "price": "800",


                    }
                ]
            }
        ]
    },
    {
        "id": 17,
        "categoryTitle": "Травматология и ортопедия",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача - травматолога-ортопеда, заведующий кафедрой травматологии, ортопедии, военно-полевой хирургии, дмн",
                        "serviceID": "КСМ 2600",
                        "price": "2000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача - травматолога-ортопеда первичный",
                        "serviceID": "КСМ 2601",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Прием (осмотр. консультация) врача - травматолога-ортопеда повторный",
                        "serviceID": "КСМ 2602",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Прием (осмотр, консультация) врача спортивной медицины",
                        "serviceID": "КСМ 2603",
                        "price": "500",


                    }
                ]
            },
            {
                "subcategoryTitle": "Инъекции",
                "services": [
                    {
                        "serviceText": "Пункция сустава с промыванием полости",
                        "serviceID": "КСМ 2604",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Внутрисуставное введение эндопротеза синовиальной жидкости (без стоимости препарата)",
                        "serviceID": "КСМ 2605",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Внутрисуставное введение эндопротеза синовиальной жидкости под УЗИ контролем (без стоимости препарата)",
                        "serviceID": "КСМ 2606",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Паралимфатическое введение лекарственного препарата (без стоимости препарата)",
                        "serviceID": "КСМ 2607",
                        "price": "800",


                    },
                    {
                        "serviceText": "Паралимфатическое введение раствора Мелоксикам 15 мг",
                        "serviceID": "КСМ 2608",
                        "price": "900",


                    },
                    {
                        "serviceText": "Параартикулярная инъекция(без стоимости препарата)",
                        "serviceID": "КСМ 2609",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Паравертебральная инъекция(без стоимости препарата)",
                        "serviceID": "КСМ 2610",
                        "price": "1000",


                    },
                    {
                        "serviceText": "АСР-терапия (с учетом стоимоти двойного шприца)",
                        "serviceID": "КСМ 2617",
                        "price": "10600",


                    },
                    {
                        "serviceText": "ASP/SVF-терапия (с учетом стоимоти двойного шприца)",
                        "serviceID": "КСМ 2618",
                        "price": "35000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Кинезиологическое тейпирование",
                "services": [
                    {
                        "serviceText": "Кинезиологическое тейпирование одной зоны",
                        "serviceID": "КСМ 2611",
                        "price": "750",


                    },
                    {
                        "serviceText": "Кинезиологическое тейпирование одной зоны (без стоимости тейпа)",
                        "serviceID": "КСМ 2612",
                        "price": "500",


                    },
                    {
                        "serviceText": "Кинезиологическое тейпирование одной зоны тейпом с акватитаном X30",
                        "serviceID": "КСМ 2613",
                        "price": "1000",


                    }
                ]
            },
            {
                "subcategoryTitle": "PRP-терапия",
                "services": [
                    {
                        "serviceText": "PRP-терапия методикой открытого цикла",
                        "serviceID": "КСМ 2614",
                        "price": "2800",


                    },
                    {
                        "serviceText": "PRP-терапия методикой ycellbio закрытый цикл (без стоимости пробирки)",
                        "serviceID": "КСМ 2615",
                        "price": "1500",


                    },
                    {
                        "serviceText": "PRP-терапия методикой уcellbio закрытый цикл (со стоимости пробирки)",
                        "serviceID": "КСМ 2616",
                        "price": "7000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Забор синовиальной жидкости",
                "services": [
                    {
                        "serviceText": "Забор синовиальной жидкости",
                        "serviceID": "КСМ 2619",
                        "price": "600",


                    }
                ]
            }
        ]
    },
    {
        "id": 18,
        "categoryTitle": "Ультразвуковая диагностика",
        "subcategories": [
            {
                "subcategoryTitle": "Ультразвуковое исследование",
                "services": [
                    {
                        "serviceText": "Ультразвуковое исследование слюнных желез",
                        "serviceID": "КСМ 2700",
                        "price": "800",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование лимфатических узлов (одна анатомическая зона)",
                        "serviceID": "КСМ 2701",
                        "price": "550",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование плевральной полости",
                        "serviceID": "КСМ 2702",
                        "price": "550",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование щитовидной железы и паращитовидных желез",
                        "serviceID": "КСМ 2703",
                        "price": "800",


                    },
                    {
                        "serviceText": "Эхокардиография",
                        "serviceID": "КСМ 2704",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Дуплексное сканирование экстракраниальных отделов брахионефальных артерий",
                        "serviceID": "КСМ 2705",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование средостения",
                        "serviceID": "КСМ 2706",
                        "price": "550",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование мягких тканей (одна анатомическая зона)",
                        "serviceID": "КСМ 2707",
                        "price": "800",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование околоносовых пазух",
                        "serviceID": "КСМ 2708",
                        "price": "550",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование селезенки",
                        "serviceID": "КСМ 2710",
                        "price": "550",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование желчного пузыря с определением его сократимости",
                        "serviceID": "КСМ 2711",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование почек и надпочечников",
                        "serviceID": "КСМ 2712",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование молочных желез",
                        "serviceID": "КСМ 2713",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование матки и придатков трансабдоминальное",
                        "serviceID": "КСМ 2714",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование матки и придатков трансвагинальное",
                        "serviceID": "КСМ 2715",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование органов малого таза комплексное (трансвагинальное и трансабдоминальное)",
                        "serviceID": "КСМ 2716",
                        "price": "1700",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование мочевого пузыря",
                        "serviceID": "КСМ 2717",
                        "price": "700",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование мочевого пузыря с определением остаточной мочи",
                        "serviceID": "КСМ 2718",
                        "price": "800",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование органов мошонки",
                        "serviceID": "КСМ 2719",
                        "price": "900",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование предстательной железы (трансабдоминально)",
                        "serviceID": "КСМ 2720",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование предстательной железы трансректальное",
                        "serviceID": "КСМ 2721",
                        "price": "1200",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование сустава",
                        "serviceID": "КСМ 2722",
                        "price": "800",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование двух одноименных суставов",
                        "serviceID": "КСМ 2723",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование артерий одной верхней конечности",
                        "serviceID": "КСМ 2724",
                        "price": "900",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование вен одной верхней конечности",
                        "serviceID": "КСМ 2725",
                        "price": "900",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование артерий одной нижней конечности",
                        "serviceID": "КСМ 2726",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование вен одной нижней конечности",
                        "serviceID": "КСМ 2727",
                        "price": "1000",


                    },
                    {
                        "serviceText": "Ультразвуковая допплерография сосудов артерий верхних конечностей",
                        "serviceID": "КСМ 2728",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Ультразвуковая допплерография сосудов артерий нижних конечностей",
                        "serviceID": "КСМ 2729",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Ультразвуковая допплерография сосудов вен верхних конечностей",
                        "serviceID": "КСМ 2730",
                        "price": "1600",


                    },
                    {
                        "serviceText": "Ультразвуковая допплерография сосудов вен нижних конечностей",
                        "serviceID": "КСМ 2731",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Ультразвуковое исследование печени",
                        "serviceID": "КСМ 2732",
                        "price": "600",


                    }
                ]
            }
        ]
    },
    {
        "id": 19,
        "categoryTitle": "Физиотерапия",
        "subcategories": [
            {
                "subcategoryTitle": "Лечение и терапия",
                "services": [
                    {
                        "serviceText": "Лазерное лечения на аппарате Матрикс- Влок",
                        "serviceID": "КСМ 2800",
                        "price": "550",


                    },
                    {
                        "serviceText": "Лазерная терапия аппаратом Матрикс (вагинально)",
                        "serviceID": "КСМ 2801",
                        "price": "450",


                    },
                    {
                        "serviceText": "Лазерная терапия аппаратом Матрикс (1 поле)",
                        "serviceID": "КСМ 2802",
                        "price": "300",


                    },
                    {
                        "serviceText": "Лазерная терапия аппаратом Матрикс (2 поля)",
                        "serviceID": "КСМ 2802",
                        "price": "500",


                    }
                ]
            }
        ]
    },
    {
        "id": 20,
        "categoryTitle": "Эндокринология",
        "subcategories": [
            {
                "subcategoryTitle": "Прием (осмотр, консультация)",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача-эндокринолога высшей категории первичный",
                        "serviceID": "КСМ 2900",
                        "price": "1600",


                    }
                ]
            }
        ]
    },
    {
        "id": 21,
        "categoryTitle": "Вакцинопрофилактика",
        "subcategories": [
            {
                "subcategoryTitle": "Вакцинация",
                "services": [
                    {
                        "serviceText": "Вакцинация (для профилактики ветряной оспы) Варилрикс",
                        "serviceID": "КСМ 3000",
                        "price": "3815",


                    },
                    {
                        "serviceText": "Вакцинация (для профилактики гепатита В рекомбинатная) Эувакс",
                        "serviceID": "КСМ 3001",
                        "price": "740",


                    },
                    {
                        "serviceText": "Вакцинация (для профилактики дифтерии, столбника, коклюша) Адасель",
                        "serviceID": "КСМ 3002",
                        "price": "3983",


                    },
                    {
                        "serviceText": "Вакцинация (для профилактики дифтерии, столбника, коклюша, полиомиелита) Пентаксим",
                        "serviceID": "КСМ 3003",
                        "price": "2455",


                    },
                    {
                        "serviceText": "Вакцинация (для профилактики полиомиелита инактивированная) Полимилекс",
                        "serviceID": "КСМ 3004",
                        "price": "3055",


                    },
                    {
                        "serviceText": "Вакцинация (пневмококковая) Превенар",
                        "serviceID": "КСМ 3005",
                        "price": "3160",


                    },
                    {
                        "serviceText": "Вакцинация (против кори, паротита и краснухи) М-м-Р",
                        "serviceID": "КСМ 3006",
                        "price": "3815",


                    },
                    {
                        "serviceText": "Вакцинация профилактики менингококковая Менактра",
                        "serviceID": "КСМ 3007",
                        "price": "6200",


                    },
                    {
                        "serviceText": "Вакцинация для профилактики вирусного гепатита А Харвикс",
                        "serviceID": "КСМ 3008",
                        "price": "1800",


                    },
                    {
                        "serviceText": "Вакцинация от коронавируса COVID-19 граждан иностранных государств Спутник- Лайт",
                        "serviceID": "КСМ 3009",
                        "price": "1500",


                    },
                    {
                        "serviceText": "Вакцинация от коронавируса COVID-19 (Спутник-Лайт)",
                        "serviceID": "КСМ 3010",
                        "price": "1500",


                    }
                ]
            }
        ]
    },
    {
        "id": 22,
        "categoryTitle": "Лабораторная диагностика",
        "subcategories": [
            {
                "subcategoryTitle": "Лабораторная диагностика",
                "services": [
                    {
                        "serviceText": "Исследование уровня общего белка в крови",
                        "serviceID": "КСМ 3100",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня альбумина в крови",
                        "serviceID": "КСМ 3101",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня мочевины в крови",
                        "serviceID": "КСМ 3102",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня мочевой кислоты в крови",
                        "serviceID": "КСМ 3103",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня креатинина в крови",
                        "serviceID": "КСМ 3104",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня общего билирубина в крови",
                        "serviceID": "КСМ 3105",
                        "price": "300",


                    },
                    {
                        "serviceText": "Определение транскутанного билирубинового индекса",
                        "serviceID": "КСМ 3106",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня свободного и связанного билирубина в крови",
                        "serviceID": "КСМ 3107",
                        "price": "350",


                    },
                    {
                        "serviceText": "Исследование уровня глюкозы в крови",
                        "serviceID": "КСМ 3108",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня триглицеридов в крови",
                        "serviceID": "КСМ 3109",
                        "price": "400",


                    },
                    {
                        "serviceText": "Исследование уровня холестерина в крови",
                        "serviceID": "КСМ 3110",
                        "price": "400",


                    },
                    {
                        "serviceText": "Исследование уровня общего белка в крови",
                        "serviceID": "КСМ 3100",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня лактатдегидрогеназы в крови ЛДГ",
                        "serviceID": "КСМ 3111",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня аспартат-трансаминазы в крови ASAT",
                        "serviceID": "КСМ 3112",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня аланин-трансаминазы в крови ALAT",
                        "serviceID": "КСМ 3113",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня гамма-глютамилтрансферазы в крови ГГТ",
                        "serviceID": "КСМ 3114",
                        "price": "400",


                    },
                    {
                        "serviceText": "Исследование уровня амилазы в крови",
                        "serviceID": "КСМ 3115",
                        "price": "300",


                    },
                    {
                        "serviceText": "Исследование уровня щелочной фосфатазы в крови",
                        "serviceID": "КСМ 3116",
                        "price": "300",


                    },
                    {
                        "serviceText": "Определение антистрептолизина-О в сыворотке крови АСЛО",
                        "serviceID": "КСМ 3117",
                        "price": "400",


                    },
                    {
                        "serviceText": "Общий (клинический) анализ крови",
                        "serviceID": "КСМ 3118",
                        "price": "400",


                    },
                    {
                        "serviceText": "Исследование уровня триглицеридов в крови",
                        "serviceID": "КСМ 3109",
                        "price": "400",


                    },
                    {
                        "serviceText": "Исследование уровня холестерина в крови",
                        "serviceID": "КСМ 3110",
                        "price": "400",


                    }
                ]
            }
        ]
    },
    {
        "id": 23,
        "categoryTitle": "Манипуляции",
        "subcategories": [
            {
                "subcategoryTitle": "Взятие крови",
                "services": [
                    {
                        "serviceText": "Взятие крови из пальца",
                        "serviceID": "КСМ 3400",
                        "price": "150",


                    },
                    {
                        "serviceText": "Взятие крови из периферической вены",
                        "serviceID": "КСМ 3401",
                        "price": "250",


                    },
                    {
                        "serviceText": "Взятие крови из периферической вены определение антител класса М, G(IgM,G) к коронавирусу COVID-19 (SARS-CoV-2) для сотрудников ВолгГМУ",
                        "serviceID": "КСМ 3402",
                        "price": "200",


                    },
                    {
                        "serviceText": "Взятие крови из периферической вены определение антител класса М, G(IgM,G) к коронавирусу COVID-19 (SARS-CoV-2)",
                        "serviceID": "КСМ 3403",
                        "price": "450",


                    }
                ]
            },
            {
                "subcategoryTitle": "Введение лекарственных средств",
                "services": [
                    {
                        "serviceText": "Внутривенное введение лекарственного средства",
                        "serviceID": "КСМ 3404",
                        "price": "200",


                    },
                    {
                        "serviceText": "Подкожное введение лекарственных препаратов",
                        "serviceID": "КСМ 3405",
                        "price": "250",


                    },
                    {
                        "serviceText": "Внутривенная инфузия лекарственного средства",
                        "serviceID": "КСМ 3406",
                        "price": "350",


                    },
                    {
                        "serviceText": "Определение глюкозы крови (капельно)",
                        "serviceID": "КСМ 3407",
                        "price": "200",


                    },
                    {
                        "serviceText": "Экспресс тестирование на определение in vitro В-гемолитического стрептококка группы А (стрептатест)",
                        "serviceID": "КСМ 3408",
                        "price": "450",


                    },
                    {
                        "serviceText": "Получение секрета простаты",
                        "serviceID": "КСМ 3409",
                        "price": "300",


                    },
                    {
                        "serviceText": "Взятие гинекологического мазка (без приема врача)",
                        "serviceID": "КСМ 3410",
                        "price": "400",


                    },
                    {
                        "serviceText": "Дыхательный уреазный тест - Helicobacter pylori",
                        "serviceID": "КСМ 3411",
                        "price": "650",


                    },
                    {
                        "serviceText": "Ингаляторное введение лекарственных препаратов через небулайзер",
                        "serviceID": "КСМ 3412",
                        "price": "250",


                    },
                    {
                        "serviceText": "Взятие мазков из рото-носо-глотки на SARS-CoV-2 для обучающихся ВолгГМУ",
                        "serviceID": "КСМ 3413",
                        "price": "450",


                    },
                    {
                        "serviceText": "Взятие мазков из рото-носо-глотки на SARS-CoV-2 для сотрудников ВолгГМУ",
                        "serviceID": "КСМ 3414",
                        "price": "200",


                    },
                    {
                        "serviceText": "Взятие мазков из рото-носо-глотки на SARS-CoV-2",
                        "serviceID": "КСМ 3415",
                        "price": "600",


                    },
                    {
                        "serviceText": "Внутрисуставное введение лекарственных препаратов",
                        "serviceID": "КСМ 3416",
                        "price": "800",


                    },
                    {
                        "serviceText": "Внутримышечное введение лекарственного средства",
                        "serviceID": "КСМ 3417",
                        "price": "200",


                    },
                    {
                        "serviceText": "Взятие мазка из носа",
                        "serviceID": "КСМ 3418",
                        "price": "250",


                    },
                    {
                        "serviceText": "Мазок на BL (дифтерию) (1 мазок )",
                        "serviceID": "КСМ 3419",
                        "price": "250",


                    },
                    {
                        "serviceText": "Перианальный соскоб на энтеробиоз",
                        "serviceID": "КСМ 3420",
                        "price": "250",


                    },
                    {
                        "serviceText": "Взятие биоматериала (без приема врача)",
                        "serviceID": "КСМ 3421",
                        "price": "400",


                    },
                    {
                        "serviceText": "Взятие биоматериала",
                        "serviceID": "КСМ 3422",
                        "price": "250",


                    },
                    {
                        "serviceText": "Внутривенная инфузия лекарственного средства с сопровождением врача",
                        "serviceID": "КСМ 3423",
                        "price": "1500",


                    }
                ]
            }
        ]
    },
    {
        "id": 24,
        "categoryTitle": "Медицинская помощь на дому",
        "subcategories": [
            {
                "subcategoryTitle": "Медицинская помощь на дому",
                "services": [
                    {
                        "serviceText": "Прием (осмотр, консультация) врача специалиста на дому",
                        "serviceID": "КСМ 3500",
                        "price": "2500",


                    },
                    {
                        "serviceText": "Забор биоматериала на дому",
                        "serviceID": "КСМ 3501",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Онлайн консультация специалиста после первичного приема (до 5 мин.)",
                        "serviceID": "КСМ 3502",
                        "price": "400",


                    },
                    {
                        "serviceText": "Проведение электрокардиографических исследований на дому",
                        "serviceID": "КСМ 3503",
                        "price": "1900",


                    },
                    {
                        "serviceText": "Внутривенное введение лекарственного средства на дому",
                        "serviceID": "КСМ 3504",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Подкожное введение лекарственных препаратов на дому",
                        "serviceID": "КСМ 3505",
                        "price": "350",


                    },
                    {
                        "serviceText": "Внутривенная инфузия лекарственного средства на дому",
                        "serviceID": "КСМ 3506",
                        "price": "1550",


                    },
                    {
                        "serviceText": "Внутримышечное введение лекарственного средства на дому",
                        "serviceID": "КСМ 3507",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Определение глюкозы крови (капельно) на дому",
                        "serviceID": "КСМ 3508",
                        "price": "1300",


                    },
                    {
                        "serviceText": "Выезд и определение PНК коронавируса COVID-19 (SARS-CoV-2) в отделяемом со слизистой оболочки ротоглотки и носоглотки методом ПЦР на дому ( ВолгГМУ)",
                        "serviceID": "КСМ 3509",
                        "price": "2200",


                    },
                    {
                        "serviceText": "Взятие и исследования мазков из рото-носо-глотки на SARS-CoV-2 на дому",
                        "serviceID": "КСМ 3510",
                        "price": "3500",


                    },
                    {
                        "serviceText": "Выезд для взятия мазков из рото-носо-глотки на SARS-CoV-2 на территории предприятия (офиса) в пределах г. Волгограда и г. Волжского",
                        "serviceID": "КСМ 3511",
                        "price": "5000",


                    },
                    {
                        "serviceText": "Выезд для взятия мазков из рото-носо-глотки на SARS-CoV-2 на территории предприятия (офиса) свыше 100 км",
                        "serviceID": "КСМ 3512",
                        "price": "10000",


                    }
                ]
            }
        ]
    },
    {
        "id": 25,
        "categoryTitle": "Медицинский осмотр иностранных граждан",
        "subcategories": [
            {
                "subcategoryTitle": "Медицинское освидетельствование",
                "services": [
                    {
                        "serviceText": "Комплексная услуга по проведению медицинского освидетельствования, включая проведение химико-токсикологических исследований наличия в организме иностранного гражданина или лица без гражданства наркотических средств или психотропных веществ либо новых потенциально опасных психоактивных веществ и их метаболитов, на наличие или отсутствие у иностранного гражданина или лица без гражданства инфекционных заболеваний, представляющих опасность для окружающих, и заболевания, вызываемого вирусом иммунодефицита человека (ВИЧинфекции)",
                        "serviceID": "КСМ 1722",
                        "price": "4850",


                    },
                    {
                        "serviceText": "Комплексная услуга по проведению медицинского освидетельствования, включая проведение химико-токсикологических исследований наличия в организме иностранного гражданина или лица без гражданства наркотических средств или психотропных веществ либо новых потенциально опасных психоактивных веществ и их метаболитов, на наличие или отсутствие у иностранного гражданина или лица без гражданства инфекционных заболеваний, представляющих опасность для окружающих, и заболевания, вызываемого вирусом иммунодефицита человека (ВИЧинфекции) и обследований по допуску к занятиям физической культурой",
                        "serviceID": "КСМ 1723",
                        "price": "6000",


                    }
                ]
            },
            {
                "subcategoryTitle": "Исследования",
                "services": [
                    {
                        "serviceText": "Иммунодиагностика с применением аллергена туберкулезного рекомбинантного в стандартном разведении для иностранных граждан или лиц без гражданства в возрасте от 8 до 14 лет включительно",
                        "serviceID": "КСМ 1727",
                        "price": "400",


                    },
                    {
                        "serviceText": "Иммунодиагностика с применением аллергена туберкулезного рекомбинантного в стандартном разведении для иностранных граждан или лиц без гражданства в возрасте от 15 до 17 лет включительно",
                        "serviceID": "КСМ 1728",
                        "price": "400",


                    }
                ]
            }
        ]
    }
]

