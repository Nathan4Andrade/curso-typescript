import os

diretorio_base = "./"

for i in range(1, 14):
    nome_pasta = "aula-ts-{0:02d}".format(i)
    caminho_pasta = os.path.join(diretorio_base, nome_pasta)

    if not os.path.exists(caminho_pasta):
        os.makedirs(caminho_pasta)
        print("Pasta '{0}' criada com sucesso em '{1}'".format(
            nome_pasta, caminho_pasta))
    else:
        print("Pasta '{0}' ja existe em '{1}'".format(
            nome_pasta, caminho_pasta))
