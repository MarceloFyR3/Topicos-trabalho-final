var alunos = [
   {
      "id": 1,
      "nome": "MARIA FRANCISCA GOMES",
      "dataNascimento": "01/03/2000",
      "matricula": 11734129,
      "genero": "F",
      "responsavel": [
         {
            "id": 1,
            "nome": "FRANCISCA AGUIAR",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 1
         },
         {
            "id": 2,
            "nome": "JOAO GOMES",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 1
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 2,
      "nome": "JOSE RIBEIRO ANDRADE",
      "dataNascimento": "2/03/2000",
      "matricula": 5754529,
      "genero": "M",
      "responsavel": [
         {
            "id": 3,
            "nome": "MARTA RIBEIRO",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 2
         },
         {
            "id": 4,
            "nome": "MARCELO ANDRADE",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 2
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 3,
      "nome": "ANA MARIA LUCIA ",
      "dataNascimento": "03/06/2000",
      "matricula": 3089858,
      "genero": "F",
      "responsavel": [
         {
            "id": 5,
            "nome": "MARIA MADALENA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 3
         },
         {
            "id": 6,
            "nome": "LUCAS RISOTO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 4
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 4,
      "nome": "JOAO CARLOS SAMPAIO",
      "dataNascimento": "04/01/2000",
      "matricula": 2984119,
      "genero": "M",
      "responsavel": [
         {
            "id": 7,
            "nome": "REGINA SAMPAIO",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 4
         },
         {
            "id": 8,
            "nome": "CARLOS SAMPAIO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 4
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 5,
      "nome": "ANTONIO OSMAR JR.",
      "dataNascimento": "05/12/2000",
      "matricula": 2576348,
      "genero": "M",
      "responsavel": [
         {
            "id": 9,
            "nome": "MARIA DO NASCIMENTO",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 5
         },
         {
            "id": 10,
            "nome": "ANTONIO OSMAR",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 5
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 6,
      "nome": "FRANCISCO NETO GONÇALVES",
      "dataNascimento": "6/03/2000",
      "matricula": 1772197,
      "genero": "M",
      "responsavel": [
         {
            "id": 11,
            "nome": "LUCIA MARIA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 6
         },
         {
            "id": 12,
            "nome": "FRANCISCO GONÇALVES",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 6
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 7,
      "nome": "CARLOS DRUMMOND FREITAS",
      "dataNascimento": "07/10/2000",
      "matricula": 1489191,
      "genero": "M",
      "responsavel": [
         {
            "id": 13,
            "nome": "CLAUDETE FREITAS",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 7
         },
         {
            "id": 14,
            "nome": "ROBERTO DRUMMOND",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 7
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 8,
      "nome": "PAULO SERGIO FARIA",
      "dataNascimento": "8/03/2000",
      "matricula": 1423262,
      "genero": "M",
      "responsavel": [
         {
            "id": 15,
            "nome": "SANDRA MARIA FARIA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 8
         },
         {
            "id": 16,
            "nome": "SERGIO FARIA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 8
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 9,
      "nome": "PEDRO GUIMARÃES PORTUAL",
      "dataNascimento": "17/08/2000",
      "matricula": 1219605,
      "genero": "M",
      "responsavel": [
         {
            "id": 17,
            "nome": "MARIA INES PORTUAL",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 9
         },
         {
            "id": 18,
            "nome": "PAULO PORTUAL",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 9
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 10,
      "nome": "LUCAS SILVA",
      "dataNascimento": "10/11/2000",
      "matricula": 1127310,
      "genero": "M",
      "responsavel": [
         {
            "id": 19,
            "nome": "SABRINA SILVA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 10
         },
         {
            "id": 20,
            "nome": "JOAO SILVA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 10
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 11,
      "nome": "LUIZ FRANCISCO SANTANA",
      "dataNascimento": "11/10/2000",
      "matricula": 1107792,
      "genero": "M",
      "responsavel": [
         {
            "id": 21,
            "nome": "SALETE SANTANA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 11
         },
         {
            "id": 22,
            "nome": "FRANCISCO SANTANA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 11
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 12,
      "nome": "MARCOS PEREZ",
      "dataNascimento": "02/01/2000",
      "matricula": 1106165,
      "genero": "M",
      "responsavel": [
         {
            "id": 23,
            "nome": "EMILIA PEREZ",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 12
         },
         {
            "id": 24,
            "nome": "ANTONIO PEREZ",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 12
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 13,
      "nome": "LUIS FELIPE RIBAMAR",
      "dataNascimento": "13/12/2000",
      "matricula": 935905,
      "genero": "M",
      "responsavel": [
         {
            "id": 25,
            "nome": "SANDRA SILVA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 13
         },
         {
            "id": 26,
            "nome": "RIBAMAR NETO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 13
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 14,
      "nome": "GABRIEL MEDINA",
      "dataNascimento": "14/03/2000",
      "matricula": 932449,
      "genero": "M",
      "responsavel": [
         {
            "id": 27,
            "nome": "BETE MEDINA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 14
         },
         {
            "id": 28,
            "nome": "KAIO MEDINA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 14
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 15,
      "nome": "RAFAEL AGUIAR SANTOS",
      "dataNascimento": "15/03/2000",
      "matricula": 821638,
      "genero": "M",
      "responsavel": [
         {
            "id": 29,
            "nome": "PAMELA AGUIAR",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 15
         },
         {
            "id": 30,
            "nome": "CRISTIAM SANTOS",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 15
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 16,
      "nome": "FRANCISCA DO CARMO",
      "dataNascimento": "16/03/2000",
      "matricula": 725642,
      "genero": "F",
      "responsavel": [
         {
            "id": 31,
            "nome": "MARIA ROBERTA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 16
         },
         {
            "id": 32,
            "nome": "ROBERTO DO CARMO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 16
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 17,
      "nome": "DANIEL REPULA",
      "dataNascimento": "17/03/2000",
      "matricula": 711338,
      "genero": "M",
      "responsavel": [
         {
            "id": 33,
            "nome": "THAIOS REPULA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 17
         },
         {
            "id": 34,
            "nome": "SERGIO REPULA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 17
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 18,
      "nome": "MARCELO CARDOSO",
      "dataNascimento": "18/03/2000",
      "matricula": 693215,
      "genero": "M",
      "responsavel": [
         {
            "id": 35,
            "nome": "SONIA PEREZ",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 18
         },
         {
            "id": 36,
            "nome": "LUIZ BATISTA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 18
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 19,
      "nome": "BRUNO RIBEIRO BORGUES",
      "dataNascimento": "19/03/2000",
      "matricula": 668217,
      "genero": "M",
      "responsavel": [
         {
            "id": 37,
            "nome": "KATIA SABRINA BORGUES",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 19
         },
         {
            "id": 38,
            "nome": "NETO RIBEIRO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 19
         }
      ],
      "turma": {
         "id": 2,
         "nome": "6º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   },
   {
      "id": 20,
      "nome": "EDUARDO RIBEIRO BORGUES",
      "dataNascimento": "20/03/2000",
      "matricula": 632664,
      "genero": "M",
      "responsavel": [
         {
            "id": 37,
            "nome": "KATIA SABRINA BORGUES",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141",
            "alunoId": 20
         },
         {
            "id": 38,
            "nome": "NETO RIBEIRO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141",
            "alunoId": 20
         }
      ],
      "turma": {
         "id": 1,
         "nome": "5º Ano",
         "anoLetivo": 0,
         "disciplinas": [
            {
               "id": 1,
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "tipo": "Curricular",
               "atividadeComplementar": 0,
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Segunda",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 1
               }
            },
            {
               "id": 2,
               "nome": "Portugues",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\portugues",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Terça",
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 2
               }
            },
            {
               "id": 3,
               "nome": "Ciencias",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\Ciencias",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quarta",
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 3
               }
            },
            {
               "id": 4,
               "nome": "Educação Fisica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\eduFisica",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Quinta",
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M",
                  "discliplinaId": 4
               }
            },
            {
               "id": 5,
               "nome": "Geografia",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Curricular",
               "provas": ["23/06/2022"],
               "diaSemanaAula": "Sexta",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F",
                  "discliplinaId": 5
               }
            }
         ]
      }
   }
]