# função tradicional
def quadrado(n):
    return n**2

print('def', quadrado(10))

# função anônima
print('lambda', (lambda x: x**2)(10))

lista = [1, 2, 3, 4]
print('antes', lista)

lista2 = map(lambda x: x**2, lista)

print('depois', list(lista2))
