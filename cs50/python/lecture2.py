# name = input("Name: ")
# print("Hello, " + name)
# print(f"Hello, {name}")


# n = int(input("Number: "))
# if n > 0:
#     print("n is positive")
# elif n < 0:
#     print("n is negative")
# else:
#     print("n is zero")


# data structure

# define a list of name

names = ["Hermione", "Harry", "Ron", "Ginny"]

names.append("Draco")
names.sort()

print(names)

# create a set (set contain unique element)

s = set()

s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)
s.remove(2)

print(f"length of set is {len(s)}")

# loop

for i in [0, 1, 2, 3, 4, 5]:
    print(i)
