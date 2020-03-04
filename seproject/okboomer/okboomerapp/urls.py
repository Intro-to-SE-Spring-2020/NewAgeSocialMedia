from rest_framework import routers
from .api import BoomViewSet

router = routers.DefaultRouter()
router.register('api/okboomerapp', BoomViewSet, 'okboomerapp')

urlpatterns = router.urls


