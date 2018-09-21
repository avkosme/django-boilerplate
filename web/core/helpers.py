import re


def to_snake_case(string):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', string)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()


def from_snake_case(string):
    r = string.title().replace("_", "")
    return r[0].lower() + r[1:]
