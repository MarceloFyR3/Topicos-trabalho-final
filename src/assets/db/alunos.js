const alunos = [
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
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "JOAO GOMES",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
               "nome": "Matematica",
               "cargaHoraria": 80,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\matematica",
               "valor": "200.00",
               "atividadeComplementar": 0,
               "tipo": "Curricular",
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
               }
            },
            {
               "nome": "Capoeira",
               "cargaHoraria": 40,
               "presença": 0,
               "falta": 0,
               "notaProva": 0,
               "trabalho": 0,
               "pathMaterialEstudo": "c:\\material\\geografia",
               "atividadeComplementar": 0,
               "valor": "200.00",
               "tipo": "Extra",
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "MARTA RIBEIRO",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "MARCELO ANDRADE",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "MARIA MADALENA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "LUCAS RISOTO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "REGINA SAMPAIO",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "CARLOS SAMPAIO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "MARIA DO NASCIMENTO",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "ANTONIO OSMAR",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "LUCIA MARIA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "FRANCISCO GONÇALVES",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "CLAUDETE FREITAS",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "ROBERTO DRUMMOND",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "SANDRA MARIA FARIA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "SERGIO FARIA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "MARIA INES PORTUAL",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "PAULO PORTUAL",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "SABRINA SILVA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "JOAO SILVA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "SALETE SANTANA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "FRANCISCO SANTANA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "EMILIA PEREZ",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "ANTONIO PEREZ",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "SANDRA SILVA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "RIBAMAR NETO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "BETE MEDINA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "KAIO MEDINA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "PAMELA AGUIAR",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "CRISTIAM SANTOS",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "MARIA ROBERTA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "ROBERTO DO CARMO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "THAIOS REPULA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "SERGIO REPULA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
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
            "id": 1,
            "nome": "SONIA PEREZ",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "LUIZ BATISTA",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
               }
            }
         ]
      }
   },
   {
      "id": 19,
      "nome": "BRUNO RIBEIRO METSH",
      "dataNascimento": "19/03/2000",
      "matricula": 668217,
      "genero": "M",
      "responsavel": [
         {
            "id": 1,
            "nome": "KATIA SABRINA",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "NETO RIBEIRO",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 2,
         "nome": "Turma 2",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
               }
            }
         ]
      }
   },
   {
      "id": 20,
      "nome": "EDUARDO BORGUES",
      "dataNascimento": "20/03/2000",
      "matricula": 632664,
      "genero": "M",
      "responsavel": [
         {
            "id": 1,
            "nome": "REGINA BORGUES",
            "cpf": "111.111.111-11",
            "parentesco": "Mãe",
            "telefone": "(41) 4141-4141"
         },
         {
            "id": 2,
            "nome": "JOAO BORGUES",
            "cpf": "222.222.222-22",
            "parentesco": "Pai",
            "telefone": "(41) 4141-4141"
         }
      ],
      "turma": {
         "id": 1,
         "nome": "Turma 1",
         "disciplina": [
            {
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
               "professor": {
                  "id": 1,
                  "nome": "Maria De Lurdes Aguiar",
                  "email": "maria@escola.com.br",
                  "genero": "F"
               }
            },
            {
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
               "professor": {
                  "id": 2,
                  "nome": "Afonso Padilha",
                  "email": "afonso@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 3,
                  "nome": "Tiago Santos",
                  "email": "tiago@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 4,
                  "nome": "Sirlei Da Silva",
                  "email": "geo@escola.com.br",
                  "genero": "M"
               }
            },
            {
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
               "professor": {
                  "id": 5,
                  "nome": "Marta Costa",
                  "email": "marta@escola.com.br",
                  "genero": "F"
               }
            }
         ]
      }
   }
]