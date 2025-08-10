from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def ordersuccess(request):
    return render(request, 'ordersuccess.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def pampers(request):
    return render(request, 'pampers.html')


def bottle(request):
    return render(request, 'bottle.html')


def girls(request):
    return render(request, 'girls.html')


def offer(request):
    return render(request, 'offer.html')


def soap(request):
    return render(request, 'soap.html')


def stroller(request):
    return render(request, 'stroller.html')
def boy(request):
    return render(request, 'boy.html')

def checkout(request):
    return render(request, 'checkout.html')

def cart(request):
    return render(request, 'cart.html')


def payment(request):
    return render(request, 'payment.html')