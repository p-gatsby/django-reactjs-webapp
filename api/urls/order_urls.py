from django.urls import path
from api.views import order_views as views


urlpatterns = [
    path('', views.getOrders, name='orders'),
    path('create/', views.createOrderItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name='my-orders'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-deliver'),
]
